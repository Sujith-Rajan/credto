"use client"
import React, { useState } from 'react'
import Container from './common/Container'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import Link from 'next/link';
import WhishListModal from '../modals/WhishListModal';
import CartModal from '../modals/CartModal';
import { SafeUser } from '../types';


interface NavbarProps {
   
    currentUser: SafeUser | null
}

const Navbar:React.FC<NavbarProps> = ({currentUser}) => {
    const [wishPopus, setWhishPopup] = useState(false)
    const [cartPopup, setCartPopup] = useState(false)
    return (
        <div className='w-full fixed z-10 py-4  bg-white'>
            <Container>
                <div className='flex justify-between w-full'>
                    <Link href="/" className='flex-1'>
                        <Image src="/logo.png" alt="logo image" 
                        width={134} height={48} className='bg-black cursor-pointer' />
                    </Link>

                    <div className='flex flex-1 gap-4 items-center'>
                        <div className=' w-full hidden md:flex '>
                            <input type="text" name='search' placeholder='What are you looking for?' 
                            className='border border-gray-300 p-2 placeholder:text-black w-full 
                            justify-between items-center focus:outline-none' />
                            <button className='bg-black text-white p-4'>
                                <IoSearch size={18} />
                            </button>
                        </div>
                        <div className='bg-gray-300 rounded-full p-1 cursor-pointer'>
                          {currentUser
                           ? 
                           <Image src={currentUser.image as string} width={30} height={30}
                            alt='user image' objectFit='contain' className='rounded-full'/> 
                           :
                           <FaUser />}  
                        </div>
                        <div className='bg-gray-300 rounded-full p-1 cursor-pointer'
                         onClick={() => setWhishPopup(true)}><FaHeart size={20}/></div>
                        <div className='bg-gray-300 rounded-full p-1 cursor-pointer' 
                        onClick={() => setCartPopup(true)}><FaShoppingCart size={20} /></div>
                    </div>
                </div>




                <div className=' flex md:hidden mt-2'>
                    <input type="text" name='search' placeholder='What are you looking for?' 
                    className='border border-gray-300 p-2 placeholder:text-black w-[300px] 
                    justify-between items-center focus:outline-none rounded-lg' />
                    <button className='bg-black text-white p-4 rounded-lg'>
                        <IoSearch size={18} />
                    </button>
                </div>
            </Container>
            {wishPopus && <WhishListModal setWhishPopup={() => setWhishPopup(false)} />}
            {cartPopup && <CartModal setCartPopup={() => setCartPopup(false)} />}
        </div>

    )
}

export default Navbar
