"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { HiOutlineCode, HiOutlineDatabase } from "react-icons/hi";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";

const floatingBadges = [
  { icon: SiReact,    label: "React",   color: "text-cyan-400",  border: "border-cyan-400/30",  bg: "bg-cyan-400/10",  top: "top-6",    left: "-left-14" },
  { icon: SiNextdotjs,label: "Next.js", color: "text-white",     border: "border-white/20",     bg: "bg-white/10",     top: "top-1/3",  left: "-left-16" },
  { icon: SiNodedotjs,label: "Node",    color: "text-green-400", border: "border-green-400/30", bg: "bg-green-400/10", top: "top-6",    right: "-right-14" },
  { icon: SiMongodb,  label: "Mongo",   color: "text-emerald-400",border:"border-emerald-400/30",bg:"bg-emerald-400/10",top: "top-1/3", right: "-right-16" },
];

export default function HeroImage() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top)  / rect.height - 0.5) * -15;
    const rotateY = ((e.clientX - rect.left) / rect.width  - 0.5) * 15;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div className="flex justify-center lg:justify-end">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-110" />

        {/* Floating tech badges */}
        {floatingBadges.map(({ icon: Icon, label, color, border, bg, ...pos }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + i * 0.15, type: "spring", stiffness: 200 }}
            style={pos}
            className={`absolute z-20 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border ${border} ${bg} backdrop-blur-md shadow-lg`}
          >
            <Icon className={`w-3.5 h-3.5 ${color}`} />
            <span className="text-[11px] font-semibold text-white/80">{label}</span>
          </motion.div>
        ))}

        {/* Floating particles */}
        <div className="absolute -top-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute bottom-10 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

        {/* MAIN CARD */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-3xl transition-transform duration-200 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glass frame */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
            <img
              src="/noman.png"
              alt="Profile"
              className="w-full h-full object-cover scale-110 hover:scale-115 transition duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-cyan-500/10" />
          </div>

          {/* Cyan ring border */}
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 animate-pulse" />

          {/* Bottom status badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-slate-900/90 backdrop-blur-md shadow-xl whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-medium text-white/80">Available for work</span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}