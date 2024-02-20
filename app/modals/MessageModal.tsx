import Link from 'next/link';
import React from 'react'
import { BsCart4 } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io"

interface MessageModalProps {
  setMessage: () => void;
}

const MessageModal:React.FC<MessageModalProps> = ({setMessage}) => {
  return (
    <div className='bg-black bg-opacity-50 h-screen w-full flex items-center justify-center absolute top-0 z-10'>
      <div className='w-[200px] h-auto shadow-md bg-white rounded-md'>
      <IoIosCloseCircle onClick={setMessage} size={22}/>
      <div className='w-full flex flex-col gap-4 items-center justify-center h-full mb-4'>
        <div className='bg-gray-300 p-4 rounded-full'>
      <BsCart4 size={40}/>
      </div>
      <Link href="/cart"><button className='bg-green-600 text-white rounded-lg p-2 w-full'>View My Cart</button></Link>
      <Link href="/products"><button className='bg-black text-white rounded-lg p-2 w-full'>Continue Shopping</button></Link>
      </div>
      </div>
    </div>
  )
}

export default MessageModal
