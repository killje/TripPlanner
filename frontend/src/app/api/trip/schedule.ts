import {ScheduleInterface} from "./schedule-interface";
import {Venue} from "../venue/venue";

export class Schedule implements ScheduleInterface {

    day: number|"unsorted";
    items: {
        id: number,
        venue: Venue
    }[] = [];
    
    constructor(intf?: ScheduleInterface) {
        if (intf == undefined) {
            return;
        }
        this.day = intf.day;
        this.items = intf.items;
    }

    removeVenue(venue: Venue): boolean {
        var index = 0;
        var found: boolean = false;
        for (var item of this.items) {
            if (item.venue = venue) {
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
        
        var max: number = 0;
        for (let item of this.items) {
            if (item.id > max) {
                max = item.id;
            }
        }
        
        this.items.push({
            id: max + 1,
            venue: venue
        });
    }
    
    getTitleName(): string {
        if (this.day == 'unsorted') {
            return "Not yet planned in";
        }
        return "Planning for day " + this.day.toString();
    }
    
}
