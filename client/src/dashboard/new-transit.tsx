"use client";
import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import axios from "axios";

export function NewTransit() {
	const [billing_date, setBillingDate] = useState("");
	const [company_name, setCompanyName] = useState("");
	const [tracking_id, setTrackingId] = useState("");
	const [shipping_company, setShippingCompany] = useState("");
	const [contact_number, setContactNumber] = useState("");
	const [origin, setOrigin] = useState("");
	const [destination, setDestination] = useState("");

	const formData = {
		billing_date: billing_date,
		company_name: company_name,
		tracking_id: tracking_id,
		shipping_company: shipping_company,
		contact_number: contact_number,
		origin: origin,
		destination: destination,
	};

	const auth_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRpdnlhbnNodS4xODEwQGdtYWlsLmNvbSIsImlhdCI6MTcxMDAxNjUwMCwiZXhwIjoxNzEwMTAyOTAwfQ.P3_tOgc-71tafObb-Xu_0GfANgFXZlHbuF6k2p7qkio"; 

	const headers = {
		Authorization: `Bearer ${auth_token}`,
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		axios
			.post("http://localhost:3000/api/transit/", formData, {
				headers: headers,
			})
			.then((response) => {
				console.log(response);
				setBillingDate("");
				setCompanyName("");
				setTrackingId("");
				setShippingCompany("");
				setContactNumber("");
				setOrigin("");
				setDestination("");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
			<h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
				Create Transit
			</h2>
			{/* <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
				Sign up now if you can because we don&apos;t have a login flow
				yet
			</p> */}

			{/* TODO: Add moving gradient maybe maybe? */}
			{/* content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    padding: var(--line-width);
    background: conic-gradient(from calc(var(--angle) + var(--start-angle)), transparent 0, var(--line-color) 20%, transparent 25%);
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: xor;
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: inherit;

    position: absolute;
    inset: 0;
    border-radius: inherit;
    filter: drop-shadow(0 0 10px var(--line-color)); */}
			<form className="my-8" onSubmit={handleSubmit}>
				{/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
					<LabelInputContainer>
						<Label htmlFor="firstname">First name</Label>
						<Input id="firstname" placeholder="Tyler" type="text" />
					</LabelInputContainer>
					<LabelInputContainer>
						<Label htmlFor="lastname">Last name</Label>
						<Input id="lastname" placeholder="Durden" type="text" />
					</LabelInputContainer>
				</div> */}
				<LabelInputContainer className="mb-4">
					<Label htmlFor="billing_date">Billing Date</Label>
					<Input
						id="billing_date"
						placeholder="23-02-2024"
						type="text"
						value={billing_date}
						onChange={(event) => {
							setBillingDate(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="company_name">Company Name</Label>
					<Input
						id="company_name"
						placeholder="ABC Corp. Pvt. Ltd."
						type="text"
						value={company_name}
						onChange={(event) => {
							setCompanyName(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="tracking_id">Tracking ID</Label>
					<Input
						id="tracking_id"
						placeholder="DEF789012"
						type="text"
						value={tracking_id}
						onChange={(event) => {
							setTrackingId(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="shipping_company">Shipping Company</Label>
					<Input
						id="shipping_company"
						placeholder="ABC Logistics"
						type="text"
						value={shipping_company}
						onChange={(event) => {
							setShippingCompany(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="contact_number">Contact Number</Label>
					<Input
						id="contact_number"
						placeholder="+987654321"
						type="tel"
						value={contact_number}
						onChange={(event) => {
							setContactNumber(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="origin">Origin</Label>
					<Input
						id="origin"
						placeholder="City C"
						type="text"
						value={origin}
						onChange={(event) => {
							setOrigin(event.target.value);
						}}
					/>
				</LabelInputContainer>
				<LabelInputContainer className="mb-4">
					<Label htmlFor="destination">Destination</Label>
					<Input
						id="destination"
						placeholder="City D"
						type="text"
						value={destination}
						onChange={(event) => {
							setDestination(event.target.value);
						}}
					/>
				</LabelInputContainer>

				<button
					className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
					type="submit"
				>
					Create Transit &rarr;
					<BottomGradient />
				</button>
                
			</form>
		</div>
	);
}

const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
