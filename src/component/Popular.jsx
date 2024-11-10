import React from 'react'
import data_product from '../component/assets/new_collections.js'
import Item from './Item'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const Popular = () => {

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
          end: "40% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });

  return (
    <div>
      {/* <section ref={container} className='flex flex-col items-center gap-[1rem] h-auto lg:h-[100vh] py-8  lg:py-[3rem] lg:px-[10rem] md:mt-8'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-4xl'>Popular In Women</h1>
        <hr className='w-[10%] border-1 border-black mb-8'/>
        <div className=' w-full flex flex-wrap gap-2 pl-2 md:pl-6 md:gap-6 lg:pl-0 lg:gap-0 lg:justify-around'>
            {
                data_product.map((item,i)=>
                {
                    return(
                        <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
                    )
                })
            }
        </div>
      </section> */}

      <section ref={container} className='flex flex-col items-center gap-[1rem] h-auto lg:h-[100vh] py-8  lg:py-[1rem] lg:px-[10rem] md:mt-8 mb-20'>
        <h1 className='text-4xl font-bold md:text-5xl lg:text-4xl'>New Collections</h1>
        <p className='text-4xl font-bold md:text-5xl lg:text-2xl text-gray-700'>Popular</p>
        <hr className='w-[10%] border-1 border-black mb-8'/>
        <div className=' w-full grid grid-cols-2 grid-x-4 gap-4 md:grid-cols-3 lg:grid-cols-4 place-items-center  md:pl-6 md:gap-6 lg:pl-0 lg:gap-0 lg:justify-around'>
            {
                data_product.slice(0,4).map((item,i)=>
                {
                    return(
                        <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
                    )
                })
            }
        </div>
      </section>

    </div>
  )
}
// Called in Shop.jsx
export default Popular
