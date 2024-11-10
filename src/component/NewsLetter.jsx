import React from 'react'

const NewsLetter = () => {
  return (
    <div>
      <section className='w-full text-center lg:text-left h-auto lg:w-[88vw] lg:h-[60vh] flex flex-col mx-auto lg:py-0 lg:px-[5rem] mb-[5rem] gap-4 md:px-8'>
        <h1 className='text-5xl lg:text-8xl font-bold stroke'>Get Exclusive Offers on Your Email</h1>
        <p className='text-1xl md:text-2xl mb-8 pl-[1rem]'>Subscribe to get exclusive offers on your favorite products.</p>
        <div className='flex relative items-center justify-between w-[100%] h-16'>
            <input className='w-[80%] h-full pl-4 border border-black outline-none text-1xl' type="email" placeholder='Ur Email Id' />
            <button className='w-[35%] lg:w-[25%] text-sm h-full bg-black text-white'>Subscribe</button>
        </div>
      </section>
    </div>
  )
}
// Called in Shop.jsx
export default NewsLetter
