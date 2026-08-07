import type { IconType } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdDeveloperBoard, MdGrade, MdWhatshot } from "react-icons/md";

export type SocialLink = {
  label: string;
  href: string;
  icon: IconType;
  className: string;
};

export const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sihab-hasan",
    icon: FaGithub,
    className: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sihab-hasan",
    icon: FaLinkedinIn,
    className: "bg-accent text-accent-foreground hover:bg-accent/80",
  },
  {
    label: "X",
    href: "https://x.com/sihabxd",
    icon: FaXTwitter,
    className: "bg-muted text-foreground hover:bg-muted/80",
  },
  {
    label: "Email",
    href: "mailto:sihabsiuuu@gmail.com",
    icon: FaEnvelope,
    className: "bg-primary text-primary-foreground hover:bg-primary/80",
  },
] as const satisfies readonly SocialLink[];

export type ProfileStat = {
  label: string;
  icon: IconType;
};

export const stats = [
  { label: "1+ Year Experience", icon: MdGrade },
  { label: "5+ Projects", icon: MdDeveloperBoard },
  { label: "Available", icon: MdWhatshot },
] as const satisfies readonly ProfileStat[];

export const projects = [
  {
    title: "Portfolio",
    description: "Personal portfolio built with React, Tailwind, and GSAP.",
    href: "https://sihab-hasan.vercel.app/",
    status: "Active",
  },
  {
    title: "Workforce ERP",
    description: "A workforce management platform using Laravel and Next.js.",
    href: "https://github.com/sihab-hasan/workforce-erp",
    status: "Building",
  },
  {
    title: "Ticket Bro",
    description: "A full-stack ticketing application built with the MERN stack.",
    href: "https://github.com/sihab-hasan/ticket-bro",
    status: "Active",
  },
  {
    title: "Snake Arena",
    description: "A browser-based multiplayer-inspired snake game experience.",
    href: "https://snake-arena-two.vercel.app/",
    status: "Live",
  },
  {
    title: "MERN Authentication",
    description: "Reusable authentication flow with protected application routes.",
    href: "https://github.com/sihab-hasan/mern-authentication",
    status: "Active",
  },
] as const;

export const skills = [
  { label: "React", value: 88, widthClass: "w-[88%]", barClass: "bg-chart-1" },
  { label: "Next.js", value: 84, widthClass: "w-[84%]", barClass: "bg-chart-2" },
  { label: "JavaScript", value: 92, widthClass: "w-[92%]", barClass: "bg-chart-3" },
  { label: "TypeScript", value: 85, widthClass: "w-[85%]", barClass: "bg-chart-4" },
  { label: "Tailwind", value: 90, widthClass: "w-[90%]", barClass: "bg-chart-5" },
  { label: "Node.js", value: 82, widthClass: "w-[82%]", barClass: "bg-chart-1" },
  { label: "Laravel", value: 78, widthClass: "w-[78%]", barClass: "bg-chart-2" },
] as const;
