import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
export default function ReachedTransits() {
	const [status, setStatus] = useState("");
	return (
		<>	<nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">TrackMYTransit</span>
            </div>
            {localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'receptionist' ? (
              <Link to="/dashboard">
  <div className="text-white font-semibold text-lg">
    Incoming Transits
  </div></Link>
) : (
  <div></div>
)}
 {localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'factory-worker' ? (
  <Link to="/dashboard/reached-transits">
  <div className="text-white font-semibold text-lg">
    Reached Transits
  </div>
  </Link>
) : (
  <div></div>
)}
            
            {localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'factory-worker' ? (
  <Link to="/dashboard/admin-panel">
  <div className="text-white font-semibold text-lg">
   Admin Pannel
  </div>
  </Link>
) : (
  <div></div>
)}
            <button
              onClick={() => {
                localStorage.setItem('isLoggedIn', 'false');
                localStorage.setItem('token', '');
                localStorage.setItem('role', '');
                localStorage.setItem('name', '');
                window.location.href = '/login';
              }}
              className="text-white font-semibold text-lg bg-red-500 px-4 py-1 rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
            >Log Out</button>
          </div>
        </div>
      </nav>	<div>
			

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
		</div></>
	);
}
