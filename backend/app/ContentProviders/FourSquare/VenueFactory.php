<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 26-9-2018
 * Time: 11:40
 */

namespace App\ContentProviders\FourSquare;

use App\ContentProviders\FourSquare;
use App\Venue;
use App\VenueCategory;
use App\VenueImage;
use Illuminate\Contracts\Filesystem\FileNotFoundException;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class VenueFactory
{
    /**
     * @var FourSquare|mixed
     */
    protected $contentProvider;

    /**
     * VenueFactory constructor.
     * @param FourSquare $fourSquare
     */
    public function __construct(FourSquare $fourSquare)
    {
        $this->contentProvider = $fourSquare;
    }

    /**
     * Obtain a number of collections, from a given long-latitude
     * @param float $longitude
     * @param float $latitude
     * @param int $radius
     * @return array
     */
    public function getVenuesByLongLatitude(float $longitude, float $latitude, int $radius): array
    {
        $endpoint = "venues/explore";
        $result = $this->contentProvider->get($endpoint, "GET", [
            'll' => $latitude . "," . $longitude,
            'intent' => "browse",
            'radius' => $radius,
            'limit' => config('services.foursquare.venue_map_limit'), // Temporary because of quota
        ]);

        if($this->contentProvider->checkResponse($endpoint, $result) == false)
            return [];

        // For each venue we obtain, create a venue object
        $venues = [];
        foreach ($result->response->groups[0]->items as $venue) {
            $newVenue = $this->createNonDetailedVenueFromAPIResponse($venue->venue);
            array_push($venues, $newVenue->getAsSimpleArray());
        }

        return $venues;
    }

    /**
     * @param string $id
     * @return Venue
     */
    public function getVenueById(string $id)
    {
        // If cached file exists, get that one, else, get new one from server
        if(Storage::exists('venues/' . $id . '.json'))
        {
            try {
                return $this->createVenueFromAPIResponse(json_decode(Storage::get('venues/' . $id . '.json')));
            } catch (FileNotFoundException $e) {
                Log::error('Something went wrong while opening file: ' . Storage::path('venues/' . $id . '.json'));
            }
        } else {
            // We haven't cached this venue. Let's obtain it.
            $endpoint = 'venues/' . $id;
            $result = $this->contentProvider->get($endpoint, "GET", []);

            if ($this->contentProvider->checkResponse($endpoint, $result) == false)
                return NULL;

            // Store the venue
            Storage::put('venues/' . $id . '.json', json_encode($result->response->venue));

            return $this->createVenueFromAPIResponse($result->response->venue);
        }

    }

    /**
     * @param $object
     * @return Venue
     */
    public function createVenueFromAPIResponse($object): Venue
    {
        //dd($object->photos->groups[1]->items);
        $venue = new Venue();
        $venue->setId($object->id);
        $venue->setName($object->name);
        if(isset($object->description)) $venue->setDescription($object->description);
        $venue->setAddressHumanReadable($object->location->formattedAddress);
        $venue->setLatitude($object->location->lat);
        $venue->setLongitude($object->location->lng);
        $this->setVenueCategories($object->categories, $venue);
        $this->setVenueImages($object->photos->groups[1]->items, $venue);
        if(isset($object->url)) $venue->setURL($object->url);
        if(isset($object->hours)) $venue->setOpeningHours($object->hours->status);
        if(isset($object->popular->status)) $venue->setPopularHours($object->popular->status);
        if(isset($object->price)) $venue->setPriceClass($object->price->message);
        if(isset($object->rating)) $venue->setRating($object->rating);
        if(isset($object->ratingColor)) $venue->setRatingColor($object->ratingColor);
        $venue->setPeopleNow($object->hereNow->count);
        $venue->setLikes($object->likes->count);
        return $venue;
    }

    /**
     * The following method will only get the basic venue information, to be used for the map scrolling
     * @param $object
     * @return Venue
     */
    public function createNonDetailedVenueFromAPIResponse($object): Venue
    {
        $venue = new Venue();
        $venue->setId($object->id);
        $venue->setName($object->name);
        $venue->setAddressHumanReadable($object->location->formattedAddress);
        $venue->setLatitude($object->location->lat);
        $venue->setLongitude($object->location->lng);
        $this->setVenueCategories($object->categories, $venue);
        return $venue;
    }

    /**
     * @param $categories
     * @param Venue $venue
     */
    private function setVenueCategories($categories, Venue $venue)
    {
        foreach($categories as $category) {
            $newCategory = new VenueCategory();
            $newCategory->setIcon($category->icon->prefix . "64" . $category->icon->suffix);
            $newCategory->setName($category->name);
            $newCategory->setPluralName($category->pluralName);
            array_push($venue->categories, $newCategory);
        }
    }

    /**
     * @param $images
     * @param Venue $venue
     */
    private function setVenueImages($images, Venue $venue)
    {
        foreach($images as $image) {
            $newImage = new VenueImage();
            $newImage->setShotAt(\Carbon\Carbon::createFromTimestamp($image->createdAt)->toCookieString());
            if(isset($image->user->lastName))
                $newImage->setPhotographer(ucfirst($image->user->firstName) . " " . ucfirst($image->user->lastName));
            else
                $newImage->setPhotographer(ucfirst($image->user->firstName));
            $newImage->setPhotographerImage($image->user->photo->prefix . "250x250" . $image->user->photo->suffix);
            $newImage->setHorizontalRectangleURL($image->prefix . "800x344" . $image->suffix);
            $newImage->setSquareURL($image->prefix . min($image->width, $image->height) . "x" . min($image->width, $image->height) . $image->suffix);
            array_push($venue->images, $newImage);
        }
    }

    /**
     * Enter a search term, get featured activities, get detailed information, return
     * @param $query
     * @return array
     */
    public function getFeaturedByLocation($query): array
    {
        $endpoint = "venues/explore";
        $result = $this->contentProvider->get($endpoint, "GET", [
            'near' => $query,
            'query' => 'Fun',
            'limit' => config('services.foursquare.venue_featured_limit'),
            'day' => 'Wednesday',
            'time' => '11am'
        ]);

        if($this->contentProvider->checkResponse($endpoint, $result) == false)
            return [];

        // For each venue we obtain, create a venue object
        shuffle($result->response->groups[0]->items);
        $venues = [];
        foreach ($result->response->groups[0]->items as $venue) {
            $newVenue = $this->getVenueById($venue->venue->id);
            array_push($venues, $newVenue->getAsSimpleArray());
        }

        return $venues;
    }
}