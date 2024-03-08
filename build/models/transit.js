"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transit = void 0;
class Transit {
    constructor(trasnit_id, billing_date, company_name, tracking_id, shipping_company, contact_number, origin, destination, as_per_bill, tally_entry_to_goods, scan_for_every_bill, on_the_record, received, created_at) {
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
exports.Transit = Transit;
//# sourceMappingURL=transit.js.map