import React from 'react'
import new_collections from './assets/new_collections.js'
import Item from './Item'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const NewCollections = () => {

  const container = useRef();
  useGSAP(() => {
      gsap.from(".item", {
        opacity: 0,
        y: 100,
        duration: 1.5,
        stagger: 1,  
        scrollTrigger: {
          trigger: ".item-container",
          start: "-50% 50%",
          end: "150% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });

  return (
    <div>
      <section ref={container} className='newcollections flex flex-col items-center gap-[1rem] mb-[5rem] lg:py-[3rem] '>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-4xl'>New Collections</h1>
        <hr className='w-[10%] border-1 border-black mb-8'/>
        <div className="collections w-full grid grid-cols-2 md:grid-cols-3 md:pl-6 lg:grid-cols-4 pl-3 gap-0 lg:gap-4 gap-y-4 lg:pl-[11rem] lg:pr-[10rem]">
            {
                new_collections.map((item,i)=>
                {
                    return(
                        <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
                    )
                })
            }
        </div>
      </section>
    </div>
  )
}
// Called in Shop.jsx
export default NewCollections
