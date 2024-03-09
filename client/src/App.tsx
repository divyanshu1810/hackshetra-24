
import SignupPage from "./onboarding/signup-page";
import { LoginFormDemo } from "./onboarding/login-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NewTransit } from "./dashboard/new-transit";
import ViewTransits from "./dashboard/view-transits";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignupPage />} />
					<Route path="/login" element={<LoginFormDemo />} />
          <Route path="/signup" element={<SignupPage />} />
					<Route path="/new-transit" element={<NewTransit />} />
					<Route path="/view-transits" element={<ViewTransits />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
