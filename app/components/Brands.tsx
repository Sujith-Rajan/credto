import React from 'react'
import Container from './common/Container'
import Image from 'next/image'
import { brands } from '../data/item'


const Brands = () => {
  return (
    <Container>
            <div className='mt-8'>
                <div className='flex flex-col md:flex-row  justify-between'>
                    <h2 className='font-bold text-xl md:text-4xl'>Top Brands</h2>
                </div>
                <div className='flex gap-8 w-full mt-8 mb-8 justify-between'>
                    {brands.map((item)=> (
                    <div className='w-24 h-24 relative rounded-full overflow-hidden' key={item.id}>
                    <Image src={item.image} fill objectFit='contain' alt='brands logo' className='w-full h-full' />
                  </div>
                ))}
                    
                </div>
                  
                </div>
                </Container>
  )
}

export default Brands
