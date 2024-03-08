export class Transit {
    trasnit_id: number;
    billing_date: Date;
    company_name: string;
    tracking_id: string;
    shipping_company: string;
    contact_number: string;
    origin: string;
    destination: string;
    as_per_bill: boolean;
    tally_entry_to_goods: boolean;
    scan_for_every_bill: boolean;
    on_the_record: boolean;
    received: boolean;
    created_at: Date;
    constructor(trasnit_id: number, billing_date: Date, company_name: string, tracking_id: string, shipping_company: string, contact_number: string, origin: string, destination: string, as_per_bill: boolean, tally_entry_to_goods: boolean, scan_for_every_bill: boolean, on_the_record: boolean, received: boolean, created_at: Date) {
        this.trasnit_id = trasnit_id;
        this.billing_date = billing_date;
        this.company_name = company_name;
        this.tracking_id = tracking_id;
        this.shipping_company = shipping_company;
        this.contact_number = contact_number;
        this.origin = origin;
        this.destination = destination;
        this.as_per_bill = as_per_bill;
        this.tally_entry_to_goods = tally_entry_to_goods;
        this.scan_for_every_bill = scan_for_every_bill;
        this.on_the_record = on_the_record;
        this.received = received;
        this.created_at = created_at;
    }
}
