"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      {/* 🌌 Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>

            {/* Badge */}
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 text-sm font-semibold"
            >
              Full Stack Developer
            </motion.span>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight"
            >
              Hi, I'm{" "}
              <span className="block text-cyan-400">
                Abdullah Al Noman
              </span>
            </motion.h1>

            {/* Sub heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-2xl text-gray-300 font-semibold"
            >
              Building Modern & Scalable Web Applications
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-gray-400 text-lg leading-8 max-w-2xl"
            >
              Full Stack Developer specializing in React, Next.js, Node.js,
              Express.js and MongoDB. I build fast, scalable and beautiful
              web applications with modern UX, clean architecture and AI-assisted workflows.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              {/* Primary */}
              <a
                href="#projects"
                className="group relative bg-cyan-500 hover:bg-cyan-400 transition px-7 py-4 rounded-xl font-semibold overflow-hidden"
              >
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </a>

              {/* Secondary */}
              <a
                href="/resume.pdf"
                className="flex items-center gap-2 border border-cyan-500 hover:bg-cyan-500 transition px-7 py-4 rounded-xl font-semibold"
              >
                <HiOutlineDocumentDownload />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex gap-6 mt-10 text-2xl"
            >
              <a
                href="https://github.com/Abdullah-Al-Noman186"
                className="hover:text-cyan-400 transition hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/"
                className="hover:text-cyan-400 transition hover:scale-110"
              >
                <FaLinkedin />
              </a>

              <a
                href="#contact"
                className="hover:text-cyan-400 transition hover:scale-110 animate-bounce"
              >
                <FaArrowDown />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE */}
          <HeroImage />

        </div>
      </div>

      {/* ⬇ Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce">
        Scroll Down
      </div>
    </section>
  );
}