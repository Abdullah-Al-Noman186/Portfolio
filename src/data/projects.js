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
    detail: {
      techStack: ["Next.js", "React", "Node.js", "Express.js", "MongoDB", "Firebase", "Tailwind CSS", "Stripe", "JWT", "BetterAuth"],
      fullDescription:
        "Blood Link is a full stack MERN blood donation platform that connects blood donors with recipients in need. It supports donor registration and profile management, donation request lifecycle management, and role-based dashboards for donors, volunteers, and admins. Secure authentication is implemented using BetterAuth combined with JWT-protected REST API routes, and Stripe is integrated for a community funding/donation system.",
      challenges: [
        "Implementing role-based access control across three user types (donor, volunteer, admin) with different dashboard views and permissions.",
        "Integrating BetterAuth with JWT HTTP-only cookies to maintain secure, stateless sessions across the full stack.",
        "Building the Stripe funding flow with proper backend webhook handling and frontend payment confirmation states.",
      ],
      improvements: [
        "Add real-time notifications via WebSockets when a blood request matches a nearby donor.",
        "Introduce a geolocation-based donor search so recipients can find the closest available match.",
        "Add a mobile app version using React Native for faster donor response times.",
      ],
    },
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
    detail: {
      techStack: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "JWT (HTTP-only cookies)"],
      fullDescription:
        "StudyNook is a full stack room booking platform where users can list their private study spaces and others can book them by the hour. The platform features real-time time-slot conflict detection on the backend that automatically prevents double-booking across overlapping reservations. Owners get a dedicated dashboard to manage their listings and bookings, while JWT authentication stored in HTTP-only cookies ensures secure, XSS-resistant sessions.",
      challenges: [
        "Building a reliable conflict detection system that correctly identifies overlapping time slots across concurrent booking requests.",
        "Designing the owner dashboard to display real-time booking status and availability without page refreshes.",
        "Storing JWT tokens in HTTP-only cookies correctly across the Next.js frontend and Express backend during SSR requests.",
      ],
      improvements: [
        "Add a real-time availability calendar view using a drag-to-select UI for more intuitive booking.",
        "Introduce Stripe payments so users can pay for bookings directly on the platform.",
        "Add email/SMS confirmation and reminders for upcoming bookings using a notification service.",
      ],
    },
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
    detail: {
      techStack: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "Tailwind CSS", "Stripe", "JWT"],
      fullDescription:
        "LearnHub is a full stack online learning platform featuring course browsing, search, and filtering by category and price. Students can enroll in courses and track progress through a personalized dashboard, while instructors get a separate dashboard to create and manage their courses. Stripe handles secure payment processing for course enrollment, and JWT authentication is stored in HTTP-only cookies for security.",
      challenges: [
        "Building two fully separate role-based dashboards (student and instructor) with distinct route guards and data access patterns.",
        "Implementing a flexible course filtering system that handles multiple simultaneous filters (category, price range, rating) efficiently.",
        "Managing TypeScript types across the full stack, especially for API responses and shared data models.",
      ],
      improvements: [
        "Add video streaming support for course lessons using a service like Cloudinary or AWS S3.",
        "Implement a progress tracking system with certificates issued on course completion.",
        "Add a review and rating system so students can leave feedback on courses.",
      ],
    },
  },
  {
    id: 4,
    title: "EVENTHIVE",
    badge: "Full Stack",
    badgeColor: "from-orange-500 to-yellow-500",
    description:
      "An event discovery and management platform. Browse thousands of events by category and city, register as an organizer, manage bookings and get community reviews.",
    image: "/eventhive.png",
    technologies: [
      { name: "Next.js",  icon: SiNextdotjs,  color: "#ffffff" },
      { name: "React",    icon: SiReact,      color: "#61DAFB" },
      { name: "Node.js",  icon: SiNodedotjs,  color: "#339933" },
      { name: "MongoDB",  icon: SiMongodb,    color: "#47A248" },
      { name: "Tailwind", icon: SiTailwindcss,color: "#38BDF8" },
      { name: "JWT",      icon: HiOutlineShieldCheck, color: "#F7DF1E" },
    ],
    liveLink:   "https://event-hive-azure.vercel.app/",
    githubLink: "https://github.com/Abdullah-Al-Noman186/event-hive",
    isUpcoming: false,
    detail: {
      techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "JWT"],
      fullDescription:
        "EventHive is an event discovery and management platform where users can browse, search, and book events across categories like Music, Tech, Sports, Food, Art, and Business. Organizers can register, create events, and manage attendee bookings through a dedicated dashboard. The platform features category-based filtering, city-based search, attendee reviews, and a newsletter subscription system.",
      challenges: [
        "Designing a scalable event schema that supports multiple categories, cities, and organizer profiles simultaneously.",
        "Building a one-click booking flow that handles seat availability and prevents overbooking under concurrent requests.",
        "Creating a clean, responsive landing page that showcases events dynamically while maintaining fast load times.",
      ],
      improvements: [
        "Add map-based event discovery so users can find events near their current location.",
        "Integrate payment processing for paid events with ticket generation and QR code check-in.",
        "Add push notifications and email reminders for upcoming booked events.",
      ],
    },
  },
  {
    id: 5,
    title: "SKILLSPHERE",
    badge: "Full Stack",
    badgeColor: "from-green-500 to-teal-500",
    description:
      "An online learning platform with 500+ courses, expert instructors, trending course rankings, and a personalized student profile dashboard.",
    image: "/skillsphere.png",
    technologies: [
      { name: "Next.js",  icon: SiNextdotjs,  color: "#ffffff" },
      { name: "React",    icon: SiReact,      color: "#61DAFB" },
      { name: "Node.js",  icon: SiNodedotjs,  color: "#339933" },
      { name: "MongoDB",  icon: SiMongodb,    color: "#47A248" },
      { name: "Tailwind", icon: SiTailwindcss,color: "#38BDF8" },
      { name: "JWT",      icon: HiOutlineShieldCheck, color: "#F7DF1E" },
    ],
    liveLink:   "https://skillsphere-eight-gamma.vercel.app/",
    githubLink: "https://github.com/Abdullah-Al-Noman186/skillsphere",
    isUpcoming: false,
    detail: {
      techStack: ["Next.js", "React", "Node.js", "MongoDB", "Tailwind CSS", "DaisyUI", "JWT"],
      fullDescription:
        "SkillSphere is an online learning platform offering 500+ courses across Development, Design, Marketing, and Data Science categories. Students can browse trending courses, view instructor profiles, enroll in courses, and track their learning through a personalized profile dashboard. The platform features a hero carousel, instructor listings, trending course rankings, and a full authentication system.",
      challenges: [
        "Building a smooth hero carousel with auto-play and manual navigation that performs well across all screen sizes.",
        "Designing a trending course ranking algorithm that factors in student growth rate, ratings, and enrollment numbers.",
        "Managing the instructor-course relationship in MongoDB so that each instructor's courses and student counts stay in sync.",
      ],
      improvements: [
        "Add video lesson streaming with progress tracking so students can resume where they left off.",
        "Implement a course completion certificate system with shareable public verification links.",
        "Add a peer discussion forum under each course for community-driven learning support.",
      ],
    },
  },
];