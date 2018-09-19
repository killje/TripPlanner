import {Component, OnInit} from '@angular/core';
import {MapPoint} from './map-point'

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

    private mapPoints: MapPoint[] = [];

    constructor() {
        this.mapPoints.push(new MapPoint("BB", "Bernouliborg", 727640.686966983, 7027557.9083128));
        this.mapPoints.push(new MapPoint("EA", "Energy academy", 727792.375138526, 7027521.482854965));
        this.mapPoints.push(new MapPoint("NB", "NijenBorg", 727837.4443462458, 7027252.353320077 ));
    }

    ngOnInit() {
    }

}
