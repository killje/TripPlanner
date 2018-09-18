import {Component, OnInit, Input} from '@angular/core';
import {MapEvent} from 'openlayers';
import {MapPoint} from '../map-point';
import {events, interaction, Map} from 'openlayers';

@Component({
    selector: 'app-map-view',
    templateUrl: './map-view.component.html',
    styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements OnInit {

    public zoom = 15;
    public opacity = 1.0;
    public width = 5;
    lat: number = 727640.686966983;
    lng: number = 7027557.9083128;
    select: interaction.Interaction = null;
    selectElement = document.getElementById('type');
    
    selectClick : interaction.Select = new interaction.Select({
        condition: events.condition.click
    });
    selectPointerMove = new interaction.Select({
        condition: events.condition.pointerMove
    });

    @Input() mapPoints: MapPoint[];

    constructor() {
    }

    onPostRender(mapEvent: MapEvent) {
        mapEvent.map.addInteraction(this.selectClick);
        mapEvent.map.addInteraction(this.selectPointerMove);
        let mapPoints: MapPoint[] = this.mapPoints;
        this.selectClick.on('select', function (e: interaction.Select.Event){
            for (let mapPoint of mapPoints) {
                mapPoint.setActiveState(false);
            }
            for (let selected of e.selected) {
                let match: RegExpMatchArray  = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setActiveState(true);
                return;
            }
        });
        this.selectPointerMove.on('select', function (e: interaction.Select.Event){
            for (let mapPoint of mapPoints) {
                mapPoint.setHoverdState(false);
            }
            for (let selected of e.selected) {
                let match: RegExpMatchArray  = selected.getId().toString().match(/mapPoint-(\d*)/);
                if (match == null) {
                    continue;
                }
                mapPoints[Number.parseInt(match[1])].setHoverdState(true);
                return;
            }
        });
    }

    ngOnInit() {
    }

    onMoveEnd(event: MapEvent) {
        console.log(event.map.getView().getCenter());
    }
    
}
