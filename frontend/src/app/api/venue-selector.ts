import {EventEmitter} from "@angular/core";

import {Venue} from "./venue";

export class VenueSelector {
    
    private venue: Venue;
    private hovered: boolean = false;
    private active: boolean = false;
    
    stateUpdate = new EventEmitter<VenueStateEvent>();
    
    constructor(venue: Venue) {
        this.venue = venue;
    }
    
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
    
    getVenue(): Venue {
        return this.venue;
    }
    
}

export class VenueStateEvent {
    
    constructor(private venue: VenueSelector,private emitedState: 'hovered' | 'active',private emitedValue: boolean) {
    }
    
    public getVenue(): VenueSelector {
        return this.venue;
    }
    
    public getEmitedState(): 'hovered' | 'active' {
        return this.emitedState;
    }
    
    public getEmitedValue(): boolean {
        return this.emitedValue;
    }
    
}
