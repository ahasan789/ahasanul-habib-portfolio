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
                Dedicated and innovative Computer Science and Engineering student specializing in Machine Learning with a focus on Bioinformatics. Proficient in Python, C, and C++, with hands-on experience in image processing, computer vision, and NLP,LLM, Generative AI,. Seeking a challenging position at a leading tech company to leverage my skills and contribute to groundbreaking advancements in AI and bioinformatics
      </p>

      <p>
        
        Computer Science & Engineering, Final Year Student
        Machine Learning Intern, Cognifyz Technologies(Remote Work)
        Major: Machine Learning
        Thesis: Identifying of Chromosomes Using Deep Learning Algorithms
        TOEFL Score: 85
      </p>
    </motion.section>
  );
}
