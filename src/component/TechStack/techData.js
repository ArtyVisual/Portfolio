import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiPhp,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiMysql,
  SiRedis,
  SiPostman,
  SiReactquery,
  SiVercel,
  SiRailway,
  SiCloudflare,
  SiNetlify,
  SiShadcnui,
  SiFramer,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

import {
  Monitor,
  Server,
  Database,
  Wrench,
  Palette,
  Cloud,
} from "lucide-react";

export const techSections = [
  {
    title: "Frontend",
    iconHeading: Monitor,
    subtitle: "Building responsive and interactive user interfaces.",
    techs: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },

  {
    title: "Backend",
    iconHeading: Server,
    subtitle: "Developing secure and scalable APIs.",
    techs: [
      { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
      { name: "Express", icon: SiExpress, color: "#FFFFFF" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "REST API", icon: FaNodeJs, color: "#60A5FA" },
    ],
  },

  {
    title: "Database",
    iconHeading: Database,
    subtitle: "Managing data efficiently.",
    techs: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "Prisma", icon: SiPrisma, color: "#162846" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },

  {
    title: "Tools",
    iconHeading: Wrench,
    subtitle: "Improving workflow & productivity.",
    techs: [
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Github", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "React Query", icon: SiReactquery, color: "#FF4154" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
    ],
  },

  {
    title: "UI & Design",
    iconHeading: Palette,
    subtitle: "Creating beautiful interfaces.",
    techs: [
      { name: "Shadcn", icon: SiShadcnui, color: "#FFFFFF" },
      { name: "Framer", icon: SiFramer, color: "#0055FF" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },

  {
    title: "Deployment",
    iconHeading: Cloud,
    subtitle: "Deploying applications reliably.",
    techs: [
      { name: "Vercel", icon: SiVercel, color: "#FFFFFF" },
      { name: "Railway", icon: SiRailway, color: "#8B5CF6" },
      { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
      { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
    ],
  },
];