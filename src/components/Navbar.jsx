"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineRectangleGroup,
  HiOutlineAcademicCap,
  HiOutlinePaperAirplane,
} from "react-icons/hi2";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const navLinks = [
  { label: "Home",      icon: HiOutlineHome },
  { label: "About",     icon: HiOutlineUser },
  { label: "Skills",    icon: HiOutlineSparkles },
  { label: "Projects",  icon: HiOutlineRectangleGroup },
  { label: "Education", icon: HiOutlineAcademicCap },
  { label: "Contact",   icon: HiOutlinePaperAirplane },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      let current = "home";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08 } }),
  };

  return (
    <>
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-400 origin-left z-[60]"
      />

      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/70 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <motion.div whileHover={{ scale: 1.08 }}>
              <Link href="#home" className="text-2xl font-bold tracking-wide text-white">
                Noman<span className="text-cyan-400">.</span>
              </Link>
            </motion.div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(({ label, icon: Icon }, i) => {
                const id = label.toLowerCase();
                const isActive = active === id;
                return (
                  <motion.div key={label} custom={i} initial="hidden" animate="show" variants={linkVariants}>
                    <Link
                      href={`#${id}`}
                      className={`group relative flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? "text-cyan-400 bg-cyan-400/10"
                          : "text-gray-400 hover:text-cyan-300 hover:bg-white/5"
                      }`}
                    >
                      <Icon
                        className={`w-[15px] h-[15px] transition-transform duration-200 group-hover:-translate-y-0.5 ${
                          isActive ? "text-cyan-400" : "text-gray-500 group-hover:text-cyan-300"
                        }`}
                      />
                      <span>{label}</span>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavDot"
                          className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-cyan-400"
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Resume Button */}
            <motion.div whileHover={{ scale: 1.05 }} className="hidden md:flex">
              <a
                href="/resume.pdf"
                target="_blank"
                className="group relative inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition" />
                <span className="relative flex items-center gap-2">
                  <FiDownload />
                  Resume
                </span>
              </a>
            </motion.div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden rounded-lg p-2 text-white hover:bg-white/10 transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: -20, height: 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                className="md:hidden overflow-hidden"
              >
                <div className="mt-3 rounded-2xl border border-white/10 bg-slate-900/95 backdrop-blur-2xl p-6 shadow-2xl">
                  <div className="flex flex-col space-y-1">
                    {navLinks.map(({ label, icon: Icon }, i) => {
                      const id = label.toLowerCase();
                      const isActive = active === id;
                      return (
                        <motion.div
                          key={label}
                          initial={{ x: -15, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            href={`#${id}`}
                            onClick={() => setIsOpen(false)}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                              isActive
                                ? "bg-cyan-400/10 text-cyan-400"
                                : "text-gray-300 hover:bg-white/5 hover:text-cyan-300"
                            }`}
                          >
                            <Icon className={`w-5 h-5 ${isActive ? "text-cyan-400" : "text-gray-500"}`} />
                            <span className="text-base font-medium">{label}</span>
                            {isActive && (
                              <span className="ml-auto w-1.5 h-1.5 rounded-full bg-cyan-400" />
                            )}
                          </Link>
                        </motion.div>
                      );
                    })}

                    <div className="pt-3 mt-2 border-t border-white/10">
                      <motion.a
                        whileTap={{ scale: 0.95 }}
                        href="/resume.pdf"
                        target="_blank"
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3 font-semibold text-white hover:bg-cyan-400 transition"
                      >
                        <FiDownload />
                        Download Resume
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>
    </>
  );
}