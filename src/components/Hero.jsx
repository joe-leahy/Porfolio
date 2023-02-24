import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from 'next/image'

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, I'm Joe",
      "Photographer",
      "Engineer",
      "<FrontendDeveloper />",
    ],
    loop: true,
    delaySpeed: 1200,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/112727413?v=4"
        alt="profilepic"
      />
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="blue" />
      </h1>
    </div>
  );
};

export default Hero;
