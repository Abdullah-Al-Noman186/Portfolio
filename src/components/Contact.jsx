"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPaperPlane, FaBriefcase, FaCode, FaHandshake, FaPhone } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const openFor = [
  { icon: FaBriefcase, label: "Internship" },
  { icon: FaCode, label: "Freelance Projects" },
  { icon: FaHandshake, label: "Full-Stack Roles" },
];

const socials = [
  { icon: FaGithub, label: "GitHub", sub: "Abdullah-Al-Noman186", href: "https://github.com/Abdullah-Al-Noman186", color: "hover:border-white/40 hover:text-white" },
  { icon: FaLinkedin, label: "LinkedIn", sub: "abdullah-al-noman", href: "https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/", color: "hover:border-blue-400 hover:text-blue-400" },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus(""), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus(""), 4000);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-slate-950 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
            <span className="text-indigo-400 font-semibold text-sm tracking-[0.3em] uppercase">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            {"Let's Build Something "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Amazing</span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-4 text-lg leading-relaxed">
            Open to internships, freelance projects, and full-stack roles. Reach out and start a conversation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-12"
        >
          <motion.div variants={item} className="lg:col-span-5 space-y-5">

            {/* Get in Touch */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7">
              <h3 className="text-base font-semibold text-slate-400 uppercase tracking-wider mb-6">Get in Touch</h3>
              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaEnvelope size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Email</p>
                    <a href="mailto:nabdullahal273@gmail.com" className="text-white font-medium hover:text-indigo-400 transition-colors">
                      nabdullahal273@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaPhone size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Phone</p>
                    <a href="tel:+8801850495118" className="text-white font-medium hover:text-indigo-400 transition-colors">
                      +880 1850495118
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                    <FaMapMarkerAlt size={17} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-0.5">Location</p>
                    <p className="text-white font-medium">Bangladesh</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Connect Online */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7">
              <h3 className="text-base font-semibold text-slate-400 uppercase tracking-wider mb-5">Connect Online</h3>
              <div className="space-y-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-white/5 ${social.color} transition-all duration-300 group`}
                    >
                      <Icon size={20} className="text-slate-400 group-hover:scale-110 transition-transform" />
                      <div className="flex-1 min-w-0">
                        <p className="text-white text-sm font-medium">{social.label}</p>
                        <p className="text-slate-500 text-xs truncate">{social.sub}</p>
                      </div>
                      <HiOutlineArrowTopRightOnSquare size={14} className="text-slate-600 group-hover:text-current transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Open For */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-7">
              <h3 className="text-base font-semibold text-slate-400 uppercase tracking-wider mb-5">Open For</h3>
              <div className="space-y-3">
                {openFor.map((o) => {
                  const Icon = o.icon;
                  return (
                    <div key={o.label} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="text-slate-300 text-sm font-medium">{o.label}</span>
                      <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                  );
                })}
              </div>
            </div>

          </motion.div>

          {/* Form */}
          <motion.div variants={item} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 space-y-5 h-full"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">Send a Message</h3>
                <p className="text-slate-400 text-sm mt-1">I respond within 24 hours.</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-400 focus:outline-none focus:bg-slate-900/80 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-400 focus:outline-none focus:bg-slate-900/80 transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                <textarea
                  rows={6}
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-slate-900/60 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:border-indigo-400 focus:outline-none focus:bg-slate-900/80 resize-none transition-all duration-300"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={status === "sending"}
                className="relative w-full overflow-hidden group bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70"
              >
                <span className="relative z-10">{status === "sending" ? "Sending..." : "Send Message"}</span>
                {status !== "sending" && (
                  <FaPaperPlane className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={15} />
                )}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-emerald-400 text-sm font-medium bg-emerald-500/10 border border-emerald-500/20 rounded-xl py-3"
                >
                  Message sent! I will get back to you soon.
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-red-400 text-sm font-medium bg-red-500/10 border border-red-500/20 rounded-xl py-3"
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}