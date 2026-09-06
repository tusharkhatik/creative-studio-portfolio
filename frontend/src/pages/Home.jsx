import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Portfolio from "../sections/Portfolio";
import About from "../sections/About";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import FAQ from "../sections/FAQ";
import Contact from "../sections/Contact";
function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default Home;