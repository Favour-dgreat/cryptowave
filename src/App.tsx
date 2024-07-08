import { Routes, Route } from "react-router-dom"
import LandingPage from "./pages/landingPage";
import AOS from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/dashboardPage";
// ..
AOS.init();
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />



      </Routes>
    </>
  );
}

export default App;
