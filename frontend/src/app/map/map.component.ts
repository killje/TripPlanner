import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';

import {TripService} from '../api/trip.service';
import {Trip} from '../api/trip/trip';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    id?: string;
    trip?: Observable<Trip>;
    day?: number | "unsorted";

    constructor(private tripService: TripService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        var id = this.route.snapshot.paramMap.get('id');
        
        if (id) {
            this.id = id;
            if (id.match(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/)) {
                this.trip = this.tripService.getTrip(id);
            } else {
                this.trip = this.tripService.getTripWithSecret(id);
            }
            
            
            var day = this.route.snapshot.paramMap.get('day');
            if (day == "unsorted") {
                this.day = "unsorted";
            } else {
                this.day = Number(day);
            }
        }
    }

}
