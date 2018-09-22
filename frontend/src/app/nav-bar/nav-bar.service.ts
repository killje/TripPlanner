import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class NavBarService {

    private collapsed: boolean = true;
    
    private _collapsed = new Subject<boolean>();
    collapsedState = this._collapsed.asObservable();
    
    private _postColapse = new Subject<void>();
    postCollapseState = this._postColapse.asObservable();
    
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
    
}
