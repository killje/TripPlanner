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
            'limit' => config('services.foursquare.venue_limit'), // Temporary because of quota
        ]);

        if($this->contentProvider->checkResponse($endpoint, $result) == false)
            return [];

        // For each venue we obtain, create a venue object
        $venues = [];
        foreach ($result->response->groups[0]->items as $venue) {
            $newVenue = $this->getVenueById($venue->venue->id);
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
        $venue = new Venue();
        $venue->setId($object->id);
        $venue->setName($object->name);
        $venue->setAddressHumanReadable($object->location->formattedAddress);
        $venue->setLatitude($object->location->lat);
        $venue->setLongitude($object->location->lng);
        $this->setVenueCategories($object->categories, $venue);
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
}