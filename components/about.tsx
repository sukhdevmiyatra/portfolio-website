"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Commerce</span>, I decided to pursue my
        passion for programming. I learned{" "}
        <span className="font-medium">full-stack web development and data analytics</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React and Node.js
        </span>
        . I am also familiar with Python and Data Analysis. I am always looking to
        learn new skills. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, reading books, writing blogs, and watching TV Shows. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am interested
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning Data Science.
      </p>
    </motion.section>
  );
}
