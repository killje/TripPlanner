import {Component, OnInit} from '@angular/core';

import {VenueService} from '../../../api/venue.service';
import {VenueSelector} from '../../../api/venue-selector';

@Component({
    selector: 'app-info-box',
    templateUrl: './info-box.component.html',
    styleUrls: ['./info-box.component.css']
})
export class InfoBoxComponent implements OnInit {
    
    private selectedVenue: VenueSelector = null;
    
    constructor(private venueService: VenueService) {
        venueService.venueSelected.subscribe((venue: VenueSelector) => {
            this.selectedVenue = venue;
        });
        venueService.venueDeSelected.subscribe((venue: VenueSelector) => {
            this.selectedVenue = null;
        });
    }

    ngOnInit() {
    }

}
