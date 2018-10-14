import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Subject} from 'rxjs';

import {NavItem} from './nav-item';

@Injectable({
    providedIn: 'root'
})
export class NavBarService {

    private collapsed: boolean = true;

    private _collapsed = new Subject<boolean>();
    collapsedState = this._collapsed.asObservable();

    private _postColapse = new Subject<void>();
    postCollapseState = this._postColapse.asObservable();

    private navItems: NavItem[] = [];

    constructor(private router: Router) {
        this.addNavItem(new NavItem("Home", "/", true));
        this.addNavItem(new NavItem("About", "/about"));
        this.addNavItem(new NavItem("Featured Trips", "/featured"));
        this.addNavItem(new NavItem("Trip", '/trip'));
        this.addNavItem(new NavItem("Browse Activities", "/map"));
    };

    public toggleMenu(): void {
        this.collapsed = !this.collapsed;
        this._collapsed.next(this.collapsed);
    }

    public isCollapsed(): boolean {
        return this.collapsed;
    }

    collapseComplete(): void {
        this._postColapse.next();
    }

    public addNavItem(navItem: NavItem): void {
        this.navItems.push(navItem);
    }

    public getNavItems(): NavItem[] {
        return this.navItems;
    }

    public getCurrentItem(): NavItem {

        for (let navItem of this.navItems) {
            if (navItem.isMatchStrict()) {
                if (this.router.url == navItem.getLink()) {
                    return navItem;
                }
            } else {
                var urlStart = new RegExp("^" + navItem.getLink().replace(/\//, "\\\/"));
                if (this.router.url.match(urlStart) != null) {
                    return navItem;
                }
            }
        }
    }

}
