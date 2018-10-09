import {TripInterface} from "./trip-interface";

export interface CreateTripResponse {
    status: string;
    uuid: string;
}

export interface VenuesAddResponse {
    status: string;
}

export interface VenuesRemoveResponse {
    status: string;
}

export interface GetTripResponse {
    status: string;
    data: TripInterface
}