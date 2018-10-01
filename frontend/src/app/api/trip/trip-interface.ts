import {Venue} from "../venue/venue";

export interface TripInterface {
    
    id: string,
    uuid: string,
    name: string,
    number_of_days: number,
    created_by: string,
    created_at: string,
    updated_at: string,
    venues: Venue[];
    
}
