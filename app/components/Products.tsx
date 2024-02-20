import React from 'react'
import Container from './common/Container'
import Image from 'next/image'
import { getProducts } from '../actions/getProducts'
import Link from 'next/link'
import { CiCirclePlus } from "react-icons/ci";

const Products = async () => {

    const products = await getProducts()
   
    return (
        <Container>
            <div className='mt-8'>
                <div className='flex flex-col md:flex-row  justify-between'>
                    <h2 className='font-bold text-xl md:text-4xl'>Products</h2>
                    <Link href="/products" className='text-blue-500'>View All Products</Link>
                </div>
                <div className='flex flex-col border  border-gray-500 lg:flex-row mt-8 justify-evenly'>
                    <div className='flex flex-col justify-center items-center mb-4'>
                        <div className='w-[400px] h-[330px] relative '>
                            <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                        </div>
                        <p className='text-blue-500'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                        <h3 className='font-bold '>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                        <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 
                        </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                        <button className='bg-cyan-500 py-4 px-4 text-white  hover:bg-cyan-600'>ADD TO CART</button>
                    </div>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 '>
                       {products.map((product)=>(
                        <Link href={`/products/${product.id}`} className='flex flex-col justify-center items-center
                         gap-1 border border-gray-400 relative p-2' key={product.id}>
                            <div className='absolute left-2 top-2 bg-green-600 text-white px-2  text-xs z-10'>
                               HOT
                            </div>
                            <div className=' shrink-0'>
                                <Image src={product.imageSrc} alt='products image' width="200" height="150"  />
                            </div>
                            <div className='flex gap-1'>
                                <div className='flex flex-col'>
                            <p className='text-blue-500 text-xs'>{product.description}</p>
                            <h3 className='font-bold text-sm'>{product.title}</h3>
                            <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>{product.offer} </span>
                             <span className='text-gray-500'><s>{product.price}</s></span></h4>
                             </div>
                            <div >
                            <CiCirclePlus size={25} className='hover:bg-blue-500 rounded-full hover:text-white'/>
                            </div>
                             </div>
                        </Link>
                    ))}
                 
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default Products
