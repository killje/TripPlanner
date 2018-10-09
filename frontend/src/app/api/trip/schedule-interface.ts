import {Venue} from "../venue/venue";

export interface ScheduleInterface {
    day: string,
    items: {
        parrentId?: string,
        id: number,
        venue: Venue
    }[];

}
