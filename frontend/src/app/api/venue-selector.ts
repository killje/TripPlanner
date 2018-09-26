import {Venue} from "./venue";

export class VenueSelector {
    
    private venue: Venue;
    private hovered: boolean = false;
    private active: boolean = false;
    
    constructor(venue: Venue) {
        this.venue = venue;
    }
    
    setHovered(isHovered: boolean): void {
        this.hovered = isHovered;
    }
    
    isHovered(): boolean {
        return this.hovered;
    }
    
    setActive(isActive: boolean): void {
        this.active = isActive;
    }
    
    isActive(): boolean {
        return this.active;
    }
    
    getVenue(): Venue {
        return this.venue;
    }
    
}
