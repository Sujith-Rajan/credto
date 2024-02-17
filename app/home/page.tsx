import React from 'react'
import Banner from '../components/Banner'
import Offer from '../components/Offer'
import Products from '../components/Products'
import Brands from '../components/Brands'

const LandingPage = () => {
  return (
    <div className='w-full pt-24'>
      <Banner/>
      <Offer/>
      <Products/>
      <Brands/>
    </div>
  )
}

export default LandingPage
