import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Register from "./components/Register";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#050201] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Register />
      <Footer />
    </div>
  );
}

export default App;