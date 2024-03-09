export class Container {
    transit_id: number;
    bill_number: string;
    amount: number;
    constructor(transit_id: number, bill_number: string, amount: number) {
        this.transit_id = transit_id;
        this.bill_number = bill_number;
        this.amount = amount;
    }
}