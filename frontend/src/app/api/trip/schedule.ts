import {ScheduleInterface} from "./schedule-interface";
import {Venue} from "../venue/venue";

export class Schedule implements ScheduleInterface {

    day: string;
    items: {
        parrentId?: string,
        id: number,
        venue: Venue
    }[];
    
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
        var lastItem = this.items[this.items.length - 1];
        
        this.items.push({
            parrentId: lastItem.venue.id,
            id: lastItem.id + 1,
            venue: venue
        });
    }
}
