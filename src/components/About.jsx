"use client";

import { motion } from "framer-motion";

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

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 bg-slate-950 text-white overflow-hidden"
    >
      {/* 🌌 Background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[400px] h-[400px] bg-blue-500/10 blur-[140px] rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          {/* HEADER */}
          <motion.div variants={item} className="text-center mb-16">
            <span className="text-cyan-400 font-semibold uppercase tracking-[0.3em] text-sm">
              About Me
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Passionate Full Stack Developer
            </h2>

            <div className="w-28 h-[3px] bg-cyan-400 mx-auto mt-6 rounded-full shadow-lg shadow-cyan-500/30" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-start">

            {/* LEFT CONTENT */}
            <motion.div variants={container} className="space-y-8">

              <motion.p
                variants={item}
                className="text-gray-300 text-lg leading-8"
              >
                Hi, I'm{" "}
                <span className="text-cyan-400 font-semibold">
                  Abdullah Al Noman
                </span>
                , a passionate Full Stack Developer focused on building modern,
                scalable and responsive web applications with clean code and
                exceptional user experiences.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-300 text-lg leading-8"
              >
                I work with{" "}
                <span className="text-white font-medium">
                  React, Next.js, JavaScript, Node.js, Express.js, MongoDB
                </span>{" "}
                to build full-stack applications, secure APIs and modern UI systems.
              </motion.p>

              <motion.p
                variants={item}
                className="text-gray-300 text-lg leading-8"
              >
                I also use{" "}
                <span className="text-white font-medium">
                  AI-assisted development
                </span>{" "}
                and modern workflows to improve performance, maintainability and delivery speed.
              </motion.p>

            </motion.div>

            {/* RIGHT CARD */}
            <motion.div
              variants={item}
              whileHover={{ scale: 1.02 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-3xl" />

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-xl">

                <h3 className="text-2xl font-bold text-cyan-400 mb-8">
                  Quick Facts
                </h3>

                <div className="space-y-5 text-sm">

                  {[
                    ["Role", "Full Stack Developer"],
                    ["Frontend", "React • Next.js • Tailwind"],
                    ["Backend", "Node.js • Express.js"],
                    ["Database", "MongoDB • Mongoose"],
                    ["Auth", "BetterAuth"],
                    ["Projects", "Blood Donation • Library • Booking"],
                  ].map(([label, value], i) => (
                    <motion.div
                      key={label}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex justify-between border-b border-white/10 pb-3"
                    >
                      <span className="text-gray-400">{label}</span>
                      <span className="font-semibold text-white text-right">
                        {value}
                      </span>
                    </motion.div>
                  ))}

                </div>
              </div>
            </motion.div>

          </div>

          {/* SKILLS */}
          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-3 mt-20"
          >
            {[
              "HTML",
              "CSS",
              "Tailwind",
              "React",
              "Next.js",
              "JavaScript",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
              "BetterAuth",
              "Git",
              "GitHub",
              "AI Development",
            ].map((skill) => (
              <motion.span
                key={skill}
                variants={item}
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-white transition"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}