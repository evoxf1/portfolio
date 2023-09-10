import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PhotoGlider App",
    description:
      "A captivating front-end project, meticulously crafted with JS, CSS, and HTML, demonstrating the beauty of web development.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: corpcommentImg,
  },
  {
    title: "BlogApp",
    description:
      "A user-friendly blog application for effortless content creation and sharing, simplifying the art of online storytelling",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "FotoShoto",
    description:
      "An Instagram-inspired clone featuring Firebase storage, where you can share and explore captivating moments through stunning photos.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Irritating App for Resume",
    description:
      "Playfully delivers resumes with an intentionally cheeky and irritating twist, leaving a memorable impression.",
    tags: ["React", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Saurabh Gupta",
    description:
      "A fashion designer's portfolio, a fusion of creativity and style, showcasing stunning collections and artistic expression in clothing.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Random Password Generator",
    description:
      "Your reliable tool for creating secure and unique passwords, enhancing digital safety effortlessly and conveniently.",
    tags: ["JavaScript", "HTML", "CSS"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Amazon Clone",
    description:
      "A faithful recreation with registration, login, and integrated Stripe and PayPal payments for a true online shopping experience.",
    tags: [
      "React",
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tailwind",
      "Framer",
      "Paypal API",
      "MERN",
    ],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Reddit Clone - RADDIT",
    description:
      "A Reddit clone for sharing posts and engaging in discussions, providing a familiar platform for content sharing and interaction.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind", "MERN"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Framer Motion",
] as const;
