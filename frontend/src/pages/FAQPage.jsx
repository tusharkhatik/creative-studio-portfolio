import Navbar from "../components/layout/Navbar";
import FAQ from "../sections/FAQ";
import Footer from "../components/layout/Footer";

function FAQPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <FAQ />
      </main>

      <Footer />
    </>
  );
}

export default FAQPage;