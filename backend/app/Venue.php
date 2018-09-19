<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 17-9-2018
 * Time: 13:47
 */

namespace App;

/**
 * Class Venue
 * Aliases: Points of Interest, Activity
 * @package App
 */
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
     * A Simple Array for the most generic details e.g. without pictures
     */
    public function getAsSimpleArray() {
        return array(
            "id" => $this->getId(),
            "name" => $this->getName(),
            "address" => $this->getAddressHumanReadable(),
            "latitude" => $this->getLatitude(),
            "longitude" => $this->getLongitude(),
        );
    }

}