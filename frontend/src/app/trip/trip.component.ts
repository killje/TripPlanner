import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';

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
            this.tripService.getTrip(id).subscribe((trip: Trip) => {
                this.trip = trip;
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
            // Update the location without navigation. This is so someone can go to the url again
            this.location.go("trip/" + trip.uuid);
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
    
    addVenue(venue: Venue):void {
        this.tripService.addVenue(this.trip.uuid, venue.id).subscribe((success) => {
            if (success) {
                this.trip.venues.push(venue);
                var index = this.venueSugestions.indexOf(venue);
                if (index > -1) {
                    this.venueSugestions.splice(index, 1);
                }
            }
        });
    }
    
    removeVenue(venue: Venue):void {
        this.tripService.removeVenue(this.trip.uuid, venue.id).subscribe((success) => {
            if (success) {
                var index = this.trip.venues.indexOf(venue);
                if (index > -1) {
                    this.trip.venues.splice(index, 1);
                }
            }
        });
    }
    
}
