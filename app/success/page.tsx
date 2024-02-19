import React from 'react'
import { FaCheck } from "react-icons/fa6"

const Success = () => {
  return (
    
        <div className='h-screen flex flex-col justify-center items-center gap-8'>
            <div className='w-20 h-20 md:w-28 md:h-28 bg-gradient-to-b from-gray-300 to-gray-100  rounded-full flex items-center justify-center'>
                <div className='w-14 h-14 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center text-white'>
                <FaCheck className='md:text-xl'/>
                </div>
            </div>
            <h1 className='font-bold '>Purchased Successfully</h1>
            <p className='text-gray-400'>Your order placed Successfully.</p>
        </div>
    
  )
}

export default Success
