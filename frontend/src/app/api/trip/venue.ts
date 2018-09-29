import {EventEmitter} from "@angular/core";

export class Venue {
    id: string;
    name: string;
    address: string[];
    latitude: number;
    longitude: number;
    categories: string[];
    url: string;
    openingHours: string;
    popularHours: string;
    price: string;
    rating: string;
    ratingColor: string;
    peopleNow: boolean;
    likes: number;

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