import { motion } from "framer-motion";
import experienceBg from "../assets/experience-bg.jpg";

const items = [
  {
    emoji: "🔥",
    title: "Deep Worship",
    text: "Heartfelt worship and total surrender.",
    color: "border-amber-300/20 bg-amber-500/10",
  },
  {
    emoji: "🙏",
    title: "Intense Intercession",
    text: "Deep communion and strategic prayers.",
    color: "border-blue-300/20 bg-blue-500/10",
  },
  {
    emoji: "⚡",
    title: "Revival Fire",
    text: "Fresh hunger and spiritual awakening.",
    color: "border-orange-300/20 bg-orange-500/10",
  },
  {
    emoji: "✨",
    title: "Divine Encounters",
    text: "Life-changing moments in His presence.",
    color: "border-purple-300/20 bg-purple-500/10",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative px-5 py-16 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{ backgroundImage: `url(${experienceBg})` }}
      />

      <div className="absolute inset-0 bg-black/85"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-amber-500/10 via-black/40 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center">
          <p className="text-amber-300 text-xs tracking-[0.3em]">
            WHAT TO EXPECT
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-black">
            What Awaits You
          </h2>

          <p className="mt-3 text-white/60 text-sm max-w-md mx-auto">
            A night of worship, prayer, revival and divine encounters.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl border ${item.color} backdrop-blur-xl p-4`}
            >
              <div className="flex items-start gap-3">
                <div className="text-2xl">{item.emoji}</div>

                <div>
                  <h3 className="font-bold text-base">{item.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;