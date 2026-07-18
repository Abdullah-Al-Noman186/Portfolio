export const projects = [
  {
    id: 1,
    title: "BLOOD LINK",
    description:
      "BloodLink is a full-stack MERN blood donation platform that connects blood donors with people in need. It supports donor registration, donation request management, role-based dashboards (Donor, Volunteer, Admin), and a Stripe-powered funding system to support platform operations.",

    image: "/image.png",

    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase Authentication",
      "Tailwind",
      "JWT",
      "Stripe",


    ],

    liveLink: "https://blood-donation-client-delta.vercel.app/",

    githubLink: "https://github.com/Abdullah-Al-Noman186/blood-donation-client",

    isUpcoming: false,
  },

  {
    id: 2,

    title: "STUDYNOOK",

    description:
      "StudyNook is a full-stack web application where students and library users can list private study rooms they control and any registered user can browse, search, filter, and book those rooms for a specific date and time slot. The platform automatically prevents double-booking through real-time time-conflict detection, gives room owners full control over their own listings, and provides every user a personal dashboard to manage their bookings — all secured with JWT authentication stored in HTTP-only cookies.",

    image: "/library.png",

    technologies: [
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind",
    ],

    liveLink: "https://studynook-client-delta.vercel.app/",

    githubLink: "https://github.com/Abdullah-Al-Noman186/studynook-client",

    isUpcoming: false,
  },

  
  {
    id: 4,

    title: "LearnHub",

    description:
      "LearnHub is a full-stack MERN online learning platform that allows users to browse, search, and filter courses, view course details, and enroll in courses. It features a secure authentication system with JWT stored in HTTP-only cookies, role-based dashboards for students and instructors, and a Stripe-powered payment system for course enrollment.",

    image: "/Learnhub.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "Tailwind",
      "TypeScript",
    ],

    liveLink: "https://learnhub-client-gray.vercel.app/",

    githubLink: "https://github.com/Abdullah-Al-Noman186/Learnhub-client",

    isUpcoming: false,
  }

]