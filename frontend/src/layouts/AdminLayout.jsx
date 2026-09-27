
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Outlet } from "react-router-dom";

import AdminHeader from "../components/layout/AdminHeader";
import AdminSidebar from "../components/layout/AdminSidebar";

function AdminLayout() {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const closeMobileSidebar = () => {
    setMobileSidebarOpen(false);
  };

  const openMobileSidebar = () => {
    setMobileSidebarOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-gray-900">
      {/* Mobile navigation */}
      <AnimatePresence>
        {mobileSidebarOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation"
              onClick={closeMobileSidebar}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            />

            <motion.aside
              aria-label="Primary navigation"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                duration: 0.24,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed inset-y-0 left-0 z-50 w-[280px] lg:hidden"
            >
              <AdminSidebar
                mobile
                onNavigate={closeMobileSidebar}
              />
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <div className="flex min-h-screen">
        {/* Desktop sidebar */}
        <AdminSidebar />

        {/* Application content */}
        <div className="flex min-w-0 flex-1 flex-col">
          <AdminHeader onMenuClick={openMobileSidebar} />

          <main className="min-w-0 flex-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="min-h-full"
            >
              <Outlet />
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;

