import SignupPage from './onboarding/signup-page';
import { LoginFormDemo } from './onboarding/login-form';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TypewriterEffectDemo } from './landing/landing-page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TypewriterEffectDemo />} />
          <Route path="/login" element={<LoginFormDemo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
