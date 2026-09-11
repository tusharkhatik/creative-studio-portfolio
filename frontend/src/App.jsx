import { BrowserRouter, Routes, Route } from "react-router-dom";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

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
      <Routes>

        {/* =====================================================
            PUBLIC WEBSITE
        ===================================================== */}

        <Route element={<PublicLayout />}>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/portfolio"
            element={<PortfolioPage />}
          />

          <Route
            path="/portfolio/:projectId"
            element={<ProjectDetails />}
          />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/faq"
            element={<FAQPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

        </Route>


        {/* =====================================================
            ADMIN
        ===================================================== */}

        <Route element={<AdminLayout />}>

          {/* Admin routes will be added here */}

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;