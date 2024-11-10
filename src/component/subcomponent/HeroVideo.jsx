import React from 'react'

const HeroVideo = () => {
  return (
    <div>
      <Link to={"/men"} className='w-[20rem]'>
            <div className='w-[20rem] h-[15rem] relative'>
              <video className='h-[100%] w-[100%] lg:h-[100%] object-cover object-center' autoPlay muted loop src="https://videos.pexels.com/video-files/3206296/3206296-sd_640_360_25fps.mp4"></video>
              <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black opacity-40'></div>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-white underline hover:text-cyan-300 duration-300'>Men <br /> Collection</p>
            </div>
    </Link>
    </div>
  )
}

export default HeroVideo
