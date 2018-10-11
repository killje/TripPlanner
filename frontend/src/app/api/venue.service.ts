import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Venue, VenueStateEvent} from './venue/venue';
import {VenueInterface} from './venue/venue-interface';

@Injectable({
    providedIn: 'root'
})
export class VenueService {

    private venues: Venue[] = [];
    private selectedVenue: Venue;
    private hoveredVenue: Venue;

    venueSelected = new EventEmitter<Venue>();
    venueDeSelected = new EventEmitter<Venue>();

    venueHovered = new EventEmitter<Venue>();
    venueDeHovered = new EventEmitter<Venue>();
    
    venuesUpdated = new EventEmitter<Venue[]>();

    constructor(private http: HttpClient) {
    }

    lookUpByCoords(longitude: number, latitude: number, radius: number): void {
        let url = "api/venues/lookupbycoords";

        let params: {[param: string]: string} = {
            "longitude": longitude.toString(),
            "latitude": latitude.toString(),
            "radius": radius.toString()
        };

        this.http.get<Venue[]>(url, {params: params}).subscribe((venues: VenueInterface[]) => {
            var newVenues: Venue[] = [];
            venues.forEach((venueInterface: VenueInterface) => {
                newVenues.push(new Venue(venueInterface));
            });
            this.setVenues(newVenues);
        });
    }
    
    getFeaturedByLocation(query: string) {
        let url = "api/venues/featuredbyname";

        let params: {[param: string]: string} = {
            "query": query
        };

        this.http.get<Venue[]>(url, {params: params}).subscribe((venues: VenueInterface[]) => {
            var newVenues: Venue[] = [];
            venues.forEach((venueInterface: VenueInterface) => {
                newVenues.push(new Venue(venueInterface));
            });
            this.setVenues(newVenues);
        });
    }

    setVenues(venues: Venue[]):void {
        while (this.venues.length > 0) {
            this.venues.pop();
        }
        venues.forEach((venue: Venue) => {
            venue.stateUpdate.subscribe((event: VenueStateEvent) => {
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
            this.venues.push(venue);
        });
        this.venuesUpdated.emit(this.venues);
    }
    
    getVenues(): Venue[] {
        return this.venues;
    }

    getVenueById(id: string): Venue {
        for (let venue of this.venues) {
            if (venue.id == id) {
                return venue;
            }
        }
        return null;
    }

    getSelectedVenue(): Venue {
        return this.selectedVenue;
    }

    deselectSelectedVenue(): void {
        if (this.selectedVenue != null) {
            this.selectedVenue.setActive(false);
        }
    }

    deselectHoveredVenue(): void {
        if (this.hoveredVenue != null) {
            this.hoveredVenue.setHovered(false);
        }
    }
}
