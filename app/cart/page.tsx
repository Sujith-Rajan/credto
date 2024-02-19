"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const Cart = () => {

    const [count,setCount] = useState(1)

    const price = 50000
    const subtotal = price * count;

  return (
    <div className='h-auto pt-20 md:p-36 '>
        <div className='bg-gray-200 flex items-center justify-center  p-2 lg:p-8'>
            <h1 className='font-bold text-xl'>Cart</h1>
        </div>
        <div className='flex flex-col md:flex-row md:justify-between p-2'>
            <div className='md:w-3/4 mt-8 p-2 md:p-10 '>
                <table className='w-full  divide-y divide-gray-300'>
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr className='font-bold text-xs md:text-sm text-center border-b border-gray-300 whitespace-nowrap'>
                            <td className='flex flex-col md:flex-row md:gap-4 gap-2 md:items-center'>
                                <Image src="/iphone.jpg" alt='cart image' width={40} height={40}/>
                                <p>Airpods Max</p>
                            </td>
                            <td>
                                OMR 50,0000.00
                            </td>
                            <td className='flex gap-2 items-center justify-center'>
                                <div className='border border-gray-400 shrink-0 p-2 cursor-pointer' onClick={()=>setCount(count + 1)}>+</div>
                                <div>{count}</div>
                                <div className='border border-gray-400 shrink-0 p-2 cursor-pointer'  onClick={()=>{count > 0 && setCount(count - 1) }}>-</div>
                            </td>
                            <td>
                            OMR {subtotal}.00
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className='flex justify-between mt-8 gap-2'>
                    <div className='flex border border-gray-400'>
                        <input type="text" placeholder='Coupon code'/>
                        <button className='bg-black px-4 py-2 text-white text-xs'>APPLY COUPON</button>
                    </div>
                    <button className='bg-slate-100 border border-black px-4 py-2 font-bold text-xs'>UPDATE CART</button>
                 </div>    
            </div>
            <div className='border border-gray-400 p-4 flex flex-col mt-8 gap-4 md:w-1/4'>
                <h2 className='font-bold text-lg md:text-xl'>Cart Totals</h2>
                <div className='flex justify-between'>
                    <p className='font-bold'>Subtotal</p>
                    <p>OMR {subtotal}.00</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p className='font-bold'>Total</p>
                    <p className='font-extrabold'>OMR {subtotal}.00</p>
                </div>
                <button className='w-full bg-cyan-600 text-white font-bold text-sm p-4'> PROCEED TO CHECKOUT</button>
            </div>
        </div>
     
    </div>
  )
}

export default Cart
