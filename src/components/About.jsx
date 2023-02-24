import { MotionConfig } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{ x: -200, opacity:0 }}
        transition={{ duration: 1 }}
        whileInView={{ x: 0, opacity:1 }}
        className="h-[450px]"
        src="https://images.squarespace-cdn.com/content/v1/5c570c2094d71ad85d7da77f/1609777265434-FSGR22E7NC3SBZ7Y25W4/588AF85E-BEF1-42B5-8A63-8F24550DEA5C.jpeg?format=1000w"
      />
    </div>
  );
};

export default About;