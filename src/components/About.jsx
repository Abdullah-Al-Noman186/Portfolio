"use client";

import { motion } from "framer-motion";
import {
  FaUser, FaCode, FaDatabase, FaServer, FaTools, FaRocket,
} from "react-icons/fa";
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiJavascript, SiTypescript, SiGithub, SiFirebase,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { HiOutlineSparkles } from "react-icons/hi2";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const facts = [
  { label: "Role",     value: "Full Stack Developer",          icon: FaUser },
  { label: "Frontend", value: "React • Next.js • Tailwind",    icon: FaCode },
  { label: "Backend",  value: "Node.js • Express.js",          icon: FaServer },
  { label: "Database", value: "MongoDB • Mongoose",            icon: FaDatabase },
  { label: "Auth",     value: "BetterAuth",                    icon: FaTools },
  { label: "Projects", value: "Blood Donation • Library • Booking", icon: FaRocket },
];

const skillCategories = [
  {
    name: "Frontend",
    color: "text-cyan-400",
    border: "border-cyan-500/20",
    bg: "bg-cyan-500/10",
    skills: [
      { label: "React",      icon: SiReact,           color: "text-cyan-400" },
      { label: "Next.js",    icon: SiNextdotjs,        color: "text-white" },
      { label: "JavaScript", icon: SiJavascript,       color: "text-yellow-400" },
      { label: "TypeScript", icon: SiTypescript,       color: "text-blue-400" },
      { label: "Tailwind",   icon: SiTailwindcss,      color: "text-cyan-300" },
      { label: "Framer",     icon: TbBrandFramerMotion,color: "text-pink-400" },
    ],
  },
  {
    name: "Backend",
    color: "text-green-400",
    border: "border-green-500/20",
    bg: "bg-green-500/10",
    skills: [
      { label: "Node.js",  icon: SiNodedotjs, color: "text-green-400" },
      { label: "Express",  icon: SiExpress,   color: "text-gray-300" },
      { label: "MongoDB",  icon: SiMongodb,   color: "text-emerald-400" },
      { label: "Firebase", icon: SiFirebase,  color: "text-orange-400" },
    ],
  },
  {
    name: "Tools",
    color: "text-purple-400",
    border: "border-purple-500/20",
    bg: "bg-purple-500/10",
    skills: [
      { label: "GitHub",   icon: SiGithub,        color: "text-white" },
      { label: "AI Dev",   icon: HiOutlineSparkles, color: "text-purple-400" },
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
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
            Passionate{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Full Stack Developer
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-4 text-lg leading-relaxed">
            Building modern, scalable web applications with clean code and exceptional user experiences.
          </p>
        </motion.div>

        {/* Bio + Facts */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid lg:grid-cols-5 gap-12"
        >
          {/* Bio */}
          <motion.div variants={item} className="lg:col-span-3 space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              {"Hi, I'm "}
              <span className="text-indigo-400 font-semibold">Abdullah Al Noman</span>
              , a passionate Full Stack Developer focused on building modern, scalable, and responsive web applications with clean code and exceptional user experiences.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I work with{" "}
              <span className="text-white font-medium">React, Next.js, JavaScript, Node.js, Express.js, MongoDB</span>
              {" "}to build full-stack applications, secure APIs, and modern UI systems.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              I also use{" "}
              <span className="text-white font-medium">AI-assisted development</span>
              {" "}and modern workflows to improve performance, maintainability, and delivery speed.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-sm text-slate-300">Available for work</span>
              </div>
              <div className="flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-300">2+ projects shipped</span>
              </div>
            </div>
          </motion.div>

          {/* Facts Card */}
          <motion.div variants={item} className="lg:col-span-2">
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
                        <p className="text-xs text-slate-500 uppercase tracking-wider">{fact.label}</p>
                        <p className="text-sm text-white font-medium truncate">{fact.value}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Skills with icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="flex items-center gap-4 mb-10">
            <span className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400" />
            <span className="text-indigo-400 font-semibold text-sm tracking-[0.3em] uppercase">
              Tech Stack
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {skillCategories.map((cat, ci) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: ci * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6"
              >
                <div className={`flex items-center gap-2 mb-5`}>
                  <div className={`w-2 h-2 rounded-full ${cat.color.replace("text-", "bg-")}`} />
                  <h4 className={`text-sm font-semibold uppercase tracking-wider ${cat.color}`}>
                    {cat.name}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(({ label, icon: Icon, color }, i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: ci * 0.1 + i * 0.06 }}
                      viewport={{ once: true }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg ${cat.bg} border ${cat.border} text-xs font-medium text-slate-300`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${color}`} />
                      {label}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}