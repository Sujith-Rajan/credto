import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io"

interface WhishListModalProps {
  setWhishPopup: () => void;
}

type Direction = "cart" | "wish";

const WhishListModal: React.FC<WhishListModalProps> = ({ setWhishPopup }) => {


  const router = useRouter()
  const handleRedirect = (direction: Direction) => {
    if(direction === 'cart'){
      router.push("/cart")
      setWhishPopup()
    }

    if(direction === 'wish'){
      router.push("/wishlist")
      setWhishPopup()
    }
  }

  return (
    <div className='w-full bg-black bg-opacity-50 h-screen absolute top-0 z-40'>
      <div className='w-[400px] bg-white h-screen absolute right-0 flex flex-col items-start p-4'>
        <div className='p-4'>
          <IoIosCloseCircle size={22} onClick={() => setWhishPopup()} />
          <hr />
          <h1 className='font-bold text-xl'>Wishlist</h1>
        </div>
        <hr />

        <div className='mt-8 flex p-4 gap-4 relative'>
          <div>
            <Image src="/products/iphoneBlue.jpg" alt="whishlist product" width={40} height={40} />
          </div>
          <div>
            <p className='font-bold'>Iphone 15 pro</p>
            <p className='font-bold'>256 GB -Blue</p>
            <span className='text-gray-500'>1 x OMR 46990</span>
          </div>
          <IoIosCloseCircleOutline  className='text-gray-500 hover:text-gray-600'/>
        </div>

        <div className='flex justify-between gap-8 p-4'>
          <p className='font-bold'>Subtotal</p>
          <p className='font-bold'>OMR 46990</p>
        </div>
        <hr />
        <div className='flex flex-col gap-4 p-4 '>
        
            <button className=' w-full px-4 py-2 border border-black' onClick={()=>handleRedirect("wish")}>VIEW WISHLIST</button>
            <button className=' w-full px-4 py-2 bg-black text-white' onClick={()=>handleRedirect("cart")}>ADD TO CART</button>
       
        </div>



      </div>
    </div>
  )
}

export default WhishListModal
