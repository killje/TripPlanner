import {ScheduleInterface} from "./schedule-interface";
import {Venue} from "../venue/venue";

export class Schedule implements ScheduleInterface {

    day: number|"unsorted";
    items: Venue[] = [];
    
    constructor(intf?: ScheduleInterface) {
        if (intf == undefined) {
            return;
        }
        this.day = intf.day;
        var items: Venue[] = [];
        for (var item of intf.items) {
            items.push(new Venue(item));
        }
        this.items = items;
    }

    removeVenue(venue: Venue): boolean {
        var index = 0;
        var found: boolean = false;
        for (var item of this.items) {
            if (item = venue) {
                found = true;
                break;
            }
            index++;
        }
        if (!found) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }
    
    push(venue: Venue): void {
        this.items.push(venue);
    }
    
    getTitleName(): string {
        if (this.day == 'unsorted') {
            return "Not yet planned in";
        }
        return "Planning for day " + this.day.toString();
    }
    
}
