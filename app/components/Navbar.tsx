import React from 'react'
import Container from './common/Container'
import Image from 'next/image'
import { IoSearch } from "react-icons/io5";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa"

const Navbar = () => {
    return (
        <div className='w-full fixed z-10 py-4  bg-white'>
            <Container>
                <div className='flex justify-between w-full'>
                    <div className='flex-1'>
                        <Image src="/logo.png" alt="logo image" width={134} height={48} className='bg-black cursor-pointer' />
                    </div>
                    <div className='flex flex-1 gap-4 items-center'>
                        <div className=' w-full hidden md:flex '>
                            <input type="text" name='search' placeholder='What are you looking for?' className='border border-gray-300 p-2 placeholder:text-black w-full justify-between items-center focus:outline-none' />
                            <button className='bg-black text-white p-4'>
                                <IoSearch size={18} />
                            </button>
                        </div>
                        <div className='bg-gray-300 rounded-full p-2 cursor-pointer'>
                            <FaUser />
                        </div>
                        <div className='bg-gray-300 rounded-full p-2 cursor-pointer'><FaHeart /></div>
                        <div className='bg-gray-300 rounded-full p-2 cursor-pointer'><FaShoppingCart /></div>


                    </div>

                </div>

                <div className=' w-full flex md:hidden mt-2'>
                    <input type="text" name='search' placeholder='What are you looking for?' className='border border-gray-300 p-2 placeholder:text-black w-full justify-between items-center focus:outline-none rounded-lg' />
                    <button className='bg-black text-white p-4 rounded-lg'>
                        <IoSearch size={18} />
                    </button>
                </div>
            </Container>
        </div>

    )
}

export default Navbar
