import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Trip} from './trip/trip';
import {CreateTripResponse, GetTripResponse, AddVenueResonse, RemoveVenueResonse} from './trip/response';

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
            let trip: Trip = new Trip();
            trip.uuid = response.uuid;
            trip.name = destination;
            trip.number_of_days = days;
            trip.venues = [];
            tripResponse.emit(trip);
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
            
            tripResponse.emit(new Trip(response.data));
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
    
    removeVenue(tripId: string, venueId: string): Observable<boolean> {

        let url = "api/trips/removeVenue";

        let success = new EventEmitter<boolean>();

        let params: {[param: string]: string} = {
            "uuid": tripId,
            "venue_id": venueId
        };

        this.http.post<RemoveVenueResonse>(url, params).subscribe((response: RemoveVenueResonse) => {
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
