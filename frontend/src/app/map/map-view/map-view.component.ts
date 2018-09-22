import {Component, AfterViewInit, OnInit, Input, ViewChild} from '@angular/core';
import {MapPoint} from '../map-point';
import {events, interaction, Map, MapEvent} from 'openlayers';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {MapComponent} from 'ngx-openlayers';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit, AfterViewInit {


    public zoom = 15;
    public opacity = 1.0;
    public width = 5;

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

    @Input() mapPoints: MapPoint[];

    constructor(private navBarService: NavBarService) {
    }
    ngOnInit(): void {
    }
    ngAfterViewInit(): void {
        let map: Map = this.mapComponent.instance;
        map.addInteraction(this.selectClick);
        map.addInteraction(this.selectPointerMove);
        this.navBarService.postCollapseState.subscribe(() => {
            map.updateSize();
        })
        let mapPoints: MapPoint[] = this.mapPoints;
        this.selectClick.on('select', function (e: interaction.Select.Event) {
            for (let mapPoint of mapPoints) {
                mapPoint.setActiveState(false);
            }
            for (let selected of e.selected) {
                let match: RegExpMatchArray = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setActiveState(true);
                return;
            }
        });
        this.selectPointerMove.on('select', function (e: interaction.Select.Event) {
            for (let mapPoint of mapPoints) {
                mapPoint.setHoverdState(false);
            }
            for (let selected of e.selected) {
                let match: RegExpMatchArray = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setHoverdState(true);
                return;
            }
        });

    }

    onMoveEnd(event: MapEvent) {
        console.log(event.map.getView().getCenter());
    }

}
