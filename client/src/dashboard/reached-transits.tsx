import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
export default function ReachedTransits() {
	const [status, setStatus] = useState("");
	return (
		<div>
			<div className="flex flex-col items-start justify-center m-10">
				<Link to="new-transit">
					<Button>Add new transit</Button>
				</Link>
			</div>

			<div className="w-full flex gap-5 flex-col max-w-xl rounded-xl m-5 p-5 bg-orange-100">
				<div className="flex w-full justify-between">
					<div className="font-bold text-lg">Company Name </div>
					<div>Transit ID</div>
				</div>

				<div className="flex w-full justify-between">
					<div className="">Order date </div>
					<div>Contact number</div>
				</div>
				<div className="">Status </div>

				<form className="flex flex-col gap-10">
					<div className="items-top flex space-x-2">
						<Checkbox id="terms1" />
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms1"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Update as per Bill{" "}
							</label>
						</div>
					</div>
					<div className="items-top flex space-x-2">
						<Checkbox id="terms1" />
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms1"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Tally entry for goods
							</label>
						</div>
					</div>

					<div className="items-top flex space-x-2">
						<Checkbox id="terms1" />
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms1"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								Scan the Bill{" "}
							</label>
						</div>
					</div>
					<div className="items-top flex space-x-2">
						<Checkbox id="terms1" />
						<div className="grid gap-1.5 leading-none">
							<label
								htmlFor="terms1"
								className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
							>
								On the record
							</label>
						</div>
					</div>

					<Button type="button" onClick={() => setStatus(status)}>
						Update
					</Button>
				</form>
				<Button type="button" onClick={() => setStatus(status)}>
					Updated inventory
				</Button>
			</div>
		</div>
	);
}
