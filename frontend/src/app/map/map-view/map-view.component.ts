import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {events, interaction, Map, MapEvent, proj, Sphere} from 'openlayers';
import {MapComponent} from 'ngx-openlayers';

import {VenueService} from '../../api/venue.service';
import {VenueSelector} from '../../api/venue-selector';
import {NavBarService} from '../../nav-bar/nav-bar.service';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {

    public zoom = 15;
    public opacity = 1.0;
    public width = 5;

    private venues: VenueSelector[];

    lat: number = 727640.686966983;
    lng: number = 7027557.9083128;
    select: interaction.Interaction = null;
    selectElement = document.getElementById('type');

    @ViewChild(MapComponent) mapComponent: MapComponent;

    selectClick: interaction.Select = new interaction.Select({
        condition: events.condition.click
    });
    selectPointerMove = new interaction.Select({
        condition: events.condition.pointerMove
    });

    constructor(private navBarService: NavBarService, private venueService: VenueService) {
        this.venues = venueService.getVenues();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let map: Map = this.mapComponent.instance;
        let venueService = this.venueService;
        let selectClick = this.selectClick;
        let selectPointerMove = this.selectPointerMove;

        map.on("click", function(){
            venues.forEach((venue: VenueSelector) => {venue.setActive(false)});
        });
        
        map.addInteraction(selectClick);
        map.addInteraction(selectPointerMove);
        
        this.navBarService.postCollapseState.subscribe(() => {
            map.updateSize();
        })
        
        let venues: VenueSelector[] = this.venues;
        
        this.selectClick.on('select', function () {
            
            for (let selected of selectClick.getFeatures().getArray()) {
                let match: RegExpMatchArray = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                let venue: VenueSelector = venueService.getVenueById(match[1]);
                if (venue != null) {
                    venue.setActive(true);
                }
                return;
            }
        });
        this.selectPointerMove.on('select', function () {
            
            venues.forEach((venue: VenueSelector) => {venue.setHovered(false)});
            for (let selected of selectPointerMove.getFeatures().getArray()) {
                let match: RegExpMatchArray = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                let venue: VenueSelector = venueService.getVenueById(match[1]);
                if (venue != null) {
                    venue.setHovered(true);
                }
                return;
            }
        });

    }

    onMoveEnd(event: MapEvent) {
        let map = event.map;
        let view = map.getView();

        let projection = 'EPSG:4326';
        let sourceProj = view.getProjection();

        let center = proj.toLonLat(view.getCenter());
        let extend = view.calculateExtent(map.getSize());

        let c1 = proj.transform([extend[0], extend[1]], sourceProj, projection);
        let c2 = proj.transform([extend[2], extend[3]], sourceProj, projection);

        let wgs84Sphere = new Sphere(6378137);
        let distance = wgs84Sphere.haversineDistance(c1, c2);

        this.venueService.lookUpByCoords(center[0], center[1], distance);
    }

}
