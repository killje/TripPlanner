import {Injectable, EventEmitter} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Trip} from './trip/trip';
import {CreateTripResponse, GetTripResponse, VenuesAddResponse, VenuesRemoveResponse, ScheduleResponse, VenuesChangeOrderResponse} from './trip/response';
import {Venue} from './venue/venue';
import {Schedule} from './trip/schedule';
import {ScheduleInterface} from './trip/schedule-interface';

@Injectable({
    providedIn: 'root'
})
export class TripService {

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
            let trip: Trip = new Trip(this);
            trip.uuid = response.uuid;
            trip.name = destination;
            trip.number_of_days = days;
            trip.schedule = [];
            trip.prettifySchedule();
            tripResponse.emit(trip);
        });

        return tripResponse;
    }

    getTrip(id: string): Observable<Trip> {
        
        let tripResponse = new EventEmitter<Trip>();
        
        let url = "api/trips/show";


        let params: {[param: string]: string} = {
            "uuid": id.toString()
        }
        
        this.http.get<GetTripResponse>(url, {params: params}).subscribe((response: GetTripResponse) => {
            
            tripResponse.emit(new Trip(this, response.data));
        });

        return tripResponse;
    }

    addVenue(tripId: string, venueId: string): Observable<boolean> {

        let url = "api/trips/venues/add";

        let success = new EventEmitter<boolean>();

        let params: {[param: string]: string} = {
            "uuid": tripId,
            "venue_id": venueId
        };

        this.http.post<VenuesAddResponse>(url, params).subscribe((response: VenuesAddResponse) => {
            success.emit(true);
        });

        return success;
    }
    
    removeVenue(tripId: string, venueId: string): Observable<boolean> {
        
        let url = "api/trips/venues/remove";

        let success = new EventEmitter<boolean>();

        let params: {[param: string]: string} = {
            "uuid": tripId,
            "venue_id": venueId
        };

        this.http.post<VenuesRemoveResponse>(url, params).subscribe((response: VenuesRemoveResponse) => {
            success.emit(true);
        });

        return success;
    }
    
    scheduleTrip(tripId: string, generate?: boolean): Observable<Schedule[]> {
        
        var url = "api/trips/schedule";
        
        let response = new EventEmitter<Schedule[]>();
        
        let params: {[param: string]: string} = {
            "uuid": tripId,
            "generate": (generate == null || !generate) ? "0" : "1"
        };
        
        this.http.post<ScheduleResponse>(url, params).subscribe((planning: ScheduleResponse) => {
            var schedule: Schedule[] = [];
            for (let item of planning.schedule) {
                schedule.push(new Schedule(item));
            }
            response.emit(schedule);
        });
        
        return response;
    }
    
    changeOrderVenue(tripId: string, venueId: string, day: number | "unsorted", order: number): Observable<boolean> {
        
        var url = "api/trips/venues/changeorder";
        
        let success = new EventEmitter<boolean>();
        
        let params: {[param: string]: string} = {
            "uuid": tripId,
            "tripvenueid": venueId,
            "day_number": day == "unsorted" ? "0": day.toString(),
            "order_number": order.toString()
        };
        
        this.http.post<VenuesChangeOrderResponse>(url, params).subscribe((response: VenuesChangeOrderResponse) => {
            success.emit(true);
        });
        
        return success;
    }

}
