import {Component, AfterViewInit} from '@angular/core';

import {NavBarService} from './nav-bar.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements AfterViewInit {

    constructor(private navBarService: NavBarService) {
    }

    ngAfterViewInit() {
        let observer = new MutationObserver(() => {
            this.navBarService.collapseComplete();
        });
        observer.observe(document.querySelector('#navbarNav'), {
            attributes: true,
            attributeFilter: ["class"]
        });
        observer.observe(document.querySelector('#navbarBranding'), {
            attributes: true,
            attributeFilter: ["class"]
        });
    }
}
