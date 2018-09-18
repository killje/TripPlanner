import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularOpenlayersModule} from 'ngx-openlayers';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MapViewComponent } from './map/map-view/map-view.component';
import { MapListComponent } from './map/map-list/map-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MapViewComponent,
    MapListComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AngularOpenlayersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
