import {EventEmitter} from "@angular/core";

import {TripInterface} from "./trip-interface";
import {Venue} from "../venue/venue";
import {TripService} from "../trip.service";
import {Schedule} from "./schedule";

export class Trip implements TripInterface {

    id: string;
    uuid: string;
    name: string;
    number_of_days: number;
    created_by: string;
    created_at: string;
    updated_at: string;
    schedule: Schedule[];

    public venueAdded: EventEmitter<Venue> = new EventEmitter<Venue>();
    public venueRemoved: EventEmitter<Venue> = new EventEmitter<Venue>();

    constructor(private tripService: TripService, intf?: TripInterface) {
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
        var schedule: Schedule[] = [];
        for (var scheduleInterface of intf.schedule) {
            schedule.push(new Schedule(scheduleInterface));
        }
        this.schedule = schedule;
        this.initSchedule();
    }

    initSchedule() {
        var newSchedule: Schedule[] = [];
        for (var i = 1; i <= this.number_of_days; i++) {
            var scheduleItem = this.getScheduleByDay(i);
            if (scheduleItem == null) {
                scheduleItem = new Schedule();
                scheduleItem.day = i;
            }
            newSchedule.push(scheduleItem);
        }
        var scheduleItem = this.getScheduleByDay("unsorted");
        if (scheduleItem == null) {
            scheduleItem = new Schedule();
            scheduleItem.day = "unsorted";
        }
        newSchedule.push(scheduleItem);
        
        this.schedule = newSchedule;
        
    }

    public getDaysFormatted(): string {
        if (this.number_of_days == 1) {
            return this.number_of_days.toString() + " day";
        } else {
            return this.number_of_days.toString() + " days";
        }
    }

    addVenue(venue: Venue): void {
        this.tripService.addVenue(this.uuid, venue.id).subscribe((success) => {
            if (success) {
                var schedule = this.getScheduleByDay("unsorted");
                if (schedule == null) {
                    schedule = new Schedule();
                    schedule.day = "unsorted";
                    this.schedule.push(schedule);
                }
                schedule.push(venue);
                this.venueAdded.emit(venue);
            }
        });
    }

    removeVenue(venue: Venue): void {
        this.tripService.removeVenue(this.uuid, venue.id).subscribe((success) => {
            if (success) {
                for (var schedule of this.schedule) {
                    if (schedule.removeVenue(venue)) {
                        this.venueRemoved.emit(venue);
                        break;
                    }
                }
            }
        });
    }

    generateSchedule(): void {
        this.tripService.scheduleTrip(this.uuid, true).subscribe((schedule: Schedule[]) => {

        });
    }

    getScheduleByDay(day: number | "unsorted"): Schedule {
        for (var schedule of this.schedule) {
            if (schedule.day == day) {
                return schedule;
            }
        }
        return null;
    }

    itemsReordered(): void {
        console.log(this.schedule);
    }


}
