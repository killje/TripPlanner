import {TripInterface} from "./trip-interface";
import {Venue} from "../venue/venue";

export class Trip implements TripInterface {
    
    id: string;
    uuid: string;
    name: string;
    number_of_days: number;
    created_by: string;
    created_at: string;
    updated_at: string;
    venues: Venue[];
    
    constructor(intf?: TripInterface) {
        if (intf == undefined) {
            return;
        }
        this.id = intf.id;
        this.uuid = intf.uuid;
        this.name = intf.name;
        this.number_of_days = intf.number_of_days;
        this.created_by = intf.created_by;
        this.created_at = intf.created_at;
        this.updated_at = intf.updated_at;
        this.venues = intf.venues;
    }
    
    public getDaysFormatted(): string {
        if (this.number_of_days == 1) {
            return this.number_of_days.toString() + " day";
        } else {
            return this.number_of_days.toString() + " days";
        }
    }
    
}
