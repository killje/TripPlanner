import {Venue} from "./venue";

export interface CreateTripResponse {
    status: string;
    uuid: string;
}

export interface GetTripResponse {
    uuid: string,
    name: string,
    number_of_days: number
}

export interface AddVenueResonse {
    status: string;
}

export interface ListVenueResponse {
    status: string;
    data: {
        id: string;
        uuid: string;
        name: string;
        number_of_days: number;
        created_by: string;
        created_at: string;
        updated_at: string;
        venues: Venue[]
    }
}