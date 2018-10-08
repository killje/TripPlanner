import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Venue} from '../../api/venue/venue';

@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {

    @Input() venues: Venue[];
    @Input() title: string;
    @Input() addButton?: boolean = false;
    
    @Output() buttonClick: EventEmitter<Venue> = new EventEmitter<Venue>();

    constructor() {}

    ngOnInit() {
    }
    
    buttonClicked(venue: Venue) {
        this.buttonClick.emit(venue);
    }

}
