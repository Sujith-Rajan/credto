import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux';
import { wishRemoveProduct } from '../redux/wishListSlice';

interface WhishListModalProps {
  setWhishPopup: () => void;
}

type Direction = "cart" | "wish";

const WhishListModal: React.FC<WhishListModalProps> = ({ setWhishPopup }) => {

  const {products} = useSelector((state)=> state.wish)
  const dispatch = useDispatch()
  const router = useRouter()
  const handleRedirect = (direction: Direction) => {
    if (direction === 'cart') {
      router.push("/cart")
      setWhishPopup()
    }

    if (direction === 'wish') {
      router.push("/wishlist")
      setWhishPopup()
    }
  }

  const handleRemoveWish = (id) => {
    dispatch(wishRemoveProduct(id))
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
        {products.map((item)=> (
        <div className='mt-8 flex p-4 gap-4 relative'>
          <div>
            <Image src={item.imageSrc} alt="whishlist product" width={40} height={40} />
          </div>
          <div>
            <p className='font-bold'>{item.title}</p>
            <p className='font-bold'>256 GB -</p>
            <span className='text-gray-500'>1 x OMR {item.offer} <>{item.price}</></span>
          </div>
          <IoIosCloseCircleOutline className='text-gray-500 hover:text-white bg-red-600 rounded-full ' onClick={()=>handleRemoveWish(item.id)}/>
        </div>
      ))}
       
        <hr />
        <div className='flex flex-col gap-4 p-4 '>

          <button className=' w-full px-4 py-2 border border-black' onClick={() => handleRedirect("wish")}>VIEW WISHLIST</button>
          <button className=' w-full px-4 py-2 bg-black text-white' onClick={() => handleRedirect("cart")}>ADD TO CART</button>

        </div>



      </div>
    </div>
  )
}

export default WhishListModal
