import Navbar from "../components/layout/Navbar";
import Portfolio from "../sections/Portfolio";
import Footer from "../components/layout/Footer";

function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#080a12] text-white">
      <Navbar />

      <main>
        <Portfolio />
      </main>

      
    </div>
  );
}

export default PortfolioPage;