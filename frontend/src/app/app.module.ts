import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AngularOpenlayersModule} from 'ngx-openlayers';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {MapComponent} from './map/map.component';
import {MapViewComponent} from './map/map-view/map-view.component';
import {MapListComponent} from './map/map-list/map-list.component';

const appRoutes: Routes = [
    {path: 'map', component: MapComponent},
    {
        path: '',
        redirectTo: '/map',
        pathMatch: 'full'
    },
    {path: '**', component: MapComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        MapViewComponent,
        MapListComponent
    ],
    imports: [
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserModule,
        NgbModule,
        AngularOpenlayersModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
