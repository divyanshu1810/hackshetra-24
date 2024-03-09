import SignupPage from "./onboarding/signup-page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewTransit } from "./dashboard/new-transit";
import ViewTransits from "./dashboard/view-transits";
import Landing from "./landing/landing";
import LoginPage from "./onboarding/login-page";
import Dashboard from "./dashboard/dashboard";
import ReachedTransits from "./dashboard/reached-transits";

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
					<Route path="/dashboard/view-transits" element={<ViewTransits />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route
						path="/dashboard/reached-transits"
						element={<ReachedTransits />}
					/>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
