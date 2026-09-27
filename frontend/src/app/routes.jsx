import { Routes, Route } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "../components/common/ProtectedRoute";

// Public Pages
import Home from "../pages/public/Home";
import AboutPage from "../pages/public/AboutPage";
import PortfolioPage from "../pages/public/PortfolioPage";
import ProjectDetails from "../pages/public/ProjectDetails";
import ServicesPage from "../pages/public/ServicesPage";
import FAQPage from "../pages/public/FAQPage";
import ContactPage from "../pages/public/ContactPage";
import PrivacyPage from "../pages/public/PrivacyPage";
import TermsPage from "../pages/public/TermsPage";
import NotFoundPage from "../pages/public/NotFoundPage";

// Admin Pages
import AdminLogin from "../pages/admin/AdminLogin";
import AdminDashboard from "../pages/admin/AdminDashboard";

import Projects from "../pages/admin/Projects";
import ProjectCreate from "../pages/admin/ProjectCreate";
import ProjectEdit from "../pages/admin/ProjectEdit";

import Services from "../pages/admin/Services";
import ServiceCreate from "../pages/admin/ServiceCreate";
import ServiceEdit from "../pages/admin/ServiceEdit";

import Testimonials from "../pages/admin/Testimonials";
import TestimonialCreate from "../pages/admin/TestimonialCreate";
import TestimonialEdit from "../pages/admin/TestimonialEdit";

import FAQs from "../pages/admin/FAQs";
import FAQCreate from "../pages/admin/FAQCreate";
import FAQEdit from "../pages/admin/FAQEdit";

import Leads from "../pages/admin/Leads";
import LeadDetails from "../pages/admin/LeadDetails";

import Media from "../pages/admin/Media";
import Settings from "../pages/admin/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* =====================================================
          PUBLIC WEBSITE
      ===================================================== */}

      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/portfolio" element={<PortfolioPage />} />

        <Route
          path="/portfolio/:projectId"
          element={<ProjectDetails />}
        />

        <Route path="/services" element={<ServicesPage />} />

        <Route path="/faq" element={<FAQPage />} />

        <Route path="/contact" element={<ContactPage />} />

        <Route path="/privacy" element={<PrivacyPage />} />

        <Route path="/terms" element={<TermsPage />} />
      </Route>

      {/* =====================================================
          ADMIN LOGIN
          This route MUST remain outside ProtectedRoute.
      ===================================================== */}

      <Route
        path="/admin/login"
        element={<AdminLogin />}
      />

      {/* =====================================================
          PROTECTED ADMIN APPLICATION
      ===================================================== */}

      <Route element={<ProtectedRoute requiredRole="ADMIN" />}>
        <Route element={<AdminLayout />}>

          {/* Dashboard */}
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminDashboard />}
          />

          {/* ---------------- Projects ---------------- */}

          <Route
            path="/admin/projects"
            element={<Projects />}
          />

          <Route
            path="/admin/projects/create"
            element={<ProjectCreate />}
          />

          <Route
            path="/admin/projects/:projectId/edit"
            element={<ProjectEdit />}
          />

          {/* ---------------- Services ---------------- */}

          <Route
            path="/admin/services"
            element={<Services />}
          />

          <Route
            path="/admin/services/create"
            element={<ServiceCreate />}
          />

          <Route
            path="/admin/services/:serviceId/edit"
            element={<ServiceEdit />}
          />

          {/* ---------------- Testimonials ---------------- */}

          <Route
            path="/admin/testimonials"
            element={<Testimonials />}
          />

          <Route
            path="/admin/testimonials/create"
            element={<TestimonialCreate />}
          />

          <Route
            path="/admin/testimonials/:testimonialId/edit"
            element={<TestimonialEdit />}
          />

          {/* ---------------- FAQs ---------------- */}

          <Route
            path="/admin/faqs"
            element={<FAQs />}
          />

          <Route
            path="/admin/faqs/create"
            element={<FAQCreate />}
          />

          <Route
            path="/admin/faqs/:faqId/edit"
            element={<FAQEdit />}
          />

          {/* ---------------- Leads ---------------- */}

          <Route
            path="/admin/leads"
            element={<Leads />}
          />

          <Route
            path="/admin/leads/:leadId"
            element={<LeadDetails />}
          />

          {/* ---------------- Media ---------------- */}

          <Route
            path="/admin/media"
            element={<Media />}
          />

          {/* ---------------- Settings ---------------- */}

          <Route
            path="/admin/settings"
            element={<Settings />}
          />

        </Route>
      </Route>

      {/* =====================================================
          404
      ===================================================== */}

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}

