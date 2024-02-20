import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'
import { IoIosCloseCircle } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io"
import { useDispatch, useSelector } from 'react-redux';
import { removeProduct } from '../redux/cartSlice';

interface CartModalProps {
  setCartPopup: () => void;
  
}

type Direction = "cart" | "pay";
type ItemId = "item.id"

const CartModal: React.FC<CartModalProps> = ({ setCartPopup }) => {

const {products,total,color} = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  const router = useRouter()
  const handleRedirect = (direction: Direction) => {
    if(direction === 'cart'){
      router.push("/cart")
      setCartPopup()
    }

    if(direction === 'pay'){
      router.push("/payemnt")
      setCartPopup()
      router.refresh()
    }
  }

  const handleRemoveProduct = (id: ItemId) => {
    dispatch(removeProduct(id))
  }

  return (
    <div className='w-full bg-black bg-opacity-50 h-screen absolute top-0 z-auto'>
      <div className='w-[400px] bg-white h-screen absolute right-0 flex flex-col items-start p-4'>
        <div className='p-4'>
          <IoIosCloseCircle size={22} onClick={() => setCartPopup()} />
          <hr />
          <h1 className='font-bold text-xl'>My Cart</h1>
        </div>
        <hr />
        {products.map((item) => (
        <div className='mt-8 flex p-4 gap-4 relative'>
          <div>
            <Image src={item.imageSrc} alt="whishlist product" width={40} height={40} />
          </div>
          <div>
            <p className='font-bold'>{item.title}</p>
            <p className='font-bold'>{item.color}</p>
            <span className='text-gray-500'>{item.quantity} x OMR {item.offer}</span>
          </div>
          <IoIosCloseCircleOutline  className='text-gray-500
           hover:text-white-600 hover:bg-red-600 rounded-full ' title="Remove item from cart"
           onClick={()=> handleRemoveProduct(item.id)}/>
        </div>
        ))}
        <div className='flex justify-between gap-8 p-4'>
          <p className='font-bold'>Subtotal</p>
          <p className='font-bold'>OMR {total}</p>
        </div>
        <hr />
        <div className='flex flex-col gap-4 p-4 '>
            <button className=' w-full px-4 py-2 border border-black' onClick={()=>handleRedirect("cart")}>VIEW CART</button>
            <button className=' w-full px-4 py-2 bg-black text-white' onClick={()=>handleRedirect("pay")}>CHECKOUT</button>
        </div>

      </div>
    </div>
  )
}

export default CartModal
          
         
          
          


