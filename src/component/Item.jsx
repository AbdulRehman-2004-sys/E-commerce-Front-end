import React from 'react'
import { Link } from 'react-router-dom'
import { FaRegEye } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
const Item = (props) => {


  return (
    <div className='item-container relative'>
      <section className='item w-[11.5rem] md:w-[15rem] flex flex-col gap-2 overflow-hidden'>
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0,0)}  className='image h-[75%] mb-2 w-full hover:scale-110 duration-300' src={props.image} alt="" />
      </Link>
        <p className='text-sm text-justify px-4'>{props.name}</p>
        <div className='item-prices flex gap-4 px-4'>
            <div className='item-price-new'>
                ${props.new_price}
            </div>
            <div className='item-price-old text-gray-500 line-through'>
                ${props.old_price}
            </div>
        </div>
        {/* <div className='w-[11.5rem] h-[18rem] md:w-[15rem] absolute bg-black opacity-40'>
          
        </div>
        <div className='w-[11.5rem] md:w-[15rem] h-[4rem] bg-black flex justify-between items-center px-[5rem] gap-4 absolute z-50 bottom-[5.5rem] left-0 opacity-[0.8]'>
        <Link to={'/productDisplay'}>
          <FaRegEye className='text-white text-3xl cursor-pointer'/>
        </Link>
          <Link to={"/cart"}>
            <MdOutlineShoppingCart className='text-white text-3xl cursor-pointer'/>
          </Link>
          </div> */}
      </section>
    </div>
  )
}
{/* //  */}
export default Item
