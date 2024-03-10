import { CreateUserFormDemo } from './create-users';
import {Link} from 'react-router-dom'
function createUserPage() {
  return (
    <>
     <nav className="bg-gray-800 p-4">
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
      </nav>
    <div className="flex w-full h-screen items-center justify-center ">
      
      <CreateUserFormDemo />
    </div></>
  );
}

export default createUserPage;
