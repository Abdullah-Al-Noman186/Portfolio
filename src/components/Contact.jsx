"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setStatus(""), 3000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] font-semibold text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            I'm open to internships, freelance projects and full-stack roles.
            Feel free to reach out anytime.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-2 gap-12"
        >

          {/* LEFT SIDE */}
          <motion.div
            variants={item}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-8 text-cyan-400">
              Contact Information
            </h3>

            {/* EMAIL */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="font-semibold">nabdullahal273@gmail.com</p>
              </div>
            </motion.div>

            {/* LOCATION */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <FaMapMarkerAlt />
              </div>
              <div>
                <p className="text-gray-400 text-sm">Location</p>
                <p className="font-semibold">Bangladesh</p>
              </div>
            </motion.div>

            {/* SOCIALS */}
            <div className="flex gap-5 mb-10">
              <a
                href="https://github.com/Abdullah-Al-Noman186"
                className="w-12 h-12 rounded-lg bg-white/5 hover:bg-cyan-500 transition flex items-center justify-center hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/"
                className="w-12 h-12 rounded-lg bg-white/5 hover:bg-cyan-500 transition flex items-center justify-center hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>

            {/* STATUS BOX */}
            <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 p-5">
              <p className="text-cyan-400 font-semibold">Available for</p>
              <p className="text-gray-300 mt-2">✔ Internship</p>
              <p className="text-gray-300">✔ Freelance Projects</p>
              <p className="text-gray-300">✔ Full Stack Roles</p>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            variants={item}
            onSubmit={handleSubmit}
            className="relative rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 shadow-xl space-y-6"
          >
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Send Message
            </h3>

            {/* NAME */}
            <div>
              <label className="block mb-2 text-gray-300">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block mb-2 text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none transition"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 text-gray-300">Message</label>
              <textarea
                rows={6}
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-500 focus:outline-none resize-none transition"
              />
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-cyan-500 hover:bg-cyan-400 transition py-4 rounded-xl font-semibold"
            >
              {status === "sending"
                ? "Sending..."
                : "Send Message"}
            </motion.button>

            {/* SUCCESS */}
            {status === "success" && (
              <motion.p
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center text-green-400 font-semibold"
              >
                ✅ Message sent successfully!
              </motion.p>
            )}
          </motion.form>

        </motion.div>
      </div>
    </section>
  );
}