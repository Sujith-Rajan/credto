import React from 'react'
import Container from './common/Container'
import Image from 'next/image'

const Products = () => {
    return (
        <Container>
            <div className='mt-8'>
                <div className='flex flex-col md:flex-row  justify-between'>
                    <h2 className='font-bold text-xl md:text-4xl'>Products</h2>
                    <p>View All Products</p>
                </div>
                <div className='flex flex-col border  border-gray-500 lg:flex-row mt-8'>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-[400px] h-[330px] relative '>
                            <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                        </div>
                        <p className='text-blue-500'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                        <h3 className='font-bold '>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                        <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                        <button className='bg-cyan-500 py-4 px-4 text-white  hover:bg-cyan-600'>ADD TO CART</button>
                    </div>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 '>

                        <div className='flex flex-col justify-center items-center gap-1 border border-gray-400 relative'>
                            <div className='absolute left-2 top-2 bg-green-600 text-white px-2  text-xs'>
                               HOT
                            </div>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p className='text-blue-500 text-xs'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3 className='font-bold text-sm'>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white'>ADD TO CART</button>
                        </div>

                        <div className='flex flex-col justify-center items-center border border-gray-400'>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4>OMR 4,699.00 4,699.00</h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white '>ADD TO CART</button>
                        </div>

                        <div className='flex flex-col justify-center items-center border border-gray-400 p-2'>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4>OMR 4,699.00 4,699.00</h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white'>ADD TO CART</button>
                        </div>

                        <div className='flex flex-col justify-center items-center gap-1 border border-gray-400'>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p className='text-blue-500 text-xs'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3 className='font-bold text-sm'>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white'>ADD TO CART</button>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1 border border-gray-400'>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p className='text-blue-500 text-xs'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3 className='font-bold text-sm'>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white'>ADD TO CART</button>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-1 border border-gray-400'>
                            <div className='w-[200px] h-[170px] relative shrink-0'>
                                <Image src="/iphone.jpg" alt='products image' fill objectFit='contain' />
                            </div>
                            <p className='text-blue-500 text-xs'>AUDIO AMPLIFIER, HDMI PROJECTORS</p>
                            <h3 className='font-bold text-sm'>iPhone 14 Pro max 256GB - Deep Purple..</h3>
                            <h4><span className='text-gray-500'>OMR</span><span className='font-bold'>4,699.00 </span> <span className='text-gray-500'><s>4,699.00</s></span></h4>
                            <button className='bg-cyan-500 py-4 px-4 text-white'>ADD TO CART</button>
                        </div>
                    </div>

                </div>

            </div>
        </Container>
    )
}

export default Products
