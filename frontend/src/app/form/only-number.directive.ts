import {Directive, HostListener, Input} from '@angular/core';

@Directive({
    selector: '[OnlyNumber]'
})
export class OnlyNumberDirective {

    constructor() {}

    @Input() OnlyNumber: boolean;

    @HostListener('keydown', ['$event']) onKeyDown(event: Event) {
        let e = <KeyboardEvent> event;
        if (!this.OnlyNumber) {
            return;
        }
        if ([46, 8, 9, 27, 13].indexOf(e.which) !== -1 ||
            // Allow: Ctrl+A
            (e.which === 65 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+C
            (e.which === 67 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+V
            (e.which === 86 && (e.ctrlKey || e.metaKey)) ||
            // Allow: Ctrl+X
            (e.which === 88 && (e.ctrlKey || e.metaKey)) ||
            // Allow: home, end, left, right
            (e.which >= 35 && e.which <= 39)) {
            // let it happen, don't do anything
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.which < 48 || e.which > 57)) && (e.which < 96 || e.which > 105)) {
            e.preventDefault();
        }
    }
}