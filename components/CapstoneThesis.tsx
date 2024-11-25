
"use client";

import { useSectionInView } from "@/lib/hooks";
import React from 'react';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import capTheisis from "../public/cap-thesis.jpg";
import Image from "next/image";

const CapstoneThesis = () => {
    const { ref } = useSectionInView("CapstoneThesis");
    return (

        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="capstoneThesis"
        >
            <SectionHeading>Capstone Thesis </SectionHeading>
            <div className='flex justify-between gap-10'>
               
                <ul className='text-left list-disc text-justify'>
                    <li>Title: Identification of Human Chromosomes karyotyping Using Deep
                        Learning Algorithms.
                    </li>
                    <li>
                        Problem Statement: Our research automates human chromosome
                        karyotyping classification through deep learning, replacing manual, time consuming methods. By leveraging deep learning, we enhance accuracy and
                        streamline diagnosis, employing preprocessing and data augmentation for
                        image preparation. Our goal is to develop a robust model for accurate
                        chromosome identification and genetic disorder detection, potentially
                        transforming karyotype analysis. </li>



                </ul>

                <div>
                    <Image
                        src={capTheisis}
                        alt=""
                        width="600"
                        height="4000"
                        quality="95"
                        priority={true}
                        className="w-[4500px]  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
                    />
                </div>
            </div>
        </motion.section>
    )
};

export default CapstoneThesis;






