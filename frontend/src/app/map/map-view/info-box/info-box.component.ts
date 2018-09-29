import {Component, OnInit} from '@angular/core';

import {VenueService} from '../../../api/venue.service';
import {Venue} from '../../../api/trip/venue';

@Component({
    selector: 'app-info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
    
    private selectedVenue: Venue = null;
    
    constructor(private venueService: VenueService) {
        venueService.venueSelected.subscribe((venue: Venue) => {
            this.selectedVenue = venue;
        });
        venueService.venueDeSelected.subscribe((venue: Venue) => {
            this.selectedVenue = null;
        });
    }

    ngOnInit() {
    }

}
