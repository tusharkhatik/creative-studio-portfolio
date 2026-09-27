
import {
  Bell,
  ChevronDown,
  LogOut,
  Menu,
} from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../../app/providers/AuthProvider";

function AdminHeader({ onMenuClick }) {
  const location = useLocation();
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const getPageTitle = () => {
    const path = location.pathname;

    if (
      path === "/admin" ||
      path === "/admin/dashboard"
    ) {
      return "Dashboard";
    }

    if (path.startsWith("/admin/projects")) {
      return "Projects";
    }

    if (path.startsWith("/admin/services")) {
      return "Services";
    }

    if (path.startsWith("/admin/testimonials")) {
      return "Testimonials";
    }

    if (path.startsWith("/admin/faqs")) {
      return "FAQs";
    }

    if (path.startsWith("/admin/leads")) {
      return "Leads";
    }

    if (path.startsWith("/admin/media")) {
      return "Media";
    }

    if (path.startsWith("/admin/settings")) {
      return "Settings";
    }

    return "Admin";
  };

  const handleLogout = () => {
    logout();

    navigate("/admin/login", {
      replace: true,
    });
  };

  const initials =
    user?.username?.trim()?.charAt(0)?.toUpperCase() ||
    "A";

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white">
      <div className="flex h-[72px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left */}
        <div className="flex min-w-0 items-center gap-3">
          {/* Mobile menu */}
          <motion.button
            type="button"
            onClick={onMenuClick}
            whileTap={{ scale: 0.96 }}
            aria-label="Open navigation"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:bg-gray-50 hover:text-gray-900 lg:hidden"
          >
            <Menu
              size={18}
              strokeWidth={1.8}
            />
          </motion.button>

          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <p className="hidden text-xs font-medium text-gray-400 sm:block">
                Admin
              </p>

              <span className="hidden text-gray-300 sm:block">
                /
              </span>

              <p className="truncate text-sm font-medium text-gray-600">
                {getPageTitle()}
              </p>
            </div>

            <h1 className="mt-0.5 truncate text-lg font-semibold tracking-tight text-gray-900">
              {getPageTitle()}
            </h1>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <motion.button
            type="button"
            whileTap={{ scale: 0.96 }}
            aria-label="Notifications"
            className="relative flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <Bell
              size={18}
              strokeWidth={1.8}
            />

            <span
              aria-hidden="true"
              className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-red-500 ring-2 ring-white"
            />
          </motion.button>

          <div className="mx-1 hidden h-6 w-px bg-gray-200 sm:block" />

          {/* User */}
          <button
            type="button"
            className="group flex items-center gap-2 rounded-lg px-2 py-1.5 transition hover:bg-gray-50"
          >
            <div className="hidden text-right sm:block">
              <p className="max-w-32 truncate text-sm font-medium text-gray-900">
                {user?.username || "Administrator"}
              </p>

              <p className="text-[10px] uppercase tracking-wide text-gray-400">
                {user?.role || "ADMIN"}
              </p>
            </div>

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-xs font-semibold text-white">
              {initials}
            </div>

            <ChevronDown
              size={15}
              strokeWidth={1.8}
              className="hidden text-gray-400 transition-transform group-hover:text-gray-700 sm:block"
            />
          </button>

          {/* Logout */}
          <motion.button
            type="button"
            onClick={handleLogout}
            whileTap={{ scale: 0.96 }}
            className="ml-1 flex h-9 items-center gap-2 rounded-lg border border-gray-200 px-3 text-sm font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            <LogOut
              size={16}
              strokeWidth={1.8}
            />

            <span className="hidden md:inline">
              Logout
            </span>
          </motion.button>
        </div>
      </div>
    </header>
  );
}

export default AdminHeader;

