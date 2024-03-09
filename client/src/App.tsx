import SignupPage from "./onboarding/signup-page";
import { LoginFormDemo } from "./onboarding/login-form";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<SignupPage />} />
					<Route path="/login" element={<LoginFormDemo />} />

				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
