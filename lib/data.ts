import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carHubImg from "@/public/carHub.png";
import shoply from "@/public/shoply.png";
import chatAppPic from "@/public/chatAppPic.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Achievements",
    hash: "#achivements",
  },

  {
    name: "ExtraCaricular",
    hash: "#extraCaricular",
  },
  {
    name: "CapstoneThesis",
    hash: "#capstoneThesis",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "NextTech Ltd., Dhaka, Bangladesh",
    description: "I worked as a software engineering intern",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "Machine Learning Intern (Remote)",
    location: "Cognifyz Technologies, India",
    description:
      "I worked as a machine learning intern with machine learning, deep learning, LLM, NLP algorithm in different projects",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - present",
  },
  
] as const;

export const projectsData = [

  {
    title: "Car Hub",
    description:
      "I completed this simple project which is provide different type of car service such as rent, book, car details, search car.",
    tags: ["TypeScript","React", "Next.js", "Tailwind"],
    imageUrl: carHubImg,
    codeUrl: "https://github.com/ahasan789/carhub",
    demoLiveUrl: "https://carhub-six-lake.vercel.app/"
  },
  {
    title: "Shoply",
    description:
      "Shoply e-commerce site. It's a simple online shop made with React and styled nicely with Tailwind CSS. Find cool stuff for your style",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: shoply,
    codeUrl: "https://github.com/ahasan789/shoply/tree/main/shoply",
    demoLiveUrl: "https://shoply-66wv.vercel.app/"
  },
  
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "Microsoft Excel",
  "Microsoft Word",
  "MatLab",
  "Jupytar Notebook",
  "Auto CAD",
  "Google Colab",
  "Kaggle",
  "Tensorflow",
  "Pytorch"
  
] as const;
