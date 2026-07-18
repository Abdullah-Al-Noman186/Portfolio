"use client";

import { motion } from "framer-motion";
import {
    FaGraduationCap,
    FaLaptopCode,
    FaCode,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiNextdotjs,
    SiExpress,
    SiMongodb,
    SiMongoose,
    SiJavascript,
} from "react-icons/si";
import { HiOutlineSparkles } from "react-icons/hi";

export default function Education() {
    const education = [
        {
            degree: "Bachelor of Science (B.Sc.) in Fisheries",
            institution: "Patuakhali Science And Technology University",
            year: "Level 2 • Semester 1",
            description:
                "Currently pursuing a Bachelor's degree while developing analytical, research, and problem-solving skills.",
            icon: FaGraduationCap,
            color: "from-emerald-400 to-cyan-400",
            bgColor: "bg-emerald-500/10",
            borderColor: "border-emerald-500/30",
            textColor: "text-emerald-400",
        },
        {
            degree: "Complete Full Stack Web Development Program",
            institution: "Programming Hero",
            year: "2026 (January) - Present",
            description:
                "Completed an intensive project-based curriculum covering modern full stack development. Built multiple real-world applications including a Blood Donation Platform, Library Management CRUD System, and Room Booking System using industry-standard technologies.",
            icon: FaLaptopCode,
            color: "from-violet-400 to-fuchsia-400",
            bgColor: "bg-violet-500/10",
            borderColor: "border-violet-500/30",
            textColor: "text-violet-400",
        },
    ];

    const techStack = [
        { name: "HTML", icon: null, color: "bg-orange-500/20 text-orange-300" },
        { name: "CSS", icon: null, color: "bg-blue-500/20 text-blue-300" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "bg-cyan-500/20 text-cyan-300" },
        { name: "JavaScript", icon: SiJavascript, color: "bg-yellow-500/20 text-yellow-300" },
        { name: "React", icon: FaReact, color: "bg-sky-500/20 text-sky-300" },
        { name: "Next.js", icon: SiNextdotjs, color: "bg-white/10 text-white" },
        { name: "Node.js", icon: FaNodeJs, color: "bg-green-500/20 text-green-300" },
        { name: "Express.js", icon: SiExpress, color: "bg-gray-500/20 text-gray-300" },
        { name: "MongoDB", icon: SiMongodb, color: "bg-green-600/20 text-green-300" },
        { name: "Mongoose", icon: SiMongoose, color: "bg-red-500/20 text-red-300" },
        { name: "BetterAuth", icon: null, color: "bg-purple-500/20 text-purple-300" },
        { name: "Git", icon: FaGitAlt, color: "bg-orange-600/20 text-orange-300" },
        { name: "GitHub", icon: null, color: "bg-gray-400/10 text-gray-300" },
        { name: "AI-Assisted Coding", icon: HiOutlineSparkles, color: "bg-indigo-500/20 text-indigo-300" },
        { name: "Responsive Design", icon: null, color: "bg-teal-500/20 text-teal-300" },
        { name: "UI/UX Design", icon: null, color: "bg-pink-500/20 text-pink-300" },
    ];

    return (
        <section id="education" className="relative py-28 overflow-hidden bg-slate-950">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[300px] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-medium tracking-wide uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                        Education
                    </span>
                    <h2 className="text-4xl md:text-6xl font-bold mt-6 bg-gradient-to-r from-indigo-200 via-white to-purple-200 bg-clip-text text-transparent leading-tight">
                        Education & <br className="sm:hidden" />
                        Professional Learning
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-lg">
                        My academic background combined with continuous learning in
                        modern full stack development and AI-assisted engineering.
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500/50 via-purple-500/50 to-transparent hidden md:block" />

                    {education.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index === 0 ? -40 : 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                viewport={{ once: true }}
                                className={`relative flex flex-col md:flex-row gap-6 md:gap-8 mb-12 last:mb-0 ${index === 0 ? "md:pr-12" : "md:pl-12"
                                    }`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-7 md:left-0 top-6 -translate-x-1/2 hidden md:flex">
                                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 ring-4 ring-indigo-500/20" />
                                </div>

                                {/* Mobile Dot */}
                                <div className="flex md:hidden items-center gap-4 mb-2">
                                    <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 shadow-lg shadow-indigo-500/30 ring-4 ring-indigo-500/20 flex-shrink-0" />
                                    <span className="text-xs text-gray-500 font-medium tracking-wider uppercase">
                                        {index === 0 ? "Current" : "Ongoing"}
                                    </span>
                                </div>

                                {/* Card */}
                                <motion.div
                                    whileHover={{
                                        y: -4,
                                        transition: { duration: 0.2 },
                                    }}
                                    className={`flex-1 ml-14 md:ml-0 rounded-2xl p-6 md:p-8 border transition-all duration-300 ${item.borderColor
                                        } ${item.bgColor} backdrop-blur-sm bg-slate-900/80 hover:shadow-2xl hover:shadow-indigo-500/5`}
                                >
                                    <div className="flex flex-col md:flex-row gap-5 md:gap-6">
                                        {/* Icon Badge */}
                                        <div
                                            className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-indigo-500/20`}
                                        >
                                            <Icon size={26} className="text-white" />
                                        </div>

                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                                                <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">
                                                    {item.degree}
                                                </h3>
                                                <span className={`text-xs font-medium px-3 py-1 rounded-full ${item.bgColor} ${item.textColor} border ${item.borderColor} whitespace-nowrap self-start sm:self-center`}>
                                                    {item.year}
                                                </span>
                                            </div>

                                            <p className={`${item.textColor} font-medium mt-1`}>
                                                {item.institution}
                                            </p>

                                            <p className="text-gray-400 leading-relaxed mt-4">
                                                {item.description}
                                            </p>

                                            {/* Tech tags for the second item */}
                                            {index === 1 && (
                                                <div className="flex flex-wrap gap-2 mt-4">
                                                    {["React", "Next.js", "Node.js", "MongoDB", "Tailwind CSS"].map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Tech Stack - Glassmorphism Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-20 max-w-5xl mx-auto"
                >
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                            Core Technologies
                        </h3>
                        <p className="text-gray-400 mt-2">
                            Tools and technologies I work with daily
                        </p>
                    </div>

                    <div className="relative p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

                        <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {techStack.map((tech) => {
                                const IconComponent = tech.icon;
                                return (
                                    <motion.div
                                        key={tech.name}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        transition={{ duration: 0.2 }}
                                        className={`flex items-center gap-2 px-4 py-3 rounded-xl ${tech.color} border border-white/5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10`}
                                    >
                                        {IconComponent && (
                                            <IconComponent size={16} className="flex-shrink-0" />
                                        )}
                                        <span className="text-sm font-medium truncate">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}