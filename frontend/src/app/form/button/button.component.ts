import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
    
    @Input() text: string;
    @Input() buttonClass?: string;
    
    @Output() buttonClick: EventEmitter<MouseEvent> = new EventEmitter<MouseEvent>();

    constructor() {}

    ngOnInit() {
    }
    
    clickButton(event: MouseEvent) {
        this.buttonClick.emit(event);
    }

}
