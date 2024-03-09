import { useEffect, useState } from "react";

interface Transit {
	id: string;
	billingDate: string;
	companyName: string;
	trackingId: string;
	shippingCompany: string;
	contactNumber: string;
	origin: string;
	destination: string;
	asPerBill: boolean;
	tallyEntryToGoods: boolean;
	scanForEveryBill: boolean;
	onTheRecord: boolean;
	received: boolean;
	userId: string;
	isDeleted: boolean;
	createdAt: string;
}

function ViewTransits() {
	const [transits, setTransits] = useState<Transit[]>([]);
	const authToken = "your_auth_token"; // Replace with your actual auth token

	useEffect(() => {
		// Make a GET request to the API endpoint with the authentication token
		fetch("http://localhost:3000/api/transit/", {
			headers: {
				Authorization: `Bearer ${authToken}`, // Include the auth token in the headers
				"Content-Type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					// Map the data as per your requirements
					const mappedData = data.data.map((item) => ({
						id: item._id,
						billingDate: item.billing_date,
						companyName: item.company_name,
						trackingId: item.tracking_id,
						shippingCompany: item.shipping_company,
						contactNumber: item.contact_number,
						origin: item.origin,
						destination: item.destination,
						asPerBill: item.as_per_bill,
						tallyEntryToGoods: item.tally_entry_to_goods,
						scanForEveryBill: item.scan_for_every_bill,
						onTheRecord: item.on_the_record,
						received: item.received,
						userId: item.userId,
						isDeleted: item.isDeleted,
						createdAt: item.createdAt,
					}));

					setTransits(mappedData);
				} else {
					console.error("Error fetching transit data:", data.message);
				}
			})
			.catch((error) => console.error("Error:", error));
	}, []); // Remove authToken from the dependency array

	return (
		<div>
			<h1>View Transits</h1>
			<ul>
				{transits.map((transit) => (
					<li key={transit.id}>
						<p>Billing Date: {transit.billingDate}</p>
						<p>Company Name: {transit.companyName}</p>
						<p>Tracking ID: {transit.trackingId}</p>
						<p>Shipping Company: {transit.shippingCompany}</p>
						<p>Contact Number: {transit.contactNumber}</p>
						<p>Origin: {transit.origin}</p>
						<p>Destination: {transit.destination}</p>
						<p>As Per Bill: {transit.asPerBill.toString()}</p>
						<p>Tally Entry To Goods: {transit.tallyEntryToGoods.toString()}</p>
						<p>Scan For Every Bill: {transit.scanForEveryBill.toString()}</p>
						<p>On The Record: {transit.onTheRecord.toString()}</p>
						<p>Received: {transit.received.toString()}</p>
						<p>User ID: {transit.userId}</p>
						<p>Is Deleted: {transit.isDeleted.toString()}</p>
						<p>Created At: {transit.createdAt}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default ViewTransits;
