import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

const Hero = () => {

    const[text, count] = useTypewriter({
        words:[
            "Photographer, Engineer, Explorer",
            "Full Stack Software Developer",
            "Hi, I'm Joe"
        ],
        loop:true,
        delaySpeed: 1200
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='blue'/>
        </h1>
    </div>
  )
}

export default Hero