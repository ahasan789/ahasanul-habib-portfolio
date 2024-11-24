
"use client";
import React from 'react';

import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
// import { useSectionInView } from "@/lib/hooks";


const ResearchInterest = () => {
    // const { ref } = useSectionInView("ResearchInterest");
    return (

        <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Research Interest</SectionHeading>
      <ul>
                <li>Bioinformatics</li>
                <li>Machine Learning</li>
                <li>Image Processing </li>
                <li>Computer Vision</li>
                <li>NLP</li>
                <li>LLM</li>
                <li>Generative AI</li>
                

            </ul>

      
    </motion.section>
    )
};

export default ResearchInterest;