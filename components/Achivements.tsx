
"use client";
import Image from "next/image";
import React from 'react';
import achivmentImg from "../public/achivments.jpg";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


const Achivements = () => {
  const { ref } = useSectionInView("Achievements");
    return (

        <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>Achivements </SectionHeading>
      <div className='flex gap-10'>
      <div>
        
        {/* <img className='w-[300px] h-[300px]' src= "achivmentImg"} alt=""  /> */}
        <Image
              src={achivmentImg}
              alt="Habib ahivment"
              width="400"
              height="600"
              // quality="95"
              // priority={true}
              className="h-200 w-400 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
      </div>
      <ul className='text-left'>
                <li>National First, Bangladesh Physics Olympiad, 2016</li>
                <li>Divisional First, Bangladesh 
                Physics Olympiad, 2016, 2015 </li>
                <li>NationalWinner,ScienceCarniv 
                al, 2015 </li>
                <li>Participant, Google Science 
                Fair, 2015</li>
                <li>Organizer ICPC WORLD FINAL 2022 </li>
                                

            </ul>
      </div>
    </motion.section>
    )
};

export default Achivements;