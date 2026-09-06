import Navbar from "../components/layout/Navbar";
import Contact from "../sections/Contact";
import Footer from "../components/layout/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <Contact />
      </main>

      
    </>
  );
}

export default ContactPage;