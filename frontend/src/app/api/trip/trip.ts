export class Trip {
    
    id: string;
    destination: string;
    days: number;
    
    constructor(id: string, destination: string, days: number) {
        this.id = id;
        this.destination = destination;
        this.days = days;
    }
    
    getDaysFormatted(): string {
        if (this.days == 1) {
            return this.days.toString() + " day";
        } else {
            return this.days.toString() + " days";
        }
    }
    
}
