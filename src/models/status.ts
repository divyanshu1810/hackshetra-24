export class Status {
    transit_id: number;
    timestamp: Date;
    remark: string;
    location: string;
    constructor(transit_id: number, timestamp: Date, remark: string, location: string) {
        this.transit_id = transit_id;
        this.timestamp = timestamp;
        this.remark = remark;
        this.location = location;
    }
}