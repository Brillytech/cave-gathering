import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 px-4 py-4"
    >
      <div className="max-w-7xl mx-auto rounded-full border border-white/10 bg-white/10 backdrop-blur-xl shadow-[0_0_30px_rgba(251,191,36,0.12)] px-5 sm:px-7 py-3 flex items-center justify-between">
        <a href="#" className="font-black text-lg sm:text-xl tracking-wide">
          <span className="text-white">THE</span>{" "}
          <span className="text-amber-300">CAVE</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
          <a href="#about" className="hover:text-amber-300 transition">
            About
          </a>
          <a href="#experience" className="hover:text-amber-300 transition">
            Experience
          </a>
          <a href="#register" className="hover:text-amber-300 transition">
            Register
          </a>
        </div>

        <a
          href="#register"
          className="rounded-full bg-amber-400 hover:bg-amber-300 text-black text-xs sm:text-sm font-black px-4 sm:px-6 py-2.5 transition shadow-[0_0_25px_rgba(251,191,36,0.35)]"
        >
          Reserve Spot
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;