"use client"
import { signIn } from 'next-auth/react';
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    
      <div className='p-40 md:p-48 bg-gray-100 w-full '>
    
        <div className='flex flex-col gap-4 md:gap-8 justify-center items-center w-full'>
            <div className='flex flex-col gap-2 justify-center items-center w-full'>
            <h1 className=' text-sm sm:justify-center md:text-xl font-bold'>Login/Register to your account</h1>
            <span className='text-sm text-gray-500 hidden md:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas placeat quia earum neque</span>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center w-full'>
                <input type="text" className='border border-gray-400 focus:outline-none p-3 w-[300px] md:w-[540px] placeholder:text-black' placeholder ="Enter Mobile Number"/>
                <span className='text-gray-500'>OR</span>
                <button className='border border-gray-400 focus:outline-none p-3 
                w-[300px] md:w-[540px] bg-white font-bold flex items-center 
                justify-center gap-4'><FcGoogle size={22}/>Login with Google</button>
                <button className='border border-gray-400 focus:outline-none p-3 
                w-[300px] md:w-[540px] bg-white font-bold flex items-center 
                justify-center gap-4' onClick={()=>signIn('github')}><FaGithub size={22} />Sign in with Github</button>

            </div>
            <button className='px-8 py-4 bg-cyan-600 text-white uppercase w-max font-bold'>GET OTP</button>
        </div>

      
      </div>
  
  )
}

export default Login
