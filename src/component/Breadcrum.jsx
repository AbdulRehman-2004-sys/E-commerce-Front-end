import React from 'react'

const Breadcrum = (props) => {
    const {product}  = props;
  return (
    <div className='flex flex-wrap px-8 md:px-6 items-center gap-4 mt-[8rem] md:mt-[4rem] mb-8 lg:pl-40 md:p-[2rem]'>
      Home <img className='h-3' src="/images/breadcrum_arrow.png" alt="" />
      Shop <img className='h-3' src="/images/breadcrum_arrow.png" alt="" />
      {product.category} <img className='h-3' src="/images/breadcrum_arrow.png" alt="" />
      {product.name}
    </div>
  )
}

export default Breadcrum
