import Image from 'next/image'
import React from 'react'

const Wishlist = () => {
  

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
                        <tr className='font-bold text-xs md:text-sm text-center border-b border-gray-300 whitespace-nowrap'>
                            <td className='flex flex-col md:flex-row md:gap-4 gap-2 md:items-center'>
                                <Image src="/iphone.jpg" alt='cart image' width={40} height={40}/>
                                <p>Airpods Max</p>
                            </td>
                            <td>
                                OMR 50,0000.00
                            </td>
                            <td className='flex gap-2 items-center justify-center'>
                               In stock
                            </td>
                            <td >
                                <div className='flex justify-center gap-2'>
                            <button className='bg-slate-100 border border-black p-1 md:px-4 md:py-2 font-bold text-xs'>QUICK VIEW</button>
                            <button className='bg-black md:px-4 md:py-2 p-1 text-white text-xs'>ADD TO CART</button>
                            </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
              
            </div>
        
        </div>
     
    </div>
  )
  
}

export default Wishlist
