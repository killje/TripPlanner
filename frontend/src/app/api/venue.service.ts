import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Venue} from './venue';
import {VenueSelector} from './venue-selector';

@Injectable({
    providedIn: 'root'
})
export class VenueService {

    private venues: VenueSelector[] = [];

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
                this.venues.push(new VenueSelector(venue));
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
}
