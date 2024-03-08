export class Status {
    id: number;
    transit_id: number;
    timestamp: Date;
    remark: string;
    location: string;
    constructor(id: number, transit_id: number, timestamp: Date, remark: string, location: string) {
        this.id = id;
        this.transit_id = transit_id;
        this.timestamp = timestamp;
        this.remark = remark;
        this.location = location;
    }
}