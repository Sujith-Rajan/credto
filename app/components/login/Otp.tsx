import React, { useEffect, useRef, useState } from 'react'

interface OtpInputProps {
    length: number;
    onOtpSubmit?: (otp: string) => void;
}

const Otp: React.FC<OtpInputProps> = ({length,onOtpSubmit = () => {} }) => {

    const [otp,setOtp] = useState<string[]>(new Array(length).fill(""))
    const inputRef = useRef<HTMLInputElement[]>([])

    useEffect(()=> {
        if(inputRef.current[0]) {
            inputRef.current[0].focus()
        }
    },[])

    const handleChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if(isNaN(Number(value))) return;
        
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1)
        setOtp(newOtp)

        const combinedOtp = newOtp.join("")
        if (combinedOtp.length === length) onOtpSubmit(combinedOtp);
         
        if(value && index < length - 1 && inputRef.current[index + 1 ] ){
            inputRef.current[index + 1].focus()
        }
    }

    
    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Backspace" && !otp[index] && index > 0 && inputRef.current[index - 1]) {
            inputRef.current[index - 1].focus()
        }
    }

  return (
    <div>
       { otp.map((value,index)=>(
      <input  key={index} type="text" value={value} 
      ref={(input) => (inputRef.current[index] = input as HTMLInputElement)}
      className='w-10 h-10 m-1 text-center text-lg shadow-md'
      onChange={(e)=> handleChange(index,e)}
      onKeyDown={(e) => handleKeyDown(index, e)}
      />
      ))}
    </div>
  )
}

export default Otp
