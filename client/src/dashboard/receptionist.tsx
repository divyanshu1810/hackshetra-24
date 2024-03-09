import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Input } from "@/ui/input";
import { useState } from "react";
import { stat } from "fs";
export default function Receptionist() {
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
				<form className="flex gap-10">
					<input
						className="w-96 p-2 border-2 border-neutral-400 rounded-md"
						id="status"
						placeholder="update status"
						type="text"
						value={status}
						onChange={(event) => {
							setStatus(event.target.value);
						}}
					/>
					<Button type="button" onClick={() => setStatus(status)}>
						Update
					</Button>
				</form>
				<Button type="button" onClick={() => setStatus(status)}>
					Reached Warehouse
				</Button>
			</div>
		</div>
	);
}
