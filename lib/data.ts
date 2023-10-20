import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import amazon from "@/public/amazon.png";
import blog from "@/public/blog.png";
import dumb from "@/public/dumb.png";
import fotoshoto from "@/public/fotoshoto.png";
import photo from "@/public/photo.png";
import raddit from "@/public/raddit.png";
import rpg from "@/public/rpg.png";
import sg from "@/public/sg.png";
import thread from "@/public/thread.png";
import sahilp from "@/public/sahilp.png";
import draw from "@/public/draw.png";

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
    title: "Web Development Learner- Self Taught",
    location: "India",
    description:
      "Continuously improving web development skills through self-study and online courses. Currently learning HTML, CSS, JavaScript, and ReactJS to build dynamic and interactive web applications.",
    icon: React.createElement(FaReact),
    date: "2022- Present",
  },
  {
    title: "Consultant- SHRI GANPATI ENTERPRISE",
    location: "Bijnor, IN",
    description:
      "Provided services relating to IT and Web Development along with Solar Energy conservation to clients.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2022",
  },
  {
    title: "Consultant cum Marketing Executive- ECOLEAF ENERGIES PVT. LTD.",
    location: "Delhi, IN",
    description:
      "Handling all solar and IT related tasks, rooftop solar installation, managing productivity and web issues, and quality assurance.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Junior Engineer- MODERN PREFAB SYSTEMS",
    location: "Gurgaon, IN",
    description:
      "Building fabricated shelters, Steel frames, manufacturing and erection of single, double and triple story Pre-Fabricated shelters. It manufactures custom-made structures based on the drawings and specifications given by the client",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
] as const;

export const projectsData = [
  {
    title: "Threads Clone",
    description:
      "A threads clone with login functionality with Oauth and much more.",
    tags: ["TypeScript", "Next.js", , "Vercel", "Tailwind"],
    url: "https://threadsbysahil.vercel.app/",
    imageUrl: thread,
  },

  {
    title: "Portfolio of Myself",
    description:
      "A captivating project, meticulously crafted with leading frameworks and libraries demonstrating the skills of myself.",
    tags: [
      "TypeScript",
      "Next.js",
      "Framer-Motion",
      "Vercel",
      "React-Email",
      "Toast",
      "Tailwind",
    ],
    url: "https://sahil-bhardwaj.vercel.app/",
    imageUrl: sahilp,
  },
  {
    title: "Drawit Scribble APP",
    description:
      "A scribble app that runs using websockets and can be used by multiple people at the same time. So go and play a tic-tac-toe match.",
    tags: ["TypeScript", "Next.js", , "Vercel", "Tailwind"],
    url: "https://dodrawit.vercel.app/",
    imageUrl: draw,
  },
  {
    title: "PhotoGlider App",
    description:
      "A captivating front-end project, meticulously crafted with JS, CSS, and HTML, demonstrating the beauty of web development.",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://photoglider.netlify.app/",
    imageUrl: photo,
  },
  {
    title: "BlogApp",
    description:
      "A user-friendly blog application for effortless content creation and sharing, simplifying the art of online storytelling",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://blog-by-sahil.netlify.app/",
    imageUrl: blog,
  },
  {
    title: "FotoShoto",
    description:
      "An Instagram-inspired clone featuring Firebase storage, where you can share and explore captivating moments through stunning photos.",
    tags: ["React", "Next.js", "Firebase", "Tailwind", "Framer"],
    url: "https://fotoshoto.netlify.app/",
    imageUrl: fotoshoto,
  },
  {
    title: "Really DUMB* for Resume",
    description:
      "Playfully delivers resumes with an intentionally cheeky and irritating twist, leaving a memorable impression.",
    tags: ["React", "Tailwind", "Framer"],
    url: "https://dumbportfolio.netlify.app/",
    imageUrl: dumb,
  },
  {
    title: "Saurabh Gupta",
    description:
      "A fashion designer's portfolio, a fusion of creativity and style, showcasing stunning collections and artistic expression in clothing.",
    tags: ["React", "Next.js", "Tailwind", "Framer"],
    url: "https://thesaurabhgupta.netlify.app/",
    imageUrl: sg,
  },
  {
    title: "Random Password Generator",
    description:
      "Your reliable tool for creating secure and unique passwords, enhancing digital safety effortlessly and conveniently.",
    tags: ["JavaScript", "HTML", "CSS"],
    url: "https://randompasswordfoxy.netlify.app/",
    imageUrl: rpg,
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
    url: "https://amazona.onrender.com/",
    imageUrl: amazon,
  },
  {
    title: "Reddit Clone - RADDIT",
    description:
      "A Reddit clone for sharing posts and engaging in discussions, providing a familiar platform for content sharing and interaction.",
    tags: ["React", "Next.js", "TypeScript", "Firebase", "Tailwind", "MERN"],
    url: "https://amazona.onrender.com/",
    imageUrl: raddit,
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
