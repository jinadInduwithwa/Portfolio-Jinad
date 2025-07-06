import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const EXPERIENCE = [
  {
    title: "Undergraduate Software Engineer",
    job: "SLIIT, Sri Lanka",
    date: "2022 – Present",
    contents: [
      "Pursuing a BSc (Hons) in Software Engineering with a CGPA of 3.58 and multiple Dean's List awards.",
      "Developing strong skills in full-stack development, including modern web frameworks and backend systems.",
      "Completed real-world projects as part of coursework, including e-commerce platforms, portfolio apps, and RESTful API integration.",
      "Actively contributing to group projects, focusing on clean architecture, Git-based collaboration, and deployment workflows.",
    ],
  },
  {
    title: "ICT Diploma Trainee",
    job: "Vocational Training Authority (VTA), Sri Lanka",
    date: "2022 – 2023",
    contents: [
      "Completed a National Vocational Qualification (NVQ Level 5) Diploma in Information and Communication Technology.",
      "Built a solid practical foundation in computer systems, networking, and office automation tools.",
      "Gained exposure to essential development environments and learned fundamentals of IT infrastructure.",
    ],
  },
  {
    title: "Java Trainee Developer",
    job: "Institute of Java and Software Engineering (IJSE), Sri Lanka",
    date: "2018 – 2019",
    contents: [
      "Completed a rigorous software engineering training program with a strong focus on Java and OOP concepts.",
      "Built multiple Java-based applications and mini-projects including desktop systems using JavaFX and Swing.",
      "Acquired solid knowledge in core Java, data structures, algorithms, and software development methodologies.",
    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "2024 – Present",
    contents: [
      "Designing and building personal and client-side web applications using React, Next.js, and Node.js.",
      "Continuously learning and experimenting with new tools like Tailwind CSS, MongoDB, and Spring Boot.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "FoodyX - Food Ordering System",
    description:
      'A full-stack, microservices-based food ordering platform with real-time order tracking, driver allocation, delivery management, and secure payments. Built using Docker and Kubernetes for deployment scalability and service isolation.',
    image: "/projects/foodyx.png",
    link: "https://youtu.be/dAWgV8OYyrQ?si=ndPfNutanVJaj_Hq",
    technologies: ["Node.js", "Express", "MongoDB", "Docker", "Kubernetes"],
  },
  {
    title: "Lanka - Art Marketing Store",
    description:
      'An e-commerce platform for showcasing and selling art, featuring secure user authentication with JWT, data handling via PostgreSQL and Hibernate ORM, and a fully responsive React.js frontend.',
    image: "/projects/lanka-art.png",
    link: "https://github.com/jinadInduwithwa/lanka_art_marketing_store.git",
    technologies: ["Spring Boot", "PostgreSQL", "Hibernate", "React.js", "JWT"],
  },
  {
    title: "GeoFinder - Country Explorer",
    description:
      'A full-stack application for exploring countries using the REST Countries API. Includes JWT authentication, search, favorites management, and dynamic toast notifications for a smooth user experience.',
    image: "/projects/geo-finder.jpeg",
    link: "https://geo-finder-front-end-git-main-jinadinduwithwas-projects.vercel.app/",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    title: "Event Pro - Event Planning System",
    description:
      'A comprehensive event management system where users can plan events and manage services like photographers, menus, venues, and music groups. Features include JWT auth, customer workflows, and dynamic content management.',
    image: "/projects/event-pro.png",
    link: "https://github.com/jinadInduwithwa/Event-Pro.git",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    title: "Aurora Builders – Construction Booking Platform",
    description:
      "Aurora Builders is a modern, fully responsive web application built to simplify the construction project booking process. It features a dynamic UI using React and TypeScript, smooth animations with Framer Motion, responsive design via Tailwind CSS, and a real-time EmailJS-powered contact form.",
    image: "/projects/aurora-builders.png",
    link: "https://github.com/jinadInduwithwa/construction-connect-React.git",
    technologies: ["React", "TypeScript", "Framer Motion", "Tailwind CSS", "EmailJS"],
  },
  {
    title: "Eco Recycle - Waste Management System",
    description:
      'A MERN stack application built to streamline waste collection, employee task allocation, route planning, and request handling. Provides real-time updates and optimized scheduling for eco management operations.',
    image: "/projects/eco-recycle.png",
    link: "https://github.com/jinadInduwithwa/EcoRecycle-MERN.git",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT"],
  },
  {
    title: "Finance Management System",
    description:
      'A personal and administrative finance tracking system offering budgeting tools, goal setting, transaction history, and role-based user management — ideal for individual and team use cases.',
    image: "/projects/finance-tracker.jpeg",
    link: "https://github.com/jinadInduwithwa/Car-Rental-System.git",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    title: "Arch 64 - Fashion eCommerce App",
    description:
      'A visually appealing fashion store built with React.js, delivering a modern browsing experience and seamless shopping functionality with a responsive, mobile-friendly UI.',
    image: "/projects/arch64.jpeg",
    link: "https://github.com/jinadInduwithwa/Fashion-eCommerce-Web-Application-Using-MERN.git",
    technologies: ["React.js", "MongoDB", "Express", "Node.js", "Tailwind CSS"],
  },
] as const;



export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com",
  },
  {
    name: "Twitter",
    icon: RxTwitterLogo,
    link: "https://twitter.com",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;



export const FOOTER_DATA = [
  {
    title: "Community",
    data: [
      {
        name: "YouTube",
        icon: FaYoutube,
        link: "https://youtube.com",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://instagram.com",
      },
      {
        name: "Twitter",
        icon: RxTwitterLogo,
        link: "https://twitter.com",
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://linkedin.com",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become Sponsor",
        icon: null,
        link: "https://youtube.com",
      },
      {
        name: "Learning about me",
        icon: null,
        link: "https://example.com",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:contact@example.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Expriences",
    link: "#expriences",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Contact",
    link: "#contact",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/space-portfolio",
};
