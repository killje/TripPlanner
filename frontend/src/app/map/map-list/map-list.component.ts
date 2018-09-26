import {Component, OnInit} from '@angular/core';

import {VenueService} from '../../api/venue.service';
import {VenueSelector} from '../../api/venue-selector';

@Component({
    selector: 'app-map-list',
    templateUrl: './map-list.component.html',
    styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

    isMenuHidden: boolean = true;

    private venues: VenueSelector[];

    constructor(private venueService: VenueService) {
        this.venues = this.venueService.getVenues();
    }

    ngOnInit() {
    }

    openMenu() {
        this.isMenuHidden = false;
    }

    closeMenu() {
        this.isMenuHidden = true;
    }

    setActive(venue: VenueSelector) {
        this.venues.forEach((venue: VenueSelector) => {venue.setActive(false)});
        venue.setActive(true);
        this.closeMenu();
    }

}
