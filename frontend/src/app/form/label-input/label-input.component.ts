import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-label-input',
    templateUrl: './label-input.component.html',
    styleUrls: ['./label-input.component.css']
})
export class LabelInputComponent implements OnInit {

    @Input() name: string;
    @Input() id: string;
    @Input() type: string = "text";
    @Input() description: string = "";
    @Input() value: string = "";
    @Input() error: boolean = false;

    @Output() valueChange = new EventEmitter<string>();

    isFocused: boolean = false;

    constructor() {}

    ngOnInit() {
    }

    focusEvent(): void {
        this.isFocused = true;
    }

    blurEvent(): void {
        this.isFocused = false;
    }
    
    setValue(value: string) {
        this.value = value;
        this.valueChange.emit(value);
    }

}
