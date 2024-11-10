import React from 'react'
import { Link } from 'react-router-dom'
import Button from './subcomponent/Button'
const ExploreProducts = () => {
  return (
    <div>
      <section className='md:w-[88vw] w-[91vw] mx-auto md:pr-8 flex flex-col lg:flex-row  gap-16 mb-[10rem]'>
        <div className='flex-1'>
            <p className='md:text-6xl text-5xl font-bold mb-4'>Explore Our Products</p>
            <div className='text-justify mb-4'>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores recusandae magni voluptate quisquam asperiores iusto, fuga porro? Omnis, earum aperiam? Animi veniam voluptas, rem repudiandae numquam magni maxime dolore quasi?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis officiis odit atque harum! Animi corrupti accusamus voluptas architecto? Sit pariatur molestias possimus dolorum vel, alias inventore ab. Placeat, veritatis sapiente?</p>
            <p className='mt-16 mb-16 px-8 font-bold'>“In eCommerce, your prices have to be better because the consumer has to take a leap of faith in your product."</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum qui ducimus impedit quae! Delectus perferendis, illum facilis temporibus eius earum, non quod aspernatur id rerum excepturi sint. Dicta, consectetur eum.</p>
            </div>
            <Link to={'/ourPorducts'}>
            <Button title='Explore Products' image='images/arrow.png' />
          </Link>
        </div>
        <div className='grid md:grid-cols-2 place-items-center grid-rows-2 gap-4 flex-1'>
            <div className='w-[20rem] h-[20rem] flex flex-col justify-center items-center text-2xl font-bold'>Latest Collection <br /> <span className='text-sm text-gray-700'>Over 100s of Products</span></div>
            <div className='w-[20rem] h-[20rem]'><img className='w-[20rem] h-full object-cover object-center' src="https://images.pexels.com/photos/1020370/pexels-photo-1020370.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" /></div>
            <div className='w-[20rem] h-[20rem]'><img className='w-[20rem] h-full object-cover object-center' src="https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" /></div>
            <div className='w-[20rem] h-[20rem] flex flex-col justify-center items-center text-2xl font-bold'>Different Types <br /> <span className='text-sm text-gray-700'>Over 100s of Products</span></div>
        </div>
      </section>
    </div>
  )
}

export default ExploreProducts
