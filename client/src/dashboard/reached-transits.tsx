import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
export default function ReachedTransits() {
	const [status, setStatus] = useState("");
	return (
		<div>
			

			<div className="w-full flex gap-5 flex-col max-w-xl rounded-xl m-5 p-5 bg-orange-100">
				
				<form className="flex flex-col gap-5">
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

				
				</form>
				
			</div>
		</div>
	);
}
