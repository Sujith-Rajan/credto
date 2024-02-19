
import Container from '@/app/components/common/Container';
import Image from 'next/image';
import React, { useState } from 'react';
import { products } from '@/app/data/item';
import getProductId from '@/app/actions/getProductId';

interface IParams {
    product?: string;
}

const SingleProduct: React.FC<{ params: IParams }> = async ({params}) => {
    const productId = params.product;
    const singleProduct = await getProductId({productId})
   
    return (
        <div className='h-auto pt-36 mb-8'>
            <Container>
               
                <div className='w-full flex ' >
                    <div className='flex flex-col items-center gap-4'>
                        <div className='w-[250px] h-[250px] relative lg:w-[500px] lg:h-[500px]'>
                            <Image src={singleProduct?.imageSrc as string} alt="single product image" fill objectFit='contain'/>
                        </div>
                        <div className='flex gap-4'>
                            {singleProduct?.category ==="Mobile" &&
                            products?.map((item) => (
                                <div className='flex gap-4' key={item.id}>
                                <div
                                    className='hover:scale-75 transition-all duration-700 cursor-pointer'
                                    key={item.id}
                                    
                                >
                                    <Image src={item.image} alt="single product image" width={40} height={40} />
                                </div>
                                
                                </div>
                            ))
                        }
                        </div>
                       
                    </div>
                    <div className='flex flex-col gap-4'>
                             <h1 className='font-bold'>{singleProduct?.title}</h1> 
                              <p className='text-xs text-gray-400'>&#9734;&#9734;&#9734;&#9734;&#9734;(There is no review yet)</p>
                              <p className='text-xs'><span>OMR</span>{" "}<span 
                              className='font-bold'>{singleProduct?.offer}</span>{" "}<s>{singleProduct?.price}</s></p>
                              <p>{singleProduct?.description}</p>
                               <div>
                                {(singleProduct?.category ==="Mobile" || singleProduct?.category === 'Laptop') && 
                                <>
                                <p className='font-bold'>Internel Memory</p>
                                <div className='flex gap-1 mb-8'>
                                    <button className='border border-black p-2 hover:bg-black hover:text-white'>256 GB</button>
                                    <button className='border border-black p-2 hover:bg-black  hover:text-white'>512 GB</button>
                                </div>
                                </>
                                }
                                <hr />
                                <div className='flex flex-col md:flex-row gap-1 md:gap-4 mt-8'>
                                    <div className='flex items-center'>
                                        <div className='border border-gray-400 p-2'>+</div>
                                        <div className='md:p-2'>1</div>
                                        <div className='border border-gray-400 p-2'>-</div>
                                    </div>
                                    <button className='bg-black p-2 md:p-4 text-white'>ADD TO CART</button>
                                </div>
                               </div>
                                
                        </div>
                </div>
               
            </Container>
        </div>
    );
};

export default SingleProduct;
