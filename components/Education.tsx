
"use client";
import Image from "next/image";
import React from 'react';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";


const Education = () => {
    const { ref } = useSectionInView("Education");
    return (

        <motion.section
              ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="education"
        >
            <SectionHeading>Education </SectionHeading>
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
                    <li>Green University of Bangladesh
                        (Purbachal American City, Kanchon 1460)
                        Program: Bachelor of Science in Computer Science & Engineering
                        Major: Machine Learning
                        Semester: 8th(Last Semester)
                        CGPA: 3.14 / 4.00
                        Thesis: Identifying Chromosomes Using Machine Learning Algorithms </li>
                    <li>Saidpur Govt. Science College
                        (Nilphamari, Bangladesh)
                        Higher Secondary School Certificate(HSC)
                        Group: Science
                        GPA: 5.00 / 5.00 (All A+ With Scholarship)  </li>

                    <li>Saidpur Govt. Science College
                        (Nilphamari, Bangladesh)
                        Group: Science
                        Secondary School Certificate(SSC)
                        GPA: 5.00 / 5.00 (All A+ With Scholarship</li>

                </ul>
            </div>
        </motion.section>
    )
};

export default Education;




