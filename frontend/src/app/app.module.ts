import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {NgbModule, NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {DndModule} from 'ng2-dnd';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {MapViewComponent} from './map/map-view/map-view.component';
import {MapListComponent} from './map/map-list/map-list.component';
import {FrontPageComponent} from './front-page/front-page.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {FooterComponent} from './footer/footer.component';
import {InfoBoxComponent} from './map/map-view/info-box/info-box.component';
import {LabelInputComponent} from './form/label-input/label-input.component';
import {OnlyNumberDirective} from './form/only-number.directive';
import {TripComponent} from './trip/trip.component';
import {ActivitiesComponent} from './trip/activities/activities.component';
import {ButtonComponent} from './form/button/button.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FeaturedTripsComponent } from './featured-trips/featured-trips.component';

const appRoutes: Routes = [
    {path: '', component: FrontPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'featured', component: FeaturedTripsComponent},
    {path: 'trip', component: TripComponent},
    {path: 'trip/:id', component: TripComponent},
    {path: 'map', component: MapComponent},
    {path: 'map/:id', component: MapComponent},
    {path: 'map/:id/:day', component: MapComponent},
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
        FooterComponent,
        InfoBoxComponent,
        LabelInputComponent,
        OnlyNumberDirective,
        TripComponent,
        ActivitiesComponent,
        ButtonComponent,
        AboutPageComponent,
        FeaturedTripsComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        FormsModule,
        HttpClientModule,
        DndModule.forRoot(),
        NgbModule,
        AngularOpenlayersModule,
        NgbCollapseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
