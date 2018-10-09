import {EventEmitter} from "@angular/core";
import {VenueInterface} from "./venue-interface";

export class Venue implements VenueInterface{
    id: string;
    name: string;
    description: string;
    address: string[];
    latitude: number;
    longitude: number;
    categories: {
        name: string;
        pluralName: string;
        icon: string;
    }[];
    images: {
        shotAt: string;
        photographer: string;
        photographerImage: string;
        horizontalRectangleURL: string;
        squareURL: string;
    }[];
    url: string;
    openingHours: string;
    popularHours: string;
    price: string;
    rating: string;
    ratingColor: string;
    peopleNow: string;
    likes: number;

    constructor(intf?: VenueInterface) {
        if (intf == undefined) {
            return;
        }
        
        this.id = intf.id;
        this.name = intf.name;
        this.description = intf.description;
        this.address = intf.address;
        this.latitude = intf.latitude;
        this.longitude = intf.longitude;
        this.categories = intf.categories;
        this.images = intf.images;
        this.url = intf.url;
        this.openingHours = intf.openingHours;
        this.popularHours = intf.popularHours;
        this.price = intf.price;
        this.rating = intf.rating;
        this.ratingColor = intf.ratingColor;
        this.peopleNow = intf.peopleNow;
        this.likes = intf.likes;
    }

    private hovered: boolean = false;
    private active: boolean = false;

    stateUpdate = new EventEmitter<VenueStateEvent>();

    setHovered(isHovered: boolean): void {
        this.stateUpdate.emit(new VenueStateEvent(this, 'hovered', isHovered));
        this.hovered = isHovered;
    }

    isHovered(): boolean {
        return this.hovered;
    }

    setActive(isActive: boolean): void {
        this.stateUpdate.emit(new VenueStateEvent(this, 'active', isActive));
        this.active = isActive;
    }

    isActive(): boolean {
        return this.active;
    }

}

export class VenueStateEvent {

    constructor(private venue: Venue, private emitedState: 'hovered' | 'active', private emitedValue: boolean) {
    }

    public getVenue(): Venue {
        return this.venue;
    }

    public getEmitedState(): 'hovered' | 'active' {
        return this.emitedState;
    }

    public getEmitedValue(): boolean {
        return this.emitedValue;
    }

}