import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

// Import icons for skills
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaAws,
  FaPython,
  FaWordpress,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiMysql,
  SiCplusplus,
  SiCsharp,
  SiDotnet,
  SiFlutter,
  SiFastapi,
  SiSupabase,
  SiShopify,
  SiReactquery,
  SiSequelize,
  SiSocketdotio,
  SiIbmcloud,
} from "react-icons/si";
import { MdManageAccounts } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";

export const SKILL_DATA = [
  {
    skill_name: "JavaScript",
    icon: FaJs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    icon: FaReact,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    icon: FaNodeJs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    icon: SiMongodb,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    icon: FaGitAlt,
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    icon: FaAws,
    width: 80,
    height: 80,
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
    icon: FaHtml5,
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    icon: FaCss3Alt,
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    icon: FaJs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    icon: FaReact,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js",
    icon: SiNextdotjs,
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    icon: FaNodeJs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    icon: SiExpress,
    width: 80,
    height: 80,
  },
  {
    skill_name: "C#",
    icon: SiCsharp,
    width: 80,
    height: 80,
  },
  {
    skill_name: ".NET",
    icon: SiDotnet,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    icon: FaPython,
    width: 80,
    height: 80,
  },
  {
    skill_name: "FastAPI",
    icon: SiFastapi,
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "MongoDB",
    icon: SiMongodb,
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    icon: SiMysql,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Firebase",
    icon: SiFirebase,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Supabase",
    icon: SiSupabase,
    width: 80,
    height: 80,
  },
  {
    skill_name: "AWS",
    icon: FaAws,
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Flutter",
    icon: SiFlutter,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    icon: TbBrandReactNative,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Git",
    icon: FaGitAlt,
    width: 80,
    height: 80,
  },
  {
    skill_name: "GitHub",
    icon: FaGithub,
    width: 80,
    height: 80,
  },
  {
    skill_name: "WordPress",
    icon: FaWordpress,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Shopify",
    icon: SiShopify,
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: "E-Commerce Platform with Recommendation Engine",
    description: "Developed a multi-vendor platform with ML-based product recommendations using matrix factorization. Integrated user ratings, real-time ordering, and secure auth. Improved engagement by 15% with smart recommendations.",
    technologies: ["Flutter", "Node.js", "Express.js", "Firebase", "Python (ML)"],
    link: "https://github.com/Hesham000/Canteen-Automation-System",
    category: "Full-Stack & ML",
  },
  {
    title: "Todo App with ML",
    description: "Created cross-platform todo app with sentiment-based task prioritization. Integrated offline access and productivity tracking. Used JWT for secure, personalized user sessions.",
    technologies: ["React Native", "Node.js", "MongoDB", "Python (NLP)"],
    link: "https://github.com/Hesham000/todo-react-native.git",
    category: "Mobile & ML",
  },
  {
    title: "Natours Tours App",
    description: "Developed RESTful APIs with filtering, sorting, and payment integration. Implemented secure authentication and geolocation features.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/Hesham000/Natours-APIs",
    category: "Backend API",
  },
  {
    title: "Fit Api",
    description: "A comprehensive fitness tracking application that analyzes before/after images to track fitness progress using computer vision and machine learning techniques.",
    technologies: ["Node.js", "MongoDB", "Python (ML)", "REST APIs"],
    link: "https://github.com/heshamali13",
    category: "https://github.com/Hesham000/Fit",
  },
  {
    title: "Inventory Management System",
    description: "Developed secure inventory/order management with JWT & RBAC. Integrated IBM Cloud for scalable backend performance.",
    technologies: ["Node.js", "Sequelize", "MySQL", "IBM Cloud"],
    link: "https://github.com/Hesham000/inventory-management-system",
    category: "Enterprise System",
  },
  {
    title: "ALEN Wood Work Website",
    description: "Developed and deployed a responsive portfolio site. Boosted client engagement by 40% post-launch.",
    technologies: ["WordPress"],
    link: "https://ae-kabha.com/",
    category: "WordPress",
  },
  {
    title: "Hustlers Mobile App",
    description: "Built backend APIs and admin dashboard for a dropshipping app. Enabled secure role-based operations and order management.",
    technologies: ["Node.js", "Express.js", "MongoDB", "Next.js"],
    link: "https://github.com/Hesham000/HustlersBackend",
    category: "Full-Stack",
  },
  {
    title: "Ecomsolution Website",
    description: "Created e-commerce consulting website with product catalog. Integrated contact forms, payment, and mobile-friendly design.",
    technologies: ["WordPress"],
    link: "https://ecomsolution.org/",
    category: "E-Commerce",
  },
  {
    title: "SMnerds",
    description: "Developed an SMnerds Digital Marketing Agency website with a modern design and a focus on user experience. The website features a clean layout, easy navigation, and a responsive design that works on all devices.",
    technologies: ["WordPress"],
    link: "https://mediumorchid-hamster-792819.hostingersite.com/",
    category: "E-Commerce",
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

// Contact information
export const CONTACT_INFO = {
  email: "Hesham12ali13@gmail.com",
  phone: "01154063086",
  location: "Egypt",
  availability: "Available for freelance work",
} as const;
