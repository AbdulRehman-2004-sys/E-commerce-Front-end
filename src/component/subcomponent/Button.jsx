import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='w-56 rounded-full flex justify-center items-center gap-6 bg-red-600 h-10 text-white md:ml-[1rem] lg:ml-0 md:mt-[2rem lg:mt-[0rem]'>{props.title} <img src={props.image} alt="" /></button>
    </div>
  )
}

export default Button
