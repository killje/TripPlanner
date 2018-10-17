import {ScheduleInterface} from "./schedule-interface";

export interface TripInterface {
    
    id: string,
    uuid: string,
    secret?: string,
    name: string,
    number_of_days: number,
    created_by: string,
    created_at: string,
    updated_at: string,
    schedule: ScheduleInterface[];
    
}
