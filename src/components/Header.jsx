import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div 
        initial={{
            x:-500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1
        }}
      
      className="flex flex-row items-center">
        <SocialIcon
          url="https://www.joeleahycreative.com/"
          fgColor="grey"
          bgColor="transparent"
          network="squarespace"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/joseph-leahy/"
          fgColor="grey"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.instagram.com/joe_leahy/"
          fgColor="grey"
          bgColor="transparent"
        />
        </motion.div>


        <motion.div 
        initial={{
            x:500,
            opacity:0,
            scale:.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{duration:1}}
        
        className="flex flex-row items-center text-gray-300 cursor-pointer">
          <SocialIcon 
            network="email" 
            fgColor="grey" 
            bgColor="transparent" />
            <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Let's Talk!</p>
        </motion.div>
    </header>
  );
};

export default Header;
