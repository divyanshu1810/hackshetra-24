import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Receptionist() {
	return (
		<div>
			<div className="flex flex-col items-start justify-center m-10">
				<Link to="new-transit">
					<Button>Add new transit</Button>
				</Link>
			</div>

			<Link to="/">
				<button
					type="button"
					className="w-full flex gap-5 flex-col max-w-xl rounded-xl m-5 p-5 bg-orange-100"
				>
					<div className="flex w-full justify-between">
						<div className="font-bold text-lg">Company Name </div>
						<div>Transit ID</div>
					</div>

					<div className="">Order date </div>
					<div className="">Current status </div>
				</button>
			</Link>
		</div>
	);
}
