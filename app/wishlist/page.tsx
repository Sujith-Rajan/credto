"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import { useSelector } from 'react-redux'

interface RootState {
    wish: {
        products: {
            id: string;
            title: string;
            imageSrc: string;
            offer: number;
            quantity: number;
            price:number
        
        }[];
        total: number;
        quantity: number;
    };
    otp: {
        sessionOtp: boolean;
    }
}

const Wishlist = () => {

    const router = useRouter()
    const {sessionOtp} = useSelector ((state:RootState)=> state.otp)
    if(!sessionOtp){
        router.push("/")
    }
  
   const{products} = useSelector((state: RootState)=> state.wish)
  
  return (
    <div className='h-auto pt-20 md:p-36 '>
        <div className='bg-gray-200 flex items-center justify-center  p-2 lg:p-8'>
            <h1 className='font-bold text-xl'>Wishlist</h1>
        </div>
        <div className='flex  md:flex-row md:justify-between p-2'>
            <div className='md:w-full mt-8 p-2 md:p-10 '>
                <table className='w-full  divide-y divide-gray-300'>
                    <thead>
                    <tr>
                        <th>PRODUCT</th>
                        <th>PRICE</th>
                        <th>STOCK STATUS</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((item) => (
                        <tr className='font-bold text-xs md:text-sm text-center border-b border-gray-300 whitespace-nowrap' key={item.id}>
                            <td className='flex flex-col md:flex-row md:gap-4 gap-2 md:items-center'>
                                <Image src={item.imageSrc} alt='cart image' width={40} height={40}/>
                                <p>{item.title}</p>
                            </td>
                            <td>
                                OMR {item.offer}.00 <s>{item.price}.00</s>
                            </td>
                            <td className='flex gap-2 items-center justify-center'>
                               In Stock
                            </td>
                            <td >
                                <div className='flex justify-center gap-2'>
                                    <Link href={`/products/${item.id}`}>
                                    <button className='bg-slate-100 border border-black p-1 md:px-4 md:py-2 font-bold text-xs'>QUICK VIEW</button>
                                    </Link>
                                    <Link href={`/products/${item.id}`}>
                                    <button className='bg-black md:px-4 md:py-2 p-1 text-white text-xs'>ADD TO CART</button>
                                    </Link>
                           
                           
                            </div>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table>
              
            </div>
        
        </div>
     
    </div>
  )
  
}

export default Wishlist
