import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-5 bg-[#060201]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-2 rounded-full bg-amber-500/10 border border-amber-300/20 text-amber-300 text-sm">
              FACE TO FACE
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-black leading-tight">
              More Than A
              <span className="block text-amber-300">
                Gathering
              </span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-white/70 leading-8 text-lg">
              The Cave Gathering is an atmosphere where hearts
              are stirred toward intimacy with God through
              worship, prayer, revival and transformation.
              It is a call to leave distractions behind and
              encounter God face to face.
            </p>
          </motion.div>
        </div>

       <div className="grid grid-cols-2 gap-3 mt-10">
  <div className="rounded-2xl bg-amber-500/10 border border-amber-300/20 p-4">
    <span className="text-xl">🔥</span>
    <h4 className="mt-2 text-sm font-bold">Worship</h4>
  </div>

  <div className="rounded-2xl bg-blue-500/10 border border-blue-300/20 p-4">
    <span className="text-xl">🙏</span>
    <h4 className="mt-2 text-sm font-bold">Prayer</h4>
  </div>

  <div className="rounded-2xl bg-orange-500/10 border border-orange-300/20 p-4">
    <span className="text-xl">⚡</span>
    <h4 className="mt-2 text-sm font-bold">Revival</h4>
  </div>

  <div className="rounded-2xl bg-purple-500/10 border border-purple-300/20 p-4">
    <span className="text-xl">✨</span>
    <h4 className="mt-2 text-sm font-bold">Transformation</h4>
  </div>
</div>
      </div>
    </section>
  );
};

export default About;