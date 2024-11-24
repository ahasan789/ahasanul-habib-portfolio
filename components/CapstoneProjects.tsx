
"use client";
import Image from "next/image";
import React from 'react';
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";


const CapstoneProjects = () => {
    // const { ref } = useSectionInView("Contact");
    return (

        <motion.section
            //   ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>Capstone Project </SectionHeading>
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
                    <li>Machine Learning Project Title: Bank Marketing Effectiveness Prediction
                        using different machine Learning Models
                    </li>
                    <li>

                        Abstract and Problem Statement: Led a machine learning project aimed at
                        predicting the effectiveness of bank marketing campaigns. Utilized a dataset
                        of 45,211 observations and 17 features related to direct marketing
                        campaigns of a Portuguese banking institution. Applied data preprocessing,
                        including handling missing values and feature engineering, to enhance
                        model performance. Implemented and evaluated multiple machine learning
                        models, including Logistic Regression, Naive Bayes, and Artificial Neural
                        Networks (ANN). The ANN model achieved the highest accuracy (91.7%),
                        precision, recall, F1-score, and ROC AUC score of 0.917, demonstrating its
                        effectiveness in predicting client subscriptions to term deposits. The project
                        involved challenges in algorithm selection, model training, and evaluation,
                        with a focus on optimizing model accuracy and reliability.</li>



                </ul>
            </div>
        </motion.section>
    )
};

export default CapstoneProjects;








