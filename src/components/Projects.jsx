"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";
import {
  HiOutlineArrowTopRightOnSquare,
  HiOutlineXMark,
  HiOutlineCheckCircle,
  HiOutlineLightBulb,
  HiOutlineWrenchScrewdriver,
} from "react-icons/hi2";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function ProjectModal({ project, onClose }) {
  const { detail } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 bg-slate-900 shadow-2xl shadow-indigo-500/10"
        >
          {/* Header image */}
          <div className="relative h-52 overflow-hidden rounded-t-2xl">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-slate-800" />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            <span
              className={`absolute top-4 left-4 bg-gradient-to-r ${project.badgeColor} px-3 py-1 rounded-full text-xs font-semibold`}
            >
              {project.badge}
            </span>
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 flex items-center justify-center text-white transition-colors"
            >
              <HiOutlineXMark size={20} />
            </button>
            <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white tracking-wide">
              {project.title}
            </h2>
          </div>

          <div className="p-6 space-y-6">
            {/* Tech Stack */}
            {detail?.techStack && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  <HiOutlineWrenchScrewdriver size={16} /> Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {detail.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-slate-800 border border-white/10 text-slate-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {detail?.fullDescription && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-indigo-400 uppercase tracking-widest mb-3">
                  <HiOutlineCheckCircle size={16} /> About This Project
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {detail.fullDescription}
                </p>
              </div>
            )}

            {/* Challenges */}
            {detail?.challenges && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-purple-400 uppercase tracking-widest mb-3">
                  <HiOutlineWrenchScrewdriver size={16} /> Challenges Faced
                </h3>
                <ul className="space-y-2">
                  {detail.challenges.map((c, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                      <span className="mt-0.5 w-5 h-5 shrink-0 rounded-full bg-purple-500/20 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xs font-bold">
                        {i + 1}
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Future Improvements */}
            {detail?.improvements && (
              <div>
                <h3 className="flex items-center gap-2 text-sm font-semibold text-emerald-400 uppercase tracking-widest mb-3">
                  <HiOutlineLightBulb size={16} /> Future Improvements
                </h3>
                <ul className="space-y-2">
                  {detail.improvements.map((imp, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-400">
                      <span className="mt-1 w-1.5 h-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {imp}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Links */}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  <HiOutlineArrowTopRightOnSquare size={16} />
                  Live Demo
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-indigo-400 hover:text-indigo-400 text-slate-300 font-medium py-3 rounded-xl transition-all duration-300 text-sm"
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="projects"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full top-[-200px] left-[-200px]" />
        <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[140px] rounded-full bottom-[-150px] right-[-150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 z-10">
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
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mt-4 text-lg leading-relaxed">
            Real-world full stack applications built with modern architecture,
            clean UI systems, and scalable backend logic.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-shadow duration-300 flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-slate-800/50 text-slate-500">
                    Preview
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <span
                  className={`absolute top-3 left-3 bg-gradient-to-r ${project.badgeColor} px-3 py-1 rounded-full text-xs font-semibold`}
                >
                  {project.badge}
                </span>
                {project.isUpcoming && (
                  <span className="absolute top-3 right-3 bg-purple-600/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold">
                    Coming Soon
                  </span>
                )}
              </div>

              <div className="flex-1 flex flex-col p-6">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 tracking-wide">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mt-2 flex-1 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.slice(0, 5).map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <div
                        key={tech.name}
                        title={tech.name}
                        className="w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center"
                        style={{ boxShadow: `0 0 10px ${tech.color}22` }}
                      >
                        <Icon size={15} style={{ color: tech.color }} />
                      </div>
                    );
                  })}
                  {project.technologies?.length > 5 && (
                    <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-white/10 flex items-center justify-center text-xs text-slate-400">
                      +{project.technologies.length - 5}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-4 border-t border-white/10">
                  {!project.isUpcoming ? (
                    <div className="flex flex-col gap-2">
                      <div className="flex gap-3">
                        {/* <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-medium py-2.5 rounded-xl transition-all duration-300 text-sm"
                        >
                          <HiOutlineArrowTopRightOnSquare size={15} />
                          Live Demo
                        </a>
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:border-indigo-400 hover:text-indigo-400 text-slate-300 font-medium py-2.5 rounded-xl transition-all duration-300 text-sm"
                        >
                          <FaGithub size={14} />
                          Source
                        </a> */}
                      </div>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full flex items-center justify-center gap-2 border border-indigo-500/40 hover:border-indigo-400 hover:bg-indigo-500/10 text-indigo-400 font-medium py-2.5 rounded-xl transition-all duration-300 text-sm"
                      >
                        View Details
                      </button>
                    </div>
                  ) : (
                    <div className="text-center text-purple-400 font-medium text-sm py-1">
                      In Development
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}