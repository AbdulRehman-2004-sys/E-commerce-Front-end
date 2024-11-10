import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Popular from './Popular'
import NewCollections from './NewCollections'
import NewsLetter from './NewsLetter'
import GridLoader from "react-spinners/GridLoader";
import TextSlider from './TextSlider'
import ExploreProducts from './ExploreProducts'
const Shop = () => {

  const [loading,setLoading] = useState(false);

  useEffect(()=>
  {
    setLoading(true)
    setTimeout(()=>
    {
        setLoading(false)
    },5000)
  },[])
  return (
    
    <div>
        <Hero></Hero>
        <TextSlider/>
        <Popular/>
        {/* <NewCollections/> */}
        <ExploreProducts/>

        <NewsLetter/>
    </div>
  )
}

export default Shop
