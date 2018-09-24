<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 24-9-2018
 * Time: 09:06
 */

namespace App;


class DetailedVenue extends Venue
{
    /**
     * Venue categories
     * @var array
     */
    public $categories = [];

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
            "address" => $this->getAddressHumanReadable(),
            "latitude" => $this->getLatitude(),
            "longitude" => $this->getLongitude(),
            "categories" => $this->getCategoriesAsArray(),
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




}