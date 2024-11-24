
"use client";
import Image from "next/image";
import React from 'react';
import achivmentImg from "../public/achivments.jpg";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


const ExtraCaricular = () => {
  const { ref } = useSectionInView("ExtraCaricular");
    return (

        <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Extra Caricular </SectionHeading>
      <div className='flex gap-10'>
      {/* <div>
        <Image
              src={achivmentImg}
              alt="Habib ahivment"
              width="400"
              height="600"
              quality="95"
              priority={true}
              className="h-200 w-400 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
      </div> */}
      <ul className='text-left list-disc'>
                <li>President, Green University 
                Club for Languages(GUCL)</li>
                <li>Member, Robotics Club of 
                Green University </li>

            </ul>
      </div>
    </motion.section>
    )
};

export default ExtraCaricular;