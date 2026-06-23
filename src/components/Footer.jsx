"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-950 text-white pt-20 pb-10 overflow-hidden">

      {/* 🌌 Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[140px] rounded-full bottom-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-blue-500/10 blur-[140px] rounded-full top-[-100px] right-[-100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-10 border-b border-white/10 pb-12"
        >

          {/* BRAND */}
          <div>
            <h2 className="text-2xl font-bold">
             Noman<span className="text-cyan-400">.</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              Full Stack Developer building modern, scalable and high-performance
              web applications with clean UI and strong backend systems.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3 text-gray-400">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="hover:text-cyan-400 transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400">
              Get in Touch
            </h3>

            <p className="text-gray-400 flex items-center gap-2">
              <FaEnvelope className="text-cyan-400" />
              nabdullahal273@gmail.com
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4 mt-6 text-xl">
              <a
                href="https://github.com/Abdullah-Al-Noman186"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-cyan-500 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-cyan-500 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

        </motion.div>

        {/* BOTTOM SECTION */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-10 text-gray-500 text-sm">

          <p>
            © {year} Abdullah Al Noman. All rights reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Built with ❤️ using Next.js & Tailwind CSS
          </p>

          {/* BACK TO TOP */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="mt-4 md:mt-0 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            <FaArrowUp />
            Top
          </motion.button>

        </div>

      </div>
    </footer>
  );
}