import {Component, OnInit, AfterViewInit} from '@angular/core';
import {Router} from '@angular/router';

import {NavItem} from './nav-item';
import {NavBarService} from './nav-bar.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, AfterViewInit {

    ngOnInit(): void {
    }

    private navItems: NavItem[] = [];
    private currentItem: NavItem;

    constructor(private navBarService: NavBarService, private router: Router) {
        this.navItems.push(new NavItem("Home", "/"));
        this.navItems.push(new NavItem("Activities", '/activities'));
        this.navItems.push(new NavItem("Map", "/map"));
        
        console.log(router.url);
        for (let navItem of this.navItems) {
            if (navItem.getLink() == router.url) {
                this.currentItem = navItem;
                console.log("FOUND", navItem);
                break;
            }
        }
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
