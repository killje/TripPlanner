import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Venue} from './venue';
import {VenueSelector, VenueStateEvent} from './venue-selector';

@Injectable({
    providedIn: 'root'
})
export class VenueService {

    private venues: VenueSelector[] = [];
    private selectedVenue: VenueSelector;
    private hoveredVenue: VenueSelector;
    
    venueSelected = new EventEmitter<VenueSelector>();
    venueDeSelected = new EventEmitter<VenueSelector>();
    
    venueHovered = new EventEmitter<VenueSelector>();
    venueDeHovered = new EventEmitter<VenueSelector>();

    constructor(private http: HttpClient) {
    }

    lookUpByCoords(longitude: number, latitude: number, radius: number): void {
        let url = "api/venues/lookupbycoords";

        let params: {[param: string]: string} = {
            "longitude": longitude.toString(),
            "latitude": latitude.toString(),
            "radius": radius.toString()
        };

        this.http.get<Venue[]>(url, {params: params}).subscribe((venues: Venue[]) => {
            while (this.venues.length > 0){
                this.venues.pop();
            }
            venues.forEach((venue: Venue) => {
                let venueSelector = new VenueSelector(venue);
                venueSelector.stateUpdate.subscribe((event: VenueStateEvent) => {
                    if (event.getEmitedState() == "active") {
                        if (event.getEmitedValue()) {
                            if (this.selectedVenue != null) {
                                this.selectedVenue.setActive(false);
                                this.venueDeSelected.emit(this.selectedVenue);
                            }
                            this.selectedVenue = event.getVenue();
                            this.venueSelected.emit(this.selectedVenue);
                        } else if (this.selectedVenue = event.getVenue()) {
                            this.venueDeSelected.emit(this.selectedVenue);
                            this.selectedVenue = null;
                        }
                    } else if (event.getEmitedState() == "hovered") {
                        if (event.getEmitedValue()) {
                            if (this.hoveredVenue != null) {
                                this.hoveredVenue.setHovered(false);
                                this.venueDeHovered.emit(this.hoveredVenue);
                            }
                            this.hoveredVenue = event.getVenue();
                            this.venueHovered.emit(this.hoveredVenue);
                        } else if (this.hoveredVenue = event.getVenue()) {
                            this.venueDeHovered.emit(this.hoveredVenue);
                            this.hoveredVenue = null;
                        }
                    }
                });
                this.venues.push(venueSelector);
            });
        });
    }

    getVenues(): VenueSelector[] {
        return this.venues;
    }
    
    getVenueById(id: string): VenueSelector {
        for (let venue of this.venues) {
            if (venue.getVenue().id == id) {
                return venue;
            }
        }
        return null;
    }
    
    getSelectedVenue(): VenueSelector {
        return this.selectedVenue;
    }
    
    deselectSelectedVenue():void {
        if (this.selectedVenue != null) {
            this.selectedVenue.setActive(false);
        }
    }
    
    deselectHoveredVenue():void {
        if (this.hoveredVenue != null) {
            this.hoveredVenue.setHovered(false);
        }
    }
}
