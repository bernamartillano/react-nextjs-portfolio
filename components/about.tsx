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
        I hold a degree in Information Technology, specializing in Web
        Development, and bring over 6 years of experience as a Frontend
        Developer. My expertise lies in building user-focused, high-performance
        web applications using{" "}
        <span className="font-medium underline">
          {" "}
          Angular, JavaScript/TypeScript, HTML5, and CSS3/LESS/SCSS
        </span>
        . I’m also experienced with React and content management systems like{" "}
        <span className="font-medium underline"> WordPress </span> and{" "}
        <span className="font-medium underline"> Shopify </span>.
      </p>
      <p className="mb-3">
        I excel at{" "}
        <span className="italic">
          {" "}
          optimizing code, creating reusable components,{" "}
        </span>{" "}
        and{" "}
        <span className="italic">
          {" "}
          ensuring projects are delivered on time{" "}
        </span>{" "}
        while meeting client expectations.
      </p>
      <p className="mb-3">
        Passionate about <span className="italic"> continuous learning</span> ,
        I actively explore new technologies to stay ahead in this ever-evolving
        field.
      </p>
      <p className="mb-3">
        I’m available for freelance opportunities—let’s collaborate and bring
        your ideas to life!
      </p>
    </motion.section>
  );
}
