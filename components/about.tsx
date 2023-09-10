"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";

export default function About() {
//   const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"

    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Mechanicall Engineering</span>, I worked in the field for almost 4.5years but inside there was a  
        passion for programming. I got involved in the IT field doing small chores in the mechanical field therefore quitting it for self-learning {" "}
        <span className="font-medium">frontend development followed by full-stack web development from past 1.5 years.</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, Express.js and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma and now finding familirarity with python. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">exploring new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">geo-politics and science stuff</span>.
        As a self-taught developer I know its difficult to make others trust on yourself but I am confident on my skills & have a strong passion in what I do and can be a valuable asset.
      </p>
    </motion.section>
  );
}
 