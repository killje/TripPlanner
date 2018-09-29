import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Trip} from './trip/trip';
import {CreateTripResponse, GetTripResponse, ListVenueResponse, AddVenueResonse} from './trip/response';
import {Venue} from './trip/venue';

@Injectable({
    providedIn: 'root'
})
export class TripService {

    private currentTrip: Trip;

    constructor(private http: HttpClient) {
    }

    createTrip(destination: string, days: number): Observable<Trip> {
        let url = "api/trips/store";

        let tripResponse = new EventEmitter<Trip>();

        let params: {[param: string]: string} = {
            "name": destination,
            "number_of_days": days.toString()
        }
        
        this.http.post<CreateTripResponse>(url, params).subscribe((response: CreateTripResponse) => {
            tripResponse.emit(new Trip(response.uuid, destination, days));
        });

        return tripResponse;
    }

    getTrip(id: string): Observable<Trip> {
        let url = "api/trips/show";

        let tripResponse = new EventEmitter<Trip>();

        let params: {[param: string]: string} = {
            "uuid": id.toString()
        }
        
        this.http.get<GetTripResponse>(url, {params: params}).subscribe((response: GetTripResponse) => {
            tripResponse.emit(new Trip(response.uuid, response.name, response.number_of_days));
        });

        return tripResponse;
    }

    listVenues(id: string): Observable<Venue[]> {
        let url = "api/trips/listVenues";

        let tripResponse = new EventEmitter<Venue[]>();

        let params: {[param: string]: string} = {
            "uuid": id.toString()
        }

        this.http.get<ListVenueResponse>(url, {params: params}).subscribe((response: ListVenueResponse) => {
            tripResponse.emit(response.data.venues);
        });

        return tripResponse;
    }

    addVenue(tripId: string, venueId: string): Observable<boolean> {

        let url = "api/trips/addVenue";

        let success = new EventEmitter<boolean>();

        let params: {[param: string]: string} = {
            "uuid": tripId,
            "venue_id": venueId
        };

        this.http.post<AddVenueResonse>(url, params).subscribe((response: AddVenueResonse) => {
            success.emit(true);
        });

        return success;
    }

    setCurrentTrip(trip: Trip): void {
        this.currentTrip = trip;
    }

    getCurrentTrip(): Trip {
        return this.currentTrip;
    }


}
