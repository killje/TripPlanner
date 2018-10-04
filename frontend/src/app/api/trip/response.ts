import {TripInterface} from "./trip-interface";

export interface CreateTripResponse {
    status: string;
    uuid: string;
}

export interface AddVenueResonse {
    status: string;
}

export interface RemoveVenueResonse {
    status: string;
}

export interface GetTripResponse {
    status: string;
    data: TripInterface
}