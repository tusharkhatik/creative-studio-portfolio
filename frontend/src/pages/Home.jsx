import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* Main introduction */}
        <Hero />
      </main>

      
    </>
  );
}

export default Home;