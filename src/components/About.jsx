"use client";

import { motion } from "framer-motion";
import {
  FaUser,
  FaCode,
  FaDatabase,
  FaServer,
  FaTools,
  FaRocket,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function About() {
  const facts = [
    { label: "Role", value: "Full Stack Developer", icon: FaUser },
    { label: "Frontend", value: "React • Next.js • Tailwind", icon: FaCode },
    { label: "Backend", value: "Node.js • Express.js", icon: FaServer },
    { label: "Database", value: "MongoDB • Mongoose", icon: FaDatabase },
    { label: "Auth", value: "BetterAuth", icon: FaTools },
    { label: "Projects", value: "Blood Donation • Library • Booking", icon: FaRocket },
  ];

  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML", "CSS", "Tailwind", "React", "Next.js", "JavaScript"],
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "Mongoose", "BetterAuth"],
    },
    {
      name: "Tools",
      skills: ["Git", "GitHub", "AI Development"],
    },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
            <span className="text-indigo-400 font-semibold text-sm tracking-[0.3em] uppercase">
              About Me
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Passionate <br className="sm:hidden" />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-4 text-lg leading-relaxed">
            Building modern, scalable web applications with clean code and
            exceptional user experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Left – Bio */}
          <motion.div variants={item} className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              Hi, I'm{" "}
              <span className="text-indigo-400 font-semibold">
                Abdullah Al Noman
              </span>
              , a passionate Full Stack Developer focused on building modern,
              scalable, and responsive web applications with clean code and
              exceptional user experiences.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I work with{" "}
              <span className="text-white font-medium">
                React, Next.js, JavaScript, Node.js, Express.js, MongoDB
              </span>{" "}
              to build full-stack applications, secure APIs, and modern UI systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I also use{" "}
              <span className="text-white font-medium">
                AI-assisted development
              </span>{" "}
              and modern workflows to improve performance, maintainability, and
              delivery speed.
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-300">Available for work</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-300">2+ projects shipped</span>
              </div>
            </div>
          </motion.div>

          {/* Right – Facts Card */}
          <motion.div
            variants={item}
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-white mb-6">Quick Facts</h3>
              <div className="space-y-4">
                {facts.map((fact, i) => {
                  const Icon = fact.icon;
                  return (
                    <motion.div
                      key={fact.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 border-b border-white/5 pb-3 last:border-0"
                    >
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0">
                        <Icon size={16} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-xs text-slate-500 uppercase tracking-wider">
                          {fact.label}
                        </p>
                        <p className="text-sm text-white font-medium truncate">
                          {fact.value}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills – Categorized */}
        
      </div>
    </section>
  );
}