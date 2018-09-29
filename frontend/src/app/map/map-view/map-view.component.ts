import {Component, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import {events, interaction, Map, MapEvent, proj, Sphere, Overlay, geom, layer, Feature} from 'openlayers';
import {MapComponent} from 'ngx-openlayers';

import {VenueService} from '../../api/venue.service';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {Venue} from '../../api/trip/venue';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {

    public zoom = 15;
    public opacity = 1.0;
    public width = 5;

    private venues: Venue[];

    lat: number = 727640.686966983;
    lng: number = 7027557.9083128;
    vectorLayer: layer.Vector;

    @ViewChild(MapComponent) mapComponent: MapComponent;

    selectClick: interaction.Select = new interaction.Select({
        condition: events.condition.click
    });
    selectPointerMove: interaction.Select = new interaction.Select({
        condition: events.condition.pointerMove
    });

    constructor(private navBarService: NavBarService, private venueService: VenueService) {
        this.venues = venueService.getVenues();
    }

    ngOnInit(): void {
    }

    ngAfterViewInit(): void {
        let map: Map = this.mapComponent.instance;
        let infoBox: Overlay = null;
        
        map.getOverlays().forEach((overlay: Overlay) => {
            if (overlay.getElement().id == 'infoBox') {
                infoBox = overlay;
            }
        });
        
        map.getLayers().forEach((currentLayer: layer.Base) => {
            if (currentLayer instanceof layer.Vector) {
                this.vectorLayer = <layer.Vector> currentLayer;
            }
        })
        
        map.on("click", () => {
            this.venueService.deselectSelectedVenue();
        });
        map.on("pointermove", () => {
            this.venueService.deselectHoveredVenue();
        });
        
        map.addInteraction(this.selectClick);
        map.addInteraction(this.selectPointerMove);
        
        this.navBarService.postCollapseState.subscribe(() => {
            map.updateSize();
        })
        
        this.venueService.venueSelected.subscribe((venue: Venue) => {
            let venueFeature = this.getVenueById(venue.id);
            let venuePoint = <geom.Point> venueFeature.getGeometry();
            infoBox.setPosition(venuePoint.getCoordinates());
            infoBox.getElement().classList.remove("d-none");
            this.selectClick.getFeatures().clear();
            this.selectClick.getFeatures().push(venueFeature);
        });
        
        this.venueService.venueDeSelected.subscribe(() => {
            this.selectClick.getFeatures().clear();
            infoBox.getElement().classList.add("d-none");
        });
        
        this.venueService.venueHovered.subscribe((venue: Venue) => {
            this.selectPointerMove.getFeatures().clear();
            this.selectPointerMove.getFeatures().push(this.getVenueById(venue.id));
        });
        
        this.venueService.venueDeHovered.subscribe(() => {
            this.selectPointerMove.getFeatures().clear();
        });
        
        this.selectClick.on('select', () => {
            
            for (let selected of this.selectClick.getFeatures().getArray()) {
                let match: RegExpMatchArray = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                let venue: Venue = this.venueService.getVenueById(match[1]);
                if (venue != null) {
                    venue.setActive(true);
                }
                return;
            }
        });
        this.selectPointerMove.on('select', () => {
            
            for (let selected of this.selectPointerMove.getFeatures().getArray()) {
                let match: RegExpMatchArray = selected.getId().toString().match(/venue-([0-9a-f]*)/);
                if (match == null) {
                    continue;
                }
                let venue: Venue = this.venueService.getVenueById(match[1]);
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
    
    getVenueById(id: string): Feature {
        return this.vectorLayer.getSource().getFeatureById("venue-" + id);
    }

}
