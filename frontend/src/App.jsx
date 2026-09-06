import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ServicesPage from "./pages/ServicesPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f8f9ff] text-slate-950">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGE CONTENT */}
        <main>
          <Routes>
            {/* HOME */}
            <Route path="/" element={<Home />} />

            {/* MAIN PAGES */}
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/portfolio"
              element={<PortfolioPage />}
            />
            <Route
              path="/services"
              element={<ServicesPage />}
            />
            <Route path="/faq" element={<FAQPage />} />
            <Route
              path="/contact"
              element={<ContactPage />}
            />

            {/* PROJECT DETAILS */}
            <Route
              path="/portfolio/:projectId"
              element={<ProjectDetails />}
            />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;