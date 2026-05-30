import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black px-5 py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl font-black">
          EXOUSIA <span className="text-amber-300">GLOBAL</span>
        </h3>

        <p className="mt-3 text-white/60 text-sm">
          Pray. Plan. Attend.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a href="#" className="footer-icon">
            <FaInstagram />
          </a>

          <a href="https://chat.whatsapp.com/F7pQ7XDbZisAL5zO1n08h4?mode=gi_t" className="footer-icon">
            <FaWhatsapp />
          </a>
        </div>

        <p className="mt-6 text-white/40 text-xs">
          #TheCaveGathering2026 #FaceToFace #RevivalSound
        </p>

        <p className="mt-4 text-white/30 text-xs">
          Built by BrillyTech Networks
        </p>
      </div>
    </footer>
  );
};

export default Footer;