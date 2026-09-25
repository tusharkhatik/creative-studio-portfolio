import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import useScrollToTop from "../hooks/useScrollToTop";

function PublicLayout() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-[#080a12] text-white">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default PublicLayout;
