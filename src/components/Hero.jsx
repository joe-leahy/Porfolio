import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from 'next/image'
import Link from "next/link";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Photographer",
      "Software Engineer",
      "UI Designer",
    ],
    loop: true,
    delaySpeed: 1200,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src="https://avatars.githubusercontent.com/u/112727413?v=4"
        alt="profilepic"
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Ride | Explore | Create</h2>
      <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
        <span className="mr-3">{text}</span>
        <Cursor cursorColor="aqua" />
      </h1>
      <div className="pt-5">
        <Link href='#about'><button className="heroButton">About</button></Link>
        <Link href='#experience'><button className="heroButton">Experience</button></Link>
        <Link href='#skills'><button className="heroButton">Skills</button></Link>
        <Link href='#projects'><button className="heroButton">Projects</button></Link>

       
      </div>
      </div>
    </div>
  );
};

export default Hero;
