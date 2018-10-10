import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Venue} from '../../api/venue/venue';
import {Schedule} from '../../api/trip/schedule';
import {Trip} from '../../api/trip/trip';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    @Input() venues?: Venue[];
    @Input() schedule?: Schedule;
    @Input() trip?: Trip;
    @Input() title: string;
    @Input() addButton?: boolean = false;
    
    @Output() buttonClick: EventEmitter<Venue> = new EventEmitter<Venue>();

    constructor() {}

    ngOnInit() {
        if (this.venues == undefined && this.schedule == undefined) {
            throw new Error("Venues and schedule cant be both empty");
        }
        if (this.schedule != undefined && this.trip == undefined) {
            throw new Error("When using the schedule, you can not leave trip empty");
        }
    }
    
    buttonClicked(venue: Venue) {
        this.buttonClick.emit(venue);
    }

}
