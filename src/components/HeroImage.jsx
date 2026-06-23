"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function HeroImage() {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -15;
    const rotateY = (x / rect.width - 0.5) * 15;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const reset = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div className="flex justify-center lg:justify-end">
      
      {/* OUTER GLOW RING */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        {/* Glow background */}
        <div className="absolute inset-0 bg-cyan-500/20 blur-[120px] rounded-full scale-110" />

        {/* Floating particles */}
        <div className="absolute -top-6 -left-6 w-3 h-3 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute bottom-10 -right-4 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />

        {/* MAIN CARD */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={reset}
          className="relative w-80 h-80 lg:w-[420px] lg:h-[420px] rounded-3xl transition-transform duration-200 ease-out"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Glass frame */}
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">

            {/* IMAGE */}
            <img
              src="/k.jpeg" // 👉 replace with your image
              alt="Profile"
              className="w-full h-full object-cover scale-110 hover:scale-115 transition duration-700"
            />

            {/* overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/60 via-transparent to-cyan-500/10" />

          </div>

          {/* CYAN RING BORDER */}
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-400/30 animate-pulse" />

        </div>
      </motion.div>
    </div>
  );
}