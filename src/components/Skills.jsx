"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMongoose,
  SiOpenai,
} from "react-icons/si";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "HTML", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Mongoose", icon: SiMongoose, color: "#880000" },
      ],
    },
    {
      title: "Tools & AI",
      skills: [
        { name: "Git", icon: FaGitAlt, color: "#F05032" },
        { name: "GitHub", icon: FaGithub, color: "#ffffff" },
        { name: "BetterAuth", icon: SiNextdotjs, color: "#00D4FF" },
        { name: "AI Coding", icon: SiOpenai, color: "#10A37F" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] font-semibold text-sm">
            Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Technical Expertise
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto leading-7">
            I build scalable full-stack applications using modern technologies,
            clean architecture and AI-assisted development workflows.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid lg:grid-cols-3 gap-10"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-xl overflow-hidden"
            >
              {/* glow */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 hover:opacity-100 transition" />

              <h3 className="text-2xl font-bold text-center mb-10 text-cyan-400">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 gap-8">
                {category.skills.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.15 }}
                      className="flex flex-col items-center group"
                    >
                      {/* ICON CARD */}
                      <div
                        className="relative w-16 h-16 rounded-xl bg-slate-900/80 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                        style={{
                          boxShadow: `0 0 25px ${skill.color}33`,
                        }}
                      >
                        <Icon
                          size={34}
                          style={{ color: skill.color }}
                          className="transition-transform group-hover:rotate-12"
                        />
                      </div>

                      <span className="mt-3 text-sm text-gray-300 group-hover:text-white transition">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}