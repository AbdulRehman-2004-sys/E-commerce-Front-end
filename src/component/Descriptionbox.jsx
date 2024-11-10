import React from 'react'

const Descriptionbox = () => {
  return (
    <div>
      <section className='lg:px-[10rem] md:px-[1rem] mb-[5rem]'>
        <div className='flex gap-1'>
            <div className='px-5 py-3 border border-black font-bold'>Description</div>
            <div className='px-5 py-3 border border-black font-bold'>Reviews (122)</div>
        </div>
        <div className='p-5 border border-black mt-1'>
            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque consequuntur recusandae quidem veniam assumenda ducimus doloribus iure porro odit mollitia nobis, facere consectetur dolor, fugit iste repudiandae! Excepturi, debitis officia.</p>
            <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel tenetur sunt aperiam voluptate nostrum quisquam, eligendi ipsum a possimus similique corrupti reprehenderit doloribus aliquid totam laborum harum, vero porro facere.</p>
        </div>
      </section>
    </div>
  )
}
// This is Called in Product.jsx
export default Descriptionbox
