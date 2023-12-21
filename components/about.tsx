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
        passion for Technology. I learned{" "}
        <span className="font-medium">Content Writing, Full-stack web development and Data analytics</span>.{" "}
        <span className="italic">My favorite part </span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. {" "}       
        I am also familiar with Python and Data Analysis. I am always looking to
        learn new skills.
      </p>

      <p>
        <span className="italic">When I'm not working</span>, I enjoy playing
        video games, reading books, writing blogs, and watching TV Shows. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am interested
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning Data Science.
      </p>
    </motion.section>
  );
}
