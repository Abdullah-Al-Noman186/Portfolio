"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { SiReact, SiNextdotjs, SiNodedotjs, SiMongodb } from "react-icons/si";
import { FaCode } from "react-icons/fa";

// const floatingBadges = [
//   { 
//     icon: SiReact, 
//     label: "React", 
//     color: "text-cyan-400", 
//     border: "border-cyan-400/30", 
//     bg: "bg-cyan-500/10", 
//     position: "top-4 -left-6 sm:-left-10", 
//     floatDelay: 0 
//   },
//   { 
//     icon: SiNextdotjs, 
//     label: "Next.js", 
//     color: "text-white", 
//     border: "border-white/20", 
//     bg: "bg-white/10", 
//     position: "bottom-20 -left-8 sm:-left-12", 
//     floatDelay: 0.8 
//   },
//   { 
//     icon: SiNodedotjs, 
//     label: "Node.js", 
//     color: "text-emerald-400", 
//     border: "border-emerald-400/30", 
//     bg: "bg-emerald-500/10", 
//     position: "top-10 -right-6 sm:-right-10", 
//     floatDelay: 0.4 
//   },
//   { 
//     icon: SiMongodb, 
//     label: "MongoDB", 
//     color: "text-green-400", 
//     border: "border-green-400/30", 
//     bg: "bg-green-500/10", 
//     position: "bottom-24 -right-8 sm:-right-12", 
//     floatDelay: 1.2 
//   },
// ];

export default function HeroImage() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
    const rotateY = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  return (
    <div className="flex justify-center items-center lg:justify-end py-6">
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        {/* Layered Gradient Glows */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-purple-500/20 to-cyan-500/20 blur-[130px] rounded-full scale-125 pointer-events-none" />

        {/* Animated Tech Badges with Continuous Floating */}
        {/* {floatingBadges.map(({ icon: Icon, label, color, border, bg, position, floatDelay }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -8, 0] 
            }}
            transition={{ 
              delay: 0.3 + i * 0.1,
              y: {
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: floatDelay
              }
            }}
            className={`absolute z-30 ${position} flex items-center gap-2 px-3 py-2 rounded-2xl border ${border} ${bg} backdrop-blur-xl shadow-2xl`}
          >
            <div className="p-1 rounded-lg bg-black/40">
              <Icon className={`w-4 h-4 ${color}`} />
            </div>
            <span className="text-xs font-semibold text-slate-200 tracking-wide">{label}</span>
          </motion.div>
        ))}

        {/* Main Glass/Terminal Frame Container */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          className="relative w-80 h-[360px] sm:w-[380px] sm:h-[420px] lg:w-[410px] lg:h-[450px] rounded-3xl transition-transform duration-300 ease-out"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Subtle Outer Animated Ring */}
          <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-indigo-500/30 via-cyan-400/30 to-purple-500/30 blur-sm opacity-75 animate-pulse" />

          {/* Main Card Shell */}
          <div className="relative w-full h-full rounded-3xl border border-white/10 bg-slate-900/80 backdrop-blur-2xl shadow-2xl overflow-hidden flex flex-col">
            
            {/* Top IDE Window Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-slate-950/70 border-b border-white/10 z-20">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 text-slate-400 text-[11px] font-mono">
                <FaCode className="text-indigo-400 text-xs" />
                <span>developer.tsx</span>
              </div>
              <div className="w-12" /> {/* Spacer */}
            </div>

            {/* Profile Image Area */}
            <div className="relative flex-1 overflow-hidden group">
              <img
                src="/noman.png"
                alt="Profile"
                className="w-full h-full object-cover object-top scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/40 via-transparent to-slate-950/40" />

              {/* Code Overlay Badge */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-indigo-300">
                <span className="text-purple-400">const</span> developer = <span className="text-emerald-400">&quot;Front-end&quot;</span>;
              </div>

              {/* Bottom Card Profile Info */}
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase font-mono tracking-widest text-indigo-400 font-semibold mb-1">
                    Front-end Developer | MERN Stack
                  </p>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Abdullah Al Noman
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Availability Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute -bottom-5 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 px-4 py-2 rounded-full border border-emerald-500/30 bg-slate-950/95 backdrop-blur-xl shadow-2xl whitespace-nowrap"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-200 tracking-wide">
              Available for Internships & Projects
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}