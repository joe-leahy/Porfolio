import React from "react";
import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="p-5 flex flex-col rounded-lg items-center space-y-7 
    flex-shrink-0 w-[500px] md:w-[600px] xl:w=[900px] snap-center bg-[#292929]
    opacity-40 hover:opacity-100 cursor-pointer duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-32 h-32 xl:w-[400px] xl:h-[200px] object-cover oject-center"
        src="https://www.crewblast.co/wp-content/uploads/2022/09/Crew-Blast-Logo-ai.png"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Fullstack Deveoper</h4>
        <p className="font-bold text-2xl mt-1">Crewblast</p>
        <div className="flex spae-x-2 m-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started -- Ended</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>point 1</li>
          <li>point 2</li>
          <li>point 3</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
