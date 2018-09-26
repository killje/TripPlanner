<?php
/**
 * Created by PhpStorm.
 * User: soelm
 * Date: 24-9-2018
 * Time: 09:42
 */

namespace App;


class VenueCategory
{
    /**
     * Name of the category
     * @var string
     */
    protected $name;

    /**
     * Plural name
     * @var string
     */
    protected $pluralName;

    /**
     * Category icon
     * @var string
     */
    protected $icon;

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
     * @return string
     */
    public function getPluralName(): string
    {
        return $this->pluralName;
    }

    /**
     * @param string $pluralName
     */
    public function setPluralName(string $pluralName): void
    {
        $this->pluralName = $pluralName;
    }

    /**
     * @return string
     */
    public function getIcon(): string
    {
        return $this->icon;
    }

    /**
     * @param string $icon
     */
    public function setIcon(string $icon): void
    {
        $this->icon = $icon;
    }

    /**
     * Obtain an associative array
     */
    public function getAsArray() {
        return [
          'name' => $this->name,
          'pluralName' => $this->pluralName,
          'icon' => $this->icon
        ];
    }

}