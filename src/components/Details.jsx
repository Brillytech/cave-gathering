import { motion } from "framer-motion";

const Details = () => {
  return (
    <section id="details" className="bg-[#050201] px-5 py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-white/10 via-white/5 to-amber-500/5 backdrop-blur-xl p-5 sm:p-8"
        >
          <p className="text-amber-300 tracking-[0.3em] text-xs">
            EVENT DETAILS
          </p>

          <h2 className="mt-3 text-3xl sm:text-5xl font-black">
            Date, Time & Venue
          </h2>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="details-card">
              <p>Date</p>
              <h3>7th August, 2026</h3>
            </div>

            <div className="details-card">
              <p>Time</p>
              <h3>10:00 AM</h3>
            </div>
          </div>

          <div className="mt-4 rounded-3xl border border-amber-300/20 bg-amber-500/10 p-5">
            <p className="text-white/50 text-sm">Venue</p>

            <h3 className="mt-2 text-xl font-black text-white">
              Beautified International Christian Center
            </h3>

            <p className="mt-3 text-white/70 leading-7 text-sm sm:text-base">
              Beautyland 3, Kamoru Biobaku Street, by Kaslat Filling Station,
              opposite Samoris Hotel, Oke Lantoro, Abeokuta.
            </p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
  <a
    href="#register"
    className="rounded-full bg-amber-400 px-8 py-4 text-black font-black hover:bg-amber-300 transition text-center"
  >
    Register Now
  </a>

  <a
    href="https://maps.app.goo.gl/rMkuahDPtd6t7iDU6"
    target="_blank"
    rel="noreferrer"
    className="rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white font-bold hover:bg-white/10 transition text-center"
  >
    📍 Open in Google Maps
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
};

export default Details;