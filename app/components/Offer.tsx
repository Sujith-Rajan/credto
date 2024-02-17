import React from 'react'
import Container from './common/Container'
import Image from 'next/image'

const Offer = () => {
  return (
    <Container>
      <div className='pt-10 grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div className='w-full h-[250px] xs:w-[200px] relative'>
        <Image src="/offer1.png" fill alt='offer image' objectFit='cover'/>
        </div>
        <div  className='w-full h-[250px] relative'>
        <Image src="/offer2.webp" fill alt='offer image' objectFit='cover'/>
        </div>

      </div>
    </Container>
  )
}

export default Offer
