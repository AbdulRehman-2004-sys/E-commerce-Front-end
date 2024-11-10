import React from 'react'
import { Link } from 'react-router-dom'
import Button from './subcomponent/Button'
const Hero = () => {
  return (
    <div>
     

    <section className='w-[88vw] mx-auto h-auto lg:h-[87vh] lg:flex mt-[5rem] border-t border-b border-black'>
        <div className=" flex flex-1 justify-center flex-col gap-4 mt-[3rem] md:mt-[4rem] md:py-[3rem]">
            <p className='text-1xl  font-bold mb-0 md:ml-[1rem] lg:ml-0  md:text-2xl'>New Arrivals Only</p>
            <div className='flex items-center gap-4 md:ml-[1rem] lg:ml-0 '>
                <h1 className='text-7xl font-bold md:text-[13vh] stroke'>new</h1>
            </div>
            <h1 className='text-7xl font-bold md:ml-[1rem] lg:ml-0 md:text-[13vh] stroke'>collections</h1>
            <h1 className='text-7xl font-bold md:ml-[1rem] lg:ml-0 md:text-[13vh] stroke'>for everyone</h1>
          <Link to={'/latestCollection'}>
            <Button title='Latest Collection' image='images/arrow.png'/>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 grid-rows-2 gap-4 place-items-center py-4">
            {/* <img className='h-[80%] lg:h-[90%] lg:mt-[3rem]' src="images/hero_image.png" alt="" /> */}
            <Link to={"/men"} className='w-[20rem]'>
            <div className='w-[20rem] h-[15rem] relative'>
              <video className='h-[100%] w-[100%] lg:h-[100%] object-cover object-center' autoPlay muted loop src="https://videos.pexels.com/video-files/3206296/3206296-sd_640_360_25fps.mp4"></video>
              <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white underline hover:text-cyan-300 duration-300'>Men <br /> Collection</p>
            </div>
            </Link>
            
            <Link to={"/women"}>
            <div className='w-[20rem] h-[15rem] relative'>
            <video className='h-[100%] w-[100%] lg:h-[100%] object-cover object-center' autoPlay muted loop src="https://videos.pexels.com/video-files/1154850/1154850-sd_640_360_24fps.mp4"></video>
              <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white underline hover:text-cyan-300 duration-300'>Women <br /> Collection</p>
            </div>
            </Link>
            
            <Link to={"/kids"}>
            <div className=' w-[20rem] h-[15rem] relative'>
            <video className='h-[100%] w-[100%] lg:h-[100%] object-cover object-center' autoPlay muted loop src="https://videos.pexels.com/video-files/6183356/6183356-sd_640_360_30fps.mp4"></video>
              <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white underline hover:text-cyan-300 duration-300'>Kids <br /> Collection</p>
            </div>
            </Link>
          
            <div className=' w-[20rem] h-[15rem] relative'>
            <video className='h-[100%] w-[100%] lg:h-[100%] object-cover object-center' autoPlay muted loop src="https://videos.pexels.com/video-files/5210524/5210524-sd_640_360_25fps.mp4"></video>
              <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white underline hover:text-cyan-300 duration-300'>New <br /> Acessories <br /> <span className='text-sm font-semibold'>Coming Soon</span></p>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
