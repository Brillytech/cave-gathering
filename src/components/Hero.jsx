import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import heroBg from "../assets/hero-bg.jpg";

const words = [
  { text: "Worship.", color: "text-amber-300" },
  { text: "Prayer.", color: "text-blue-300" },
  { text: "Revival.", color: "text-orange-400" },
  { text: "Encounter.", color: "text-purple-300" },
  { text: "Face To Face.", color: "text-yellow-300" },
];

const RotatingWords = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <motion.span
        key={words[index].text}
        initial={{ opacity: 0, y: 35, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -25, filter: "blur(8px)" }}
        transition={{ duration: 0.9 }}
        className={`block ${words[index].color}`}
      >
        {words[index].text}
      </motion.span>
    </AnimatePresence>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050201] px-5 pt-32 pb-16 flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/45"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#050201]/40 via-transparent to-[#050201]"></div>

      <div className="absolute top-20 left-[-80px] w-72 h-72 bg-amber-500/15 blur-3xl rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-[-80px] w-80 h-80 bg-yellow-500/10 blur-3xl rounded-full animate-pulse"></div>

      <motion.div
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-32 right-10 hidden lg:block w-20 h-20 rounded-full border border-amber-300/20 bg-white/5 backdrop-blur-md"
      />

      <motion.div
        animate={{ y: [0, 18, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-28 left-10 hidden lg:block w-16 h-16 rounded-full border border-white/10 bg-amber-300/10 backdrop-blur-md"
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <p className="text-amber-300 tracking-[0.35em] text-xs sm:text-sm mb-4">
            ANTICIPATE
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight">
            <span className="block text-white">THE CAVE</span>
            <span className="block bg-gradient-to-r from-amber-100 via-yellow-400 to-amber-200 bg-clip-text text-transparent">
              GATHERING 1.0
            </span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-white/90">
            A 5-Hour Worship & Prayer Experience
          </p>

          <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-white/75 leading-8 text-sm sm:text-base">
            “Draw me closer, Lord… let me see You face to face.”
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#register"
              className="rounded-full bg-amber-400 px-8 py-4 text-black font-black hover:bg-amber-300 transition shadow-[0_0_35px_rgba(251,191,36,0.35)]"
            >
              Reserve My Spot
            </a>

            <a
              href="#about"
              className="rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-8 py-4 text-white font-bold hover:bg-white/15 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          whileHover={{ y: -6, scale: 1.02 }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-amber-400/15 blur-3xl"></div>

          <div className="relative rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-white/10 via-white/5 to-amber-500/5 backdrop-blur-xl p-4 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6 sm:p-8 min-h-0">
              <p className="text-amber-300 text-xs sm:text-sm tracking-[0.3em]">
                FACE TO FACE
              </p>

              <motion.h2 className="mt-4 min-h-[70px] text-3xl sm:text-5xl md:text-6xl font-black leading-tight">
                <RotatingWords />
              </motion.h2>

              <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
                <motion.div whileHover={{ scale: 1.04 }} className="rounded-2xl bg-amber-500/15 p-3 border border-amber-300/20">
                  🔥 Deep Worship
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} className="rounded-2xl bg-blue-500/10 p-3 border border-blue-300/20">
                  🙏 Intercession
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} className="rounded-2xl bg-orange-500/15 p-3 border border-orange-300/20">
                  ⚡ Revival Fire
                </motion.div>

                <motion.div whileHover={{ scale: 1.04 }} className="rounded-2xl bg-purple-500/10 p-3 border border-purple-300/20">
                  ✨ Encounters
                </motion.div>
              </div>

              <p className="mt-8 text-white/70 text-sm">
                Date, time and venue will be announced soon.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;