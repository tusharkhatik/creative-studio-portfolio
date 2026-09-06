import Navbar from "../components/layout/Navbar";
import About from "../sections/About";
import Footer from "../components/layout/Footer";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        <About />
      </main>

      
    </>
  );
}

export default AboutPage;