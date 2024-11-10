import React from 'react'
import Item from './Item'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const Card = ({data,loading,error},props) => {

  const container = useRef();
  useGSAP(() => {
      gsap.from(".item", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        stagger: 1,  
        scrollTrigger: {
          trigger: ".item-container",
          // markers : true,
          start: "1% 50%",
          end: "500% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });


    if(loading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <h1>{error}</h1>
    }
  return (
    <div>
      <section ref={container} className='mb-[5rem] mt-[8rem]'>
          
          <div className='flex flex-col justify-between px-7 md:px-10 lg:px-[9rem] py-5'>
            <p className='md:text-1xl'>
            <span className='font-bold text-3xl'>Latest Products</span>
            </p>
            <hr className='w-[100%] mt-[1rem] mx-auto rounded-sm bg-black'/>
          </div>

          <div className="grid place-items-center grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 px-4 w-full md:px-8 lg:px-[9rem]">
            {
              data.map((item,i) =>{
                if(item.category === props.category)
                {
                  return (
                    <Item className='item' key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
                  )
                }
                else
                {
                  return null;
                }

              })
            }
          </div>

          <button className="bg-gray-100 flex justify-center items-center m-[150px] mx-auto text-black px-5 py-3 rounded-full mt-10">
            <h1>Explore More</h1>
          </button>
      </section>

      {/* steps */}
      {/* 1. create store in app folder */}
      {/* 2. create a Slice with name what you want*/}
      {/* 3. add slice to store*/}
      {/* 4. create a action creator with name in slice what you want*/}
      {/* 5. then,slice import and use in component where you want*/}

    </div>
  )
}

export default Card
