import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Register from "./components/Register";
import Footer from "./components/Footer";
import Details from "./components/Details";

function App() {
  return (
    <div className="bg-[#050201] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Details />
      <Register />
      <Footer />
    </div>
  );
}

export default App;