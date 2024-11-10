import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
// import all_product from './assets/all_product'
import Item from './Item'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger) 

const ShopCatogery = (props) => {

  const {all_product} = useContext(ShopContext)

  const container = useRef();
  useGSAP(() => {
      gsap.from(".item", {
        opacity: 0,
        y: 80,
        duration: 1.5,
        stagger: 1,  
        scrollTrigger: {
          trigger: ".item-container",
          start: "-10% 50%",
          end: "220% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });


  return (
    <div>
      <section ref={container} className='mb-[5rem] mt-[7rem] md:mt-[10rem]'>
          <div className='flex justify-between px-7 md:px-10 lg:px-[9rem] py-5'>
            <p className='text-2xl md:text-3xl'>
              <span className='font-bold capitalize'>{props.category} Products:</span>
            </p>
          </div>
            <hr className='w-[80%] mx-auto rounded-sm bg-black mb-4'/>

          <div className="grid place-items-center grid-cols-2 gap-y-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 px-4 w-full md:px-8 lg:px-[9rem]">
            {
              all_product.map((item,i) =>{
                if(item.category === props.category)
                {
                  return (
                    <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
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
    </div>
  )
}

export default ShopCatogery
