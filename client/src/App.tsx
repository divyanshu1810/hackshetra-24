import Dashboard from "./dashboard/dashboard";
import Receptionist from "./dashboard/receptionist";
import TransitDetails from "./components/ui/transit-detaills";
import SignupPage from './onboarding/signup-page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NewTransit } from './dashboard/new-transit';
import ReachedTransits from './dashboard/reached-transits';
import Landing from './landing/landing';
import LoginPage from './onboarding/login-page';
import CreateUserPage from './dashboard/admin-panel';
import UpdateTransit from "./components/ui/update-transit";
import CreateContainer from "./components/ui/create-container";
import UpdateContainer from "./components/ui/update-container";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/dashboard/new-transit" element={<NewTransit />} />
          <Route path="/dashboard/view-transit" element={<Receptionist />} />
          <Route path="/dashboard/admin-panel" element={<CreateUserPage />} />
          <Route path="/transit/:id" element={<TransitDetails />} />
          <Route
            path="/dashboard/reached-transits"
            element={<ReachedTransits />}
          />
          <Route path="/dashboard/reached-transits" element={<ReachedTransits />} />
          <Route path="/transit/update/:id" element={<UpdateTransit />} />
          <Route path="/transit/create-container/:id" element={<CreateContainer />} />
          <Route path="/transit/:tid/update-container/:cid" element={<UpdateContainer />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
