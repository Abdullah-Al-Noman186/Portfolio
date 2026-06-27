"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function Education() {
  const education = [
    {
      degree: "Bachelor of Science (B.Sc.) in Fisheries",
      institution: "Patuakhali Science And Technology University",
      year: "Level 2 • Semester 1",
      description:
        "Currently pursuing a Bachelor's degree while developing analytical, research, and problem-solving skills .",
      icon: FaGraduationCap,
    },
    {
      degree: "Complete Full Stack Web Development Program",
      institution: "Programming Hero",
      year: "2026(january) - Present",
      description:
        "Completed an intensive project-based curriculum covering modern full stack development. Built multiple real-world applications including a Blood Donation Platform, Library Management CRUD System, and Room Booking System using industry-standard technologies.",
      icon: FaLaptopCode,
    },
  ];

  return (
    <section id="education" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-16">
            <p className="text-cyan-400 uppercase tracking-[4px] font-semibold">
              Education
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-3">
              Education & Professional Learning
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5">
              My academic background combined with continuous learning in
              modern full stack development and AI-assisted engineering.
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">

            {education.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                  }}
                  viewport={{ once: true }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300"
                >
                  <div className="flex gap-6">

                    <div className="w-16 h-16 rounded-xl bg-cyan-500 flex items-center justify-center flex-shrink-0">
                      <Icon size={28} className="text-white" />
                    </div>

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.degree}
                      </h3>

                      <p className="text-cyan-400 mt-1">
                        {item.institution}
                      </p>

                      <p className="text-gray-500 text-sm mt-1">
                        {item.year}
                      </p>

                      <p className="text-gray-300 leading-8 mt-4">
                        {item.description}
                      </p>

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>

          {/* Core Technologies */}

          <div className="mt-16 flex flex-wrap justify-center gap-3">

            {[
              "HTML",
              "CSS",
              "Tailwind CSS",
              "JavaScript",
              
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Mongoose",
              "BetterAuth",
              "Git",
              "GitHub",
              "AI-Assisted Coding",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
              >
                {tech}
              </span>
            ))}

          </div>
        </motion.div>
      </div>
    </section>
  );
}