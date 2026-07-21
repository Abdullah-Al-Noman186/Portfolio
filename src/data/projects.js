// src/data/projects.js
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiExpress,
  SiTailwindcss, SiTypescript, SiStripe, SiFirebase, SiMongoose, SiJsonwebtokens,
} from "react-icons/si";
import { HiOutlineShieldCheck } from "react-icons/hi2";

export const projects = [
  {
    id: 1,
    title: "BLOOD LINK",
    badge: "Full Stack",
    badgeColor: "from-red-500 to-pink-500",
    description:
      "A MERN blood donation platform connecting donors with people in need. Features donor registration, request management, role-based dashboards and Stripe-powered funding.",
    image: "/image.png",
    technologies: [
      { name: "Next.js",  icon: SiNextdotjs,  color: "#ffffff" },
      { name: "React",    icon: SiReact,      color: "#61DAFB" },
      { name: "Node.js",  icon: SiNodedotjs,  color: "#339933" },
      { name: "Express",  icon: SiExpress,    color: "#ffffff" },
      { name: "MongoDB",  icon: SiMongodb,    color: "#47A248" },
      { name: "Firebase", icon: SiFirebase,   color: "#FFCA28" },
      { name: "Tailwind", icon: SiTailwindcss,color: "#38BDF8" },
      { name: "Stripe",   icon: SiStripe,     color: "#635BFF" },
    ],
    liveLink:   "https://blood-donation-client-delta.vercel.app/",
    githubLink: "https://github.com/Abdullah-Al-Noman186/blood-donation-client",
    isUpcoming: false,
  },
  {
    id: 2,
    title: "STUDYNOOK",
    badge: "Full Stack",
    badgeColor: "from-cyan-500 to-blue-500",
    description:
      "A room-booking platform where users can list and book private study rooms. Features real-time conflict detection, owner dashboards and JWT auth via HTTP-only cookies.",
    image: "/library.png",
    technologies: [
      { name: "Next.js",  icon: SiNextdotjs,  color: "#ffffff" },
      { name: "Node.js",  icon: SiNodedotjs,  color: "#339933" },
      { name: "Express",  icon: SiExpress,    color: "#ffffff" },
      { name: "MongoDB",  icon: SiMongodb,    color: "#47A248" },
      { name: "Mongoose", icon: SiMongoose,   color: "#880000" },
      { name: "Tailwind", icon: SiTailwindcss,color: "#38BDF8" },
      { name: "JWT",      icon: HiOutlineShieldCheck, color: "#F7DF1E" },
    ],
    liveLink:   "https://studynook-client-delta.vercel.app/",
    githubLink: "https://github.com/Abdullah-Al-Noman186/studynook-client",
    isUpcoming: false,
  },
  {
    id: 3,
    title: "LEARNHUB",
    badge: "Full Stack",
    badgeColor: "from-purple-500 to-indigo-500",
    description:
      "An online learning platform with course browsing, search, filtering and enrollment. Role-based dashboards for students and instructors with Stripe-powered payments.",
    image: "/Learnhub.png",
    technologies: [
      { name: "React",      icon: SiReact,      color: "#61DAFB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Node.js",    icon: SiNodedotjs,  color: "#339933" },
      { name: "Express",    icon: SiExpress,    color: "#ffffff" },
      { name: "MongoDB",    icon: SiMongodb,    color: "#47A248" },
      { name: "Mongoose",   icon: SiMongoose,   color: "#880000" },
      { name: "Tailwind",   icon: SiTailwindcss,color: "#38BDF8" },
    ],
    liveLink:   "https://learnhub-client-gray.vercel.app/",
    githubLink: "https://github.com/Abdullah-Al-Noman186/Learnhub-client",
    isUpcoming: false,
  },
];