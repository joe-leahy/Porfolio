import React from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'

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
    <div>
        <h1>
        <span>{text}</span>
        <Cursor cursorColor='blue'/>
        </h1>
    </div>
  )
}

export default Hero