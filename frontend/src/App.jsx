import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/guards/ProtectedRoute";

import PublicLayout from "./layouts/PublicLayout";
import AdminLayout from "./layouts/AdminLayout";

import Home from "./pages/public/Home";
import AboutPage from "./pages/public/AboutPage";
import PortfolioPage from "./pages/public/PortfolioPage";
import ProjectDetails from "./pages/public/ProjectDetails";
import ServicesPage from "./pages/public/ServicesPage";
import FAQPage from "./pages/public/FAQPage";
import ContactPage from "./pages/public/ContactPage";
import PrivacyPage from "./pages/public/PrivacyPage";
import TermsPage from "./pages/public/TermsPage";
import NotFoundPage from "./pages/public/NotFoundPage";

import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Projects from "./pages/admin/Projects";
import ProjectCreate from "./pages/admin/ProjectCreate";
import ProjectEdit from "./pages/admin/ProjectEdit";
import Services from "./pages/admin/Services";
import Testimonials from "./pages/admin/Testimonials";
import FAQs from "./pages/admin/FAQs";
import Leads from "./pages/admin/Leads";
import Media from "./pages/admin/Media";
import Settings from "./pages/admin/Settings";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>

          <Route path="/admin/login" element={<AdminLogin />} />

          <Route element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/projects" element={<Projects />} />
            <Route path="/admin/projects/create" element={<ProjectCreate />} />
            <Route path="/admin/projects/:projectId/edit" element={<ProjectEdit />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="/admin/testimonials" element={<Testimonials />} />
            <Route path="/admin/faqs" element={<FAQs />} />
            <Route path="/admin/leads" element={<Leads />} />
            <Route path="/admin/media" element={<Media />} />
            <Route path="/admin/settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
