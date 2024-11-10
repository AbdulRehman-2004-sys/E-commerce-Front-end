import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
// import all_product from './assets/all_product'
import Item from './Item'

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';
gsap.registerPlugin(ScrollTrigger) 

const OurProducts = () => {

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
          // markers : true,
          start: "-10% 50%",
          end: "600% 50%",
          scrub: 1,
        }
      })
  }, { scope: container });


  return (
    <div>
      <section ref={container} className='mb-[5rem] mt-[7rem] md:mt-[10rem]'>
            <p className='text-4xl pl-8 md:pl-[9rem] font-bold'>Products</p>
            <hr className='w-[80%] mx-auto rounded-sm bg-black'/>
          <div className='flex justify-between px-7 md:px-10 lg:px-[9rem] py-5'>
            <p className='md:text-1xl flex gap-4'>
              <span className='font-bold'>Filter : </span>
              <Link to={"/men"} className='flex gap-2'>
                    <input type="checkbox" />
              </Link>
                    <span className='text-1xl'>Men</span> 
                <Link to={"/women"} className='flex gap-2'>
                    <input type="checkbox" />
                </Link>
                    <span className='text-1xl'>Women</span>  
                <Link to={"/kids"} className='flex gap-2'>
                    <input type="checkbox" />
                </Link>
                    <span className='text-1xl'>Kids</span>  
            </p>
          </div>

          <div className="grid place-items-center grid-cols-2 gap-y-6 gap-x-8 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 px-4 w-full md:px-8 lg:px-[9rem]">
            {
              all_product.slice(0,36).map((item,i) =>{
                  return (
                    <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}></Item>
                  )
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

export default OurProducts
