"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const navLinks = ["home", "about", "skills", "projects", "education", "contact"];

const socials = [
  { icon: FaGithub,   href: "https://github.com/Abdullah-Al-Noman186",                    label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/",   label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:nabdullahal273@gmail.com",                             label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden border-t border-white/5">

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/8 blur-[140px] rounded-full bottom-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/8 blur-[140px] rounded-full top-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Top */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-12 pb-12 border-b border-white/8"
        >
          {/* Brand */}
          <div>
            <a href="#home" className="inline-block text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
              Noman<span className="text-cyan-400">.</span>
            </a>
            <p className="text-gray-400 mt-4 leading-7 text-sm">
              Full-stack Developer building modern, scalable and high-performance
              web applications with clean UI and strong backend systems.
            </p>
            <div className="flex gap-3 mt-6">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-300 hover:scale-110"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm group"
                >
                  <span className="w-1 h-1 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400 transition-all duration-300" />
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:nabdullahal273@gmail.com"
                className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group text-sm"
              >
                <div className="w-9 h-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-cyan-500/10 group-hover:border-cyan-400/30 group-hover:text-cyan-400 transition-all">
                  <FaEnvelope size={14} />
                </div>
                nabdullahal273@gmail.com
              </a>

              <div className="mt-4 p-4 rounded-xl bg-white/5 border border-white/8">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-medium">Available for work</span>
                </div>
                <p className="text-slate-500 text-xs">Open to internships, freelance and full-stack roles.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 gap-4">
          <p className="text-gray-500 text-sm">
            © {year} Abdullah Al Noman. All rights reserved.
          </p>

          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <span>Built with</span>
            <FaHeart className="text-red-400 w-3 h-3" />
            <span>using</span>
            <SiNextdotjs className="text-white w-3.5 h-3.5" />
            <span className="text-white text-xs">Next.js</span>
            <span>&</span>
            <SiTailwindcss className="text-cyan-400 w-3.5 h-3.5" />
            <span className="text-cyan-400 text-xs">Tailwind</span>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-300"
          >
            <FaArrowUp size={12} />
            Back to top
          </motion.button>
        </div>
      </div>
    </footer>
  );
}