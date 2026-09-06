import Navbar from "../components/layout/Navbar";
import Services from "../sections/Services";
import Footer from "../components/layout/Footer";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <main>
        <Services />
      </main>

      
    </div>
  );
}

export default ServicesPage;