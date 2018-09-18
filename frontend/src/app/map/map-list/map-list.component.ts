import {Component, OnInit, Input} from '@angular/core';
import {MapPoint} from '../map-point';

@Component({
    selector: 'app-map-list',
    templateUrl: './map-list.component.html',
    styleUrls: ['./map-list.component.css']
})
export class MapListComponent implements OnInit {

    isMenuHidden: boolean = true;

    @Input() mapPoints: MapPoint[];
    
    constructor() {}

    ngOnInit() {
    }

    openMenu() {
        this.isMenuHidden = false;
    }

    closeMenu() {
        this.isMenuHidden = true;
    }
    
    setActive(mapPoint: MapPoint) {
        for (let current of this.mapPoints) {
            current.setActiveState(false);
        }
        mapPoint.setActiveState(true);
        this.closeMenu();
    }

}
