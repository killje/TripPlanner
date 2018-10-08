<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 24-9-2018
 * Time: 09:06
 */

namespace App;


class Venue
{
    /**
     * Unique Identifier of venue
     * Example: 4642aef9498e51025cf4a7a5
     * @var string
     */
    protected $id;

    /**
     * Human-readable name
     * Example: Mr. Purple
     * @var string
     */
    protected $name;

    /**
     * A Description of what this venue is about
     * Example: Serving up the best dumplings, noodles and sesame pancakes in New York City www.vanessas.com
     * @var string
     */
    protected $description;

    /**
     * Full Address
     * Example:
     * "[180 Orchard St (btwn Houston & Stanton St)", "New York, NY 10002", "United Stated"]
     * @var array
     */
    protected $addressHumanReadable;

    /**
     * The latitude coordinates of a location
     * Example: 40.72173744277209
     * @var double
     */
    protected $latitude;

    /**
     * The longitude coordinates of a location
     * Example: -73.98800687282996
     * @var double
     */
    protected $longitude;

    /**
     * Venue categories
     * @var array
     */
    public $categories = [];

    /**
     * Venue Images
     * @var array
     */
    public $images = [];

    /**
     * URL with more information about this venue
     * @var string
     */
    public $URL;

    /**
     * Opening hours as a string, for the current or next day.
     * @var string
     */
    public $openingHours;

    /**
     * When is it recommended to visit this location?
     * @var string
     */
    public $popularHours;

    /**
     * @var string
     */
    public $priceClass;

    /**
     * Rating of the venue
     * @var string
     */
    public $rating;

    /**
     * Number of people right now
     * @var string
     */
    public $peopleNow;

    /**
     * Number of likes
     * @var int
     */
    public $likes;

    /**
     * The color of the rating (e.g. good = green)
     * @var string
     */
    public $ratingColor;

    /**
     * A Simple Array for the most generic details e.g. without pictures
     */
    public function getAsSimpleArray() {
        return array(
            "id" => $this->getId(),
            "name" => $this->getName(),
            "description" => $this->getDescription(),
            "address" => $this->getAddressHumanReadable(),
            "latitude" => $this->getLatitude(),
            "longitude" => $this->getLongitude(),
            "categories" => $this->getCategoriesAsArray(),
            "images" => $this->getImagesAsArray(),
            "url" => $this->URL,
            "openingHours" => $this->openingHours,
            "popularHours" => $this->popularHours,
            "price" => $this->priceClass,
            "rating" => $this->rating,
            "ratingColor" => $this->ratingColor,
            "peopleNow" => $this->peopleNow,
            "likes" => $this->likes
        );
    }

    public function getCategoriesAsArray() {
        $arr = [];
        foreach($this->categories as $category) {
            array_push($arr, $category->getAsArray());
        }
        return $arr;
    }

    public function getImagesAsArray() {
        $arr = [];
        foreach ($this->images as $image) {
            array_push($arr, $image->getAsArray());
        }
        return $arr;
    }

    /**
     * @return array
     */
    public function getCategories(): array
    {
        return $this->categories;
    }

    /**
     * @param array $categories
     */
    public function setCategories(array $categories): void
    {
        $this->categories = $categories;
    }

    /**
     * @return string
     */
    public function getURL(): string
    {
        return $this->URL;
    }

    /**
     * @param string $URL
     */
    public function setURL(string $URL): void
    {
        $this->URL = $URL;
    }

    /**
     * @return string
     */
    public function getOpeningHours(): string
    {
        return $this->openingHours;
    }

    /**
     * @param string $openingHours
     */
    public function setOpeningHours(string $openingHours): void
    {
        $this->openingHours = $openingHours;
    }

    /**
     * @return string
     */
    public function getPopularHours(): string
    {
        return $this->popularHours;
    }

    /**
     * @param string $popularHours
     */
    public function setPopularHours(string $popularHours): void
    {
        $this->popularHours = $popularHours;
    }

    /**
     * @return string
     */
    public function getPriceClass(): string
    {
        return $this->priceClass;
    }

    /**
     * @param string $priceClass
     */
    public function setPriceClass(string $priceClass): void
    {
        $this->priceClass = $priceClass;
    }

    /**
     * @return string
     */
    public function getRating(): string
    {
        return $this->rating;
    }

    /**
     * @param string $rating
     */
    public function setRating(string $rating): void
    {
        $this->rating = $rating;
    }

    /**
     * @return string
     */
    public function getPeopleNow(): string
    {
        return $this->peopleNow;
    }

    /**
     * @param string $peopleNow
     */
    public function setPeopleNow(string $peopleNow): void
    {
        $this->peopleNow = $peopleNow;
    }

    /**
     * @return int
     */
    public function getLikes(): int
    {
        return $this->likes;
    }

    /**
     * @param int $likes
     */
    public function setLikes(int $likes): void
    {
        $this->likes = $likes;
    }

    /**
     * @return string
     */
    public function getRatingColor(): string
    {
        return $this->ratingColor;
    }

    /**
     * @param string $ratingColor
     */
    public function setRatingColor(string $ratingColor): void
    {
        $this->ratingColor = $ratingColor;
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     */
    public function setId(string $id): void
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @param string $name
     */
    public function setName(string $name): void
    {
        $this->name = $name;
    }

    /**
     * @return array
     */
    public function getAddressHumanReadable(): array
    {
        return $this->addressHumanReadable;
    }

    /**
     * @param array $addressHumanReadable
     */
    public function setAddressHumanReadable(array $addressHumanReadable): void
    {
        $this->addressHumanReadable = $addressHumanReadable;
    }

    /**
     * @return float
     */
    public function getLatitude(): float
    {
        return $this->latitude;
    }

    /**
     * @param float $latitude
     */
    public function setLatitude(float $latitude): void
    {
        $this->latitude = $latitude;
    }

    /**
     * @return float
     */
    public function getLongitude(): float
    {
        return $this->longitude;
    }

    /**
     * @param float $longitude
     */
    public function setLongitude(float $longitude): void
    {
        $this->longitude = $longitude;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description): void
    {
        $this->description = $description;
    }

    /**
     * @return array
     */
    public function getImages(): array
    {
        return $this->images;
    }

    /**
     * @param array $images
     */
    public function setImages(array $images): void
    {
        $this->images = $images;
    }




}