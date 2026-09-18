import { Routes, Route } from "react-router-dom";
import HomePage from "../features/home/HomePage";
import PrivacyPolicy from "../components/layout/PrivacyPolicy";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aviso-de-privacidad" element={<PrivacyPolicy />}/>
    </Routes>
  );
}