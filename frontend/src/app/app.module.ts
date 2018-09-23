import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {MapViewComponent} from './map/map-view/map-view.component';
import {MapListComponent} from './map/map-list/map-list.component';
import { FrontPageComponent } from './front-page/front-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';

const appRoutes: Routes = [
    {path: 'map', component: MapComponent},
    {
        path: '',
        component: FrontPageComponent
    },
    {path: '**', component: FrontPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MapViewComponent,
        MapListComponent,
        FrontPageComponent,
        NavBarComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        NgbModule,
        AngularOpenlayersModule,
        NgbCollapseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
