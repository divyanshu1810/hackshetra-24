export class Container {
    id: number;
    transit_id: number;
    bill_number: string;
    amount: number;
    constructor(id: number, transit_id: number, bill_number: string, amount: number) {
        this.id = id;
        this.transit_id = transit_id;
        this.bill_number = bill_number;
        this.amount = amount;
    }
}