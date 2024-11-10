import React from 'react'
import "./assets/style.css"

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const TextSlider = () => {

    const container = useRef();
    useGSAP(() => {
        gsap.to(".slider", {
          x: "-310%",
          duration: 70,
          repeat: -1,
        })
    }, { scope: container });

  return (
    <div ref={container}>
      <section className=' w-[88vw] mx-auto h-auto mt-8 overflow-x-hidden whitespace-nowrap flex gap-8 '>
        <div className='slider flex items-center  gap-8 text-8xl font-bold py-20 translate-x-full '>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Convenient</h1>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Accessible</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Scalable</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Secure</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Innovative</h1>
        </div>
        <div className='slider flex items-center  gap-8 text-8xl font-bold py-20 translate-x-full '>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Convenient</h1>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Accessible</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Scalable</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Secure</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Innovative</h1>
        </div>
        <div className='slider flex items-center  gap-8 text-8xl font-bold py-20 translate-x-full'>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Convenient</h1>
            <h1 className='stroke-red-900 stroke-2 hover:text-cyan-300 duration-300 stroke'>Accessible</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Scalable</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Secure</h1>
            <h1 className='hover:text-cyan-300 duration-300 stroke'>Innovative</h1>
        </div>
      </section>
    </div>
  )
}

export default TextSlider
