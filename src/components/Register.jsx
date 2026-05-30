import { useState } from "react";
import { motion } from "framer-motion";
import { FaCheckCircle, FaWhatsapp } from "react-icons/fa";

const Register = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const encode = (data) => {
    return new URLSearchParams(data).toString();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = new FormData(form);

    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(formData),
    });

    setLoading(false);
    setSubmitted(true);
    form.reset();
  };

  return (
    <section id="register" className="bg-[#050201] px-5 py-16">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-amber-200/20 bg-gradient-to-br from-white/10 via-white/5 to-amber-500/5 backdrop-blur-xl p-5 sm:p-8"
        >
          {!submitted ? (
            <>
              <p className="text-amber-300 tracking-[0.3em] text-xs">
                REGISTRATION IS FREE
              </p>

              <h2 className="mt-3 text-3xl sm:text-5xl font-black">
                Reserve Your Spot
              </h2>

              <p className="mt-3 text-white/60 text-sm sm:text-base">
                Kindly fill this form correctly to help us prepare for you.
              </p>

              <form
                name="cave-registration"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="mt-8 grid gap-4"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="cave-registration" />

                <p className="hidden">
                  <label>
                    Don’t fill this out:
                    <input name="bot-field" />
                  </label>
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input required name="fullName" placeholder="Full Name" className="form-input" />
                  <input required name="phone" placeholder="Phone Number" className="form-input" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <input name="email" type="email" placeholder="Email Address" className="form-input" />

                  <select required name="gender" className="form-input">
                    <option value="">Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select required name="ageRange" className="form-input">
                    <option value="">Age Range</option>
                    <option>13–17</option>
                    <option>18–22</option>
                    <option>23–27</option>
                    <option>28 and above</option>
                  </select>

                  <input required name="city" placeholder="State / City" className="form-input" />
                </div>

                <input name="church" placeholder="Church / Fellowship Name" className="form-input" />

                <select required name="attendance" className="form-input">
                  <option value="">Attending Physically or Online?</option>
                  <option>Physical</option>
                  <option>Online</option>
                </select>

                <textarea
                  name="expectations"
                  placeholder="What are your expectations for this encounter?"
                  className="form-input min-h-24"
                ></textarea>

                <div className="grid sm:grid-cols-2 gap-4">
                  <select name="whatsappGroup" className="form-input">
                    <option value="">Join WhatsApp update group?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>

                  <select name="volunteer" className="form-input">
                    <option value="">Willing to volunteer?</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>

                <textarea
                  name="prayerRequests"
                  placeholder="Prayer Requests"
                  className="form-input min-h-24"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 rounded-full bg-amber-400 hover:bg-amber-300 text-black font-black py-4 transition shadow-[0_0_35px_rgba(251,191,36,0.25)] disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Complete Registration"}
                </button>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <FaCheckCircle className="text-5xl text-amber-300 mx-auto" />

              <h2 className="mt-5 text-3xl sm:text-5xl font-black">
                Registration Received
              </h2>

              <p className="mt-4 text-white/60 text-sm sm:text-base">
                Thank you for registering for The Cave Gathering 1.0.
              </p>

              <a
                href="https://chat.whatsapp.com/F7pQ7XDbZisAL5zO1n08h4?mode=gi_t"
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-4 text-black font-black hover:bg-green-400 transition"
              >
                <FaWhatsapp />
                Join WhatsApp Updates
              </a>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Register;