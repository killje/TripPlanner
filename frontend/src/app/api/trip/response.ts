import {TripInterface} from "./trip-interface";
import {ScheduleInterface} from "./schedule-interface";

export interface CreateTripResponse {
    status: string;
    uuid: string;
    secret: string;
}

export interface VenuesAddResponse {
    status: string;
}

export interface VenuesRemoveResponse {
    status: string;
}

export interface GetTripResponse {
    status: string;
    data: TripInterface;
}

export interface ScheduleResponse {
    schedule: ScheduleInterface[];
}

export interface VenuesChangeOrderResponse {
    status: string;
}