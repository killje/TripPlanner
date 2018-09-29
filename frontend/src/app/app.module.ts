import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {MapViewComponent} from './map/map-view/map-view.component';
import {MapListComponent} from './map/map-list/map-list.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {InfoBoxComponent} from './map/map-view/info-box/info-box.component';
import {LabelInputComponent} from './form/label-input/label-input.component';
import {OnlyNumberDirective} from './form/only-number.directive';
import {TripComponent} from './trip/trip.component';

const appRoutes: Routes = [
    {path: '', component: FrontPageComponent},
    {path: 'trip', component: TripComponent},
    {path: 'trip/:id', component: TripComponent},
    {path: 'map', component: MapComponent},
    {path: '**', component: FrontPageComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MapViewComponent,
        MapListComponent,
        FrontPageComponent,
        NavBarComponent,
        InfoBoxComponent,
        LabelInputComponent,
        OnlyNumberDirective,
        TripComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        AngularOpenlayersModule,
        NgbCollapseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
