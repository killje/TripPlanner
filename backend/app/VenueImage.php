<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 8-10-2018
 * Time: 20:26
 */

namespace App;


class VenueImage
{
    /**
     * @var string
     */
    public $shotAt;

    /**
     * @var string
     */
    public $photographer;

    /**
     * @var string
     */
    public $photographerImage;

    /**
     * @var string
     */
    public $horizontalRectangleURL;

    /**
     * @var string
     */
    public $squareURL;

    /**
     * @return string
     */
    public function getShotAt(): string
    {
        return $this->shotAt;
    }

    /**
     * @param string $shotAt
     */
    public function setShotAt(string $shotAt): void
    {
        $this->shotAt = $shotAt;
    }

    /**
     * @return string
     */
    public function getPhotographer(): string
    {
        return $this->photographer;
    }

    /**
     * @param string $photographer
     */
    public function setPhotographer(string $photographer): void
    {
        $this->photographer = $photographer;
    }

    /**
     * @return string
     */
    public function getPhotographerImage(): string
    {
        return $this->photographerImage;
    }

    /**
     * @param string $photographerImage
     */
    public function setPhotographerImage(string $photographerImage): void
    {
        $this->photographerImage = $photographerImage;
    }

    /**
     * @return string
     */
    public function getHorizontalRectangleURL(): string
    {
        return $this->horizontalRectangleURL;
    }

    /**
     * @param string $horizontalRectangleURL
     */
    public function setHorizontalRectangleURL(string $horizontalRectangleURL): void
    {
        $this->horizontalRectangleURL = $horizontalRectangleURL;
    }

    /**
     * @return string
     */
    public function getSquareURL(): string
    {
        return $this->squareURL;
    }

    /**
     * @param string $squareURL
     */
    public function setSquareURL(string $squareURL): void
    {
        $this->squareURL = $squareURL;
    }

    /**
     * Obtain an associative array
     */
    public function getAsArray() {
        return [
            'shotAt' => $this->shotAt,
            'photographer' => $this->photographer,
            'photographerImage' => $this->photographerImage,
            'horizontalRectangleURL' => $this->horizontalRectangleURL,
            'squareURL' => $this->squareURL
        ];
    }

}