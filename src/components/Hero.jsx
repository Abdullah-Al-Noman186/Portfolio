"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { HiOutlineArrowDown } from "react-icons/hi2";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";
import HeroImage from "./HeroImage";

const techStack = [
  { icon: SiReact,     label: "React",   color: "text-cyan-400" },
  { icon: SiNextdotjs, label: "Next.js", color: "text-white" },
  { icon: SiNodedotjs, label: "Node.js", color: "text-green-400" },
  { icon: SiExpress,   label: "Express", color: "text-gray-300" },
  { icon: SiMongodb,   label: "MongoDB", color: "text-emerald-400" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-slate-950 text-white flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full top-[-100px] left-[-100px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10 pt-28 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 w-fit px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-cyan-300 text-sm font-semibold">Available for work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight"
            >
              {"Hi, I am "}
              <span className="block text-cyan-400">Abdullah Al Noman</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 text-xl text-gray-300 font-semibold"
            >
              Building Modern and Scalable Web Applications
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-4 text-gray-400 text-base leading-7 max-w-xl"
            >
              Front-end Developer specializing in React, Next.js, Node.js and MongoDB.
              Fast, scalable apps with clean architecture and AI-assisted workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap gap-2 mt-6"
            >
              {techStack.map(({ icon: Icon, label, color }, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-medium text-gray-300"
                >
                  <Icon className={`w-3.5 h-3.5 ${color}`} />
                  {label}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a href="#projects" className="group relative bg-cyan-500 hover:bg-cyan-400 transition px-7 py-3.5 rounded-xl font-semibold overflow-hidden">
                <span className="relative z-10">View Projects</span>
                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition" />
              </a>

              <a href="/Resume.pdf" className="flex items-center gap-2 border border-cyan-500/50 hover:border-cyan-400 hover:bg-cyan-500/10 transition px-7 py-3.5 rounded-xl font-semibold text-gray-300 hover:text-white">
                <HiOutlineDocumentDownload className="w-5 h-5" />
                Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex items-center gap-4 mt-8"
            >
              <a href="https://github.com/Abdullah-Al-Noman186" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 transition text-sm font-medium text-gray-400">
                <FaGithub className="w-4 h-4" />
                GitHub
              </a>

              <a href="https://www.linkedin.com/in/abdullah-al-noman-14a2a73b6/" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 transition text-sm font-medium text-gray-400">
                <FaLinkedin className="w-4 h-4" />
                LinkedIn
              </a>

              <a href="#contact" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 transition text-sm font-medium text-gray-400">
                <HiOutlineArrowDown className="w-4 h-4 animate-bounce" />
                Contact
              </a>
            </motion.div>
          </div>

          <HeroImage />
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 text-xs">
        <HiOutlineArrowDown className="w-4 h-4 animate-bounce" />
        Scroll Down
      </div>
    </section>
  );
}
