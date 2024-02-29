"use client"

import { signIn } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Otp from './Otp';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addSession } from '@/app/redux/otpSlice';


const Login = () => {
  
  const [phoneNumber,setPhoneNumber] = useState<string>("")
  const [errorMsg,setErrorMsg] = useState<boolean>(false)
  const [showOtpInput, setShowOtpInput] = useState(false);
  const router = useRouter()
  const dispatch = useDispatch()
 
  const handlePhoneNumber = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value)
    
  }
  
  
  useEffect(()=>{
    let regex: RegExp = /^[6-9]\d*$/;
    const handlePhoneNumberValidation = (): void => {
    if((!regex.test(phoneNumber) && phoneNumber.length === 10) || phoneNumber.length > 10){
      setErrorMsg(true)
     return
    }
    else{
      setErrorMsg(false)
    }
  }
  handlePhoneNumberValidation()
  },[phoneNumber])

  const handlePhoneSumbit = () => {
   
    if(phoneNumber.length !== 10){
      setErrorMsg(true)
      return
    }
    setShowOtpInput(true)
    
  }
  
    const onOtpSubmit = (otp: string) => {
    const validateOtp = '2024';
    if(otp !== validateOtp){
      toast.error("Otp mismatch")
      setShowOtpInput(false)
      return
    }
   
    toast.success("Login success")
    signIn("credentials",{otp})
  }
 
  return (
    
      <div className='p-40 md:p-48 bg-gray-100 w-full '>
       {showOtpInput  ?
        <div className='flex flex-col gap-4 md:gap-8 justify-center items-center w-full'>
        <p>Enter OTP sent to <span className='font-bold text-lg'>{phoneNumber}</span></p>
        <Otp length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
       :
        <div className='flex flex-col gap-4 md:gap-8 justify-center items-center w-full'>
        <div className='flex flex-col gap-2 justify-center items-center w-full'>
        <h1 className=' text-sm sm:justify-center md:text-xl font-bold'>Login/Register to your account</h1>
        <span className='text-sm text-gray-500 hidden md:flex'>Login with your mobile number</span>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center w-full'>

            <input type="number" className='border border-gray-400 focus:outline-none
             p-3 w-[300px] md:w-[540px] placeholder:text-black' placeholder ="Enter Mobile Number" 
             value={phoneNumber}
            onChange={handlePhoneNumber}/>
             {errorMsg && <span className='text-md text-red-600'>*Invalid Phone Number</span>}
            <span className='text-gray-500'>OR</span>

            <button className='border border-gray-400 focus:outline-none p-3 
            w-[300px] md:w-[540px] bg-white font-bold flex items-center 
            justify-center gap-4' onClick={()=>signIn('google',{redirect:true})}><FcGoogle size={22}/>Login with Google</button>

            <button className='border border-gray-400 focus:outline-none p-3 
            w-[300px] md:w-[540px] bg-white font-bold flex items-center 
            justify-center gap-4' onClick={()=>signIn('github',{redirect:true})}>
              <FaGithub size={22} />Sign in with Github</button>

        </div>
        <button className='px-8 py-4 bg-cyan-600 text-white 
        uppercase w-max font-bold cursor-progress' title='Please log in to use any of the providers above.' 
        onClick={handlePhoneSumbit}>GET OTP</button>
    </div>

  
        }
       
      </div>
  
  )
}

export default Login
