import React from 'react';
import Receptionist from './receptionist';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex items-center">
              <span className="text-white font-semibold text-lg">TrackMYTransit</span>
            </div>
            <div className="flex items-center">
              <Link
                to="/dashboard/view-transit"
                className="text-gray-100 hover:bg-zinc-900  hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Track Transit
              </Link>

              <a
                href="#"
                className="text-gray-100 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Pre-inventory Checks
              </a>
              <a
                href="#"
                className="text-gray-100 hover:bg-zinc-900 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin panel
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="p-4">
        <Receptionist />
      </div>
    </div>
  );
}
