
import {
  BriefcaseBusiness,
  FileQuestion,
  FolderKanban,
  Image,
  LayoutDashboard,
  MessageSquareQuote,
  Settings,
  Users,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Projects",
    path: "/admin/projects",
    icon: FolderKanban,
  },
  {
    label: "Services",
    path: "/admin/services",
    icon: BriefcaseBusiness,
  },
  {
    label: "Testimonials",
    path: "/admin/testimonials",
    icon: MessageSquareQuote,
  },
  {
    label: "FAQs",
    path: "/admin/faqs",
    icon: FileQuestion,
  },
  {
    label: "Leads",
    path: "/admin/leads",
    icon: Users,
  },
  {
    label: "Media",
    path: "/admin/media",
    icon: Image,
  },
];

function AdminSidebar({
  mobile = false,
  onNavigate,
}) {
  return (
    <aside
      className={[
        "bg-white",
        mobile
          ? "flex h-full w-full flex-col"
          : "hidden w-[248px] shrink-0 border-r border-gray-200 lg:flex lg:min-h-screen lg:flex-col",
      ].join(" ")}
    >
      {/* Brand */}
      <div className="flex h-[72px] items-center justify-between border-b border-gray-200 px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-900 text-xs font-bold text-white">
            CS
          </div>

          <div>
            <p className="text-sm font-semibold tracking-tight text-gray-900">
              Creative Studio
            </p>

            <p className="mt-0.5 text-[11px] text-gray-500">
              Administration
            </p>
          </div>
        </div>

        {mobile && (
          <button
            type="button"
            onClick={onNavigate}
            aria-label="Close navigation"
            className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
          >
            <X size={18} strokeWidth={1.8} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-5">
        <p className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
          Management
        </p>

        <div className="space-y-0.5">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onNavigate}
                className="group block"
              >
                {({ isActive }) => (
                  <motion.div
                    whileHover={{ x: isActive ? 0 : 1 }}
                    transition={{
                      duration: 0.12,
                    }}
                    className={[
                      "relative flex h-10 items-center gap-3 rounded-lg px-3",
                      "text-sm transition-colors duration-150",
                      isActive
                        ? "bg-gray-100 font-medium text-gray-950"
                        : "font-normal text-gray-600 hover:bg-gray-50 hover:text-gray-950",
                    ].join(" ")}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="admin-active-navigation"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                        className="absolute left-0 top-1/2 h-5 w-0.5 -translate-y-1/2 rounded-full bg-gray-900"
                      />
                    )}

                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className={[
                        "shrink-0",
                        isActive
                          ? "text-gray-900"
                          : "text-gray-400 group-hover:text-gray-700",
                      ].join(" ")}
                    />

                    <span className="truncate">
                      {item.label}
                    </span>
                  </motion.div>
                )}
              </NavLink>
            );
          })}
        </div>
      </nav>

      {/* Settings */}
      <div className="border-t border-gray-200 px-3 py-4">
        <NavLink
          to="/admin/settings"
          onClick={onNavigate}
          className="group block"
        >
          {({ isActive }) => (
            <motion.div
              whileHover={{ x: isActive ? 0 : 1 }}
              transition={{
                duration: 0.12,
              }}
              className={[
                "flex h-10 items-center gap-3 rounded-lg px-3",
                "text-sm transition-colors duration-150",
                isActive
                  ? "bg-gray-100 font-medium text-gray-950"
                  : "text-gray-600 hover:bg-gray-50 hover:text-gray-950",
              ].join(" ")}
            >
              <Settings
                size={17}
                strokeWidth={1.8}
                className={
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 group-hover:text-gray-700"
                }
              />

              <span>Settings</span>
            </motion.div>
          )}
        </NavLink>

        <div className="mt-4 px-3">
          <p className="text-[10px] text-gray-400">
            Creative Studio CMS
          </p>

          <p className="mt-1 text-[10px] text-gray-300">
            v1.0
          </p>
        </div>
      </div>
    </aside>
  );
}

export default AdminSidebar;

