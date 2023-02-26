import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
    className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory">
      <ExperienceCard imgSrc='https://www.crewblast.co/wp-content/uploads/2022/09/Crew-Blast-Logo-ai.png'/>
      <ExperienceCard imgSrc='https://s3.us-east-1.amazonaws.com/fsa2-assets/assets/Logos/fullstack-academy-logo-full-color-rgb.jpg'/>
      <ExperienceCard />
      <ExperienceCard />
      </div>
    </motion.div>
  );
};

export default Experience;
