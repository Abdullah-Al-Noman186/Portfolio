"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
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
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[0.4em] font-semibold text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Featured Projects
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 leading-7">
            Real-world full stack applications built with modern architecture,
            clean UI systems and scalable backend logic.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl"
            >
              {/* glow overlay */}
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition duration-300" />

              {/* IMAGE */}
              <div className="relative overflow-hidden h-56">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800 text-gray-500">
                    Project Preview
                  </div>
                )}

                {/* badge */}
                {project.isUpcoming && (
                  <span className="absolute top-4 right-4 bg-purple-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                )}

                {/* overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>

              {/* CONTENT */}
              <div className="p-6 relative">

                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-sm hover:bg-cyan-500 hover:text-white transition"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* BUTTONS */}
                {!project.isUpcoming ? (
                  <div className="flex gap-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      className="flex-1 flex justify-center items-center gap-2 bg-cyan-500 hover:bg-cyan-400 transition rounded-lg py-3 font-semibold"
                    >
                      <FaExternalLinkAlt />
                      Live
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      className="flex-1 flex justify-center items-center gap-2 border border-white/10 hover:border-cyan-500 hover:text-cyan-400 transition rounded-lg py-3"
                    >
                      <FaGithub />
                      Code
                    </a>
                  </div>
                ) : (
                  <div className="text-center text-purple-400 font-semibold">
                    🚀 In Development
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}