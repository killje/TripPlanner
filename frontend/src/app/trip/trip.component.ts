import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {TripService} from '../api/trip.service';
import {Trip} from '../api/trip/trip';
import {Venue} from '../api/venue/venue';
import {VenueService} from '../api/venue.service';

@Component({
    selector: 'app-trip',
    templateUrl: './trip.component.html',
    styleUrls: ['./trip.component.css']
})
export class TripComponent implements OnInit {

    private destination: string = "";
    private days: number;
    private destinationError: boolean = false;
    private daysError: boolean = false;
    
    trip: Trip;
    venueSugestions: Venue[] = [];

    constructor(private tripService: TripService, private venueService: VenueService, private route: ActivatedRoute, private location: Location) {
    }

    ngOnInit() {
        let id = this.route.snapshot.paramMap.get('id');
        if (id) {
            var getTrip: Observable<Trip> 
            
            if (id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)) {
                getTrip =  this.tripService.getTrip(id);
            } else {
                getTrip = this.tripService.getTripWithSecret(id);
            }
            
            getTrip.subscribe((trip: Trip) => {
                this.trip = trip;
                trip.venueAdded.subscribe((venue: Venue) => {
                    var index = this.venueSugestions.indexOf(venue);
                    if (index > -1) {
                        this.venueSugestions.splice(index, 1);
                    }
                });
                this.venueService.getFeaturedByLocation(trip.name);
                this.venueService.venuesUpdated.subscribe((venues: Venue[]) => {
                    this.venueSugestions = venues;
                });
            });
        }
    }

    createTrip(): void {
        this.recheckInput();
        if (!this.destination) {
            this.destinationError = true;
        }
        if (!this.days) {
            this.daysError = true;
        }
        if (this.destinationError || this.daysError) {
            return;
        }
        // Create the trip. Once created set the trip
        this.tripService.createTrip(this.destination, this.days).subscribe((trip: Trip) => {
            this.trip = trip;
            trip.venueAdded.subscribe((venue: Venue) => {
                var index = this.venueSugestions.indexOf(venue);
                if (index > -1) {
                    this.venueSugestions.splice(index, 1);
                }
            });
            this.venueService.getFeaturedByLocation(trip.name);
            this.venueService.venuesUpdated.subscribe((venues: Venue[]) => {
                this.venueSugestions = venues;
            });
            // Update the location without navigation. This is so someone can go to the url again
            this.location.go("trip/" + encodeURIComponent(trip.secret));
        });
    }

    recheckInput(): void {
        if (this.destination) {
            this.destinationError = false;
        }
        if (this.days) {
            this.daysError = false;
        }
    }
    
}
