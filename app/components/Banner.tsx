"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Slider } from '../data/item'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

type Direction = "left"  | "right"

const Banner = () => {

    const [currentSlide , setCurrentSlide] = useState(0)
  useEffect (()=> {
    const interval = setInterval(
      
      ()=> setCurrentSlide((prev) => (prev === Slider.length - 1 ? 0 : prev + 1)),4000
    )
    return () => clearInterval(interval)
  },[])

  const handleClick = (direction: Direction) => {
    if(direction === "left"){
        setCurrentSlide((prev) => (prev === 0 ? Slider.length - 1 : prev - 1));
    }

    if(direction === "right"){
        setCurrentSlide((prev) => (prev === Slider.length - 1 ? 0 : prev + 1));
    }


  }

  return (
    <div className='relative'>
        <div className='z-10 bg-gray-300 w-8 h-8 p-2 rounded-full text-white absolute top-1/2  left-4 hover:bg-gray-400' 
        onClick={()=>handleClick("left")}>
        <FaChevronLeft />
        </div>
        <div className='flex '>
       
        <div className='h-[200px]  w-full md:h-[400px] relative overflow-hidden transition-all duration-300'>
      <Image src={Slider[currentSlide].image} fill objectFit='cover' alt='banner image'/>
      </div>
    
      </div>
      <div  className='z-auto bg-gray-300 w-8 h-8 p-2 rounded-full text-white absolute top-1/2  right-4  hover:bg-gray-400'
       onClick={()=>handleClick("right")}>
      <FaChevronRight />
      </div>
    </div>
  )
}

export default Banner
