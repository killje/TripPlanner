import {VenueInterface} from "../venue/venue-interface";

export interface ScheduleInterface {
    day: number|"unsorted",
    items: VenueInterface[];

}
