import {Component} from '@angular/core';

import {TripService} from '../api/trip.service';
import {FeaturedResponse} from '../api/trip/response';

@Component({
    selector: 'app-featured-trips',
    templateUrl: './featured-trips.component.html',
    styleUrls: ['./featured-trips.component.css']
})
export class FeaturedTripsComponent {

    private featured: FeaturedResponse;

    constructor(private tripService: TripService) {
        tripService.getFeatured().subscribe((featuredResponse: FeaturedResponse) => {
            this.featured = featuredResponse;
        });
    }

    getRows(): number[] {
        if (!this.featured) {
            return [];
        }
        return Array(this.featured.count / 3 + ((this.featured.count % 3) > 0 ? 1 : 0)).fill(0).map((x,i)=>i);
    }

    getRow(row: number): {uuid: string;location: string;image: string; }[] {
        if (!this.featured) {
            return [];
        }
        if (!this.featured.trips) {
            return [];
        }
        console.log(this.featured.trips);
        return this.featured.trips.slice(row*3, (row+1)*3);
    }
}
