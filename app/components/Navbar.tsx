"use client"
import React, { useState } from 'react'
import Container from './common/Container'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"
import Link from 'next/link';
import WhishListModal from '../modals/WhishListModal';
import CartModal from '../modals/CartModal';
import { useSelector } from 'react-redux';
import LogButton from './common/LogButton';



interface RootState {
    cart: {
        products: {
            id: string;
            title: string;
            imageSrc: string;
            offer: number;
            quantity: number;
        }[];
        total: number;
        quantity: number;
    };
}




const Navbar = ({ image }: { image?: string }) => {

    const { products } = useSelector((state: RootState) => state.cart)

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
                            {image
                                ?
                                <Image src={image} width={30} height={30}
                                    alt='user image' objectFit='contain' className='rounded-full' />
                                :
                                <FaUser />}
                        </div>
                                <LogButton/>
                        <div className='bg-gray-300 rounded-full p-1 cursor-pointer'
                            onClick={() => setWhishPopup(true)}><FaHeart size={20} /></div>

                        <div className='bg-gray-300 rounded-full p-1 cursor-pointer relative'
                            onClick={() => setCartPopup(true)}><FaShoppingCart size={20} />
                            {products.length > 0 && <span className='w-auto h-auto p-1 flex items-center 
                            justify-center absolute -top-5 right-0 bg-red-400 text-xs 
                        rounded-full text-white font-bold'><p>{products.length}</p></span>}

                        </div>

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
