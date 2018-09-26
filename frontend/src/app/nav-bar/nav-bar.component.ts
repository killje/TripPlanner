import {Component, OnInit} from '@angular/core';

import {NavItem} from './nav-item';
import {NavBarService} from './nav-bar.service';
import {AfterViewInit} from '@angular/core';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

    ngOnInit(): void {
    }

    private navItems: NavItem[] = [];

    constructor(private navBarService: NavBarService) {
        this.navItems.push(new NavItem("Home", "/"));
        this.navItems.push(new NavItem("Activities", '/activities'));
        this.navItems.push(new NavItem("Map", "/map"));
    }

    ngAfterViewInit() {
        let observer = new MutationObserver(() => {
            this.navBarService.collapseComplete();
        });
        observer.observe(document.querySelector('#navbarNav'), {
            attributes: true,
            attributeFilter: ["class"]
        });
    }


}
