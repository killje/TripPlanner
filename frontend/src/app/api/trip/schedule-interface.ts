import {Venue} from "../venue/venue";

export interface ScheduleInterface {
    day: number|"unsorted",
    items: {
        id: number,
        venue: Venue
    }[];

}
