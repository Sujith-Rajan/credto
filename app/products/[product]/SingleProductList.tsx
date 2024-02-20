"use client"
import Container from '@/app/components/common/Container';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { products } from '@/app/data/item';
import { SafeProduct } from '@/app/types';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '@/app/redux/cartSlice';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import MessageModal from '@/app/modals/MessageModal';
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa"
import { wishProduct, wishRemoveProduct } from '@/app/redux/wishListSlice';

interface SingleProductListProps {
    singleProduct?: SafeProduct | null;
}

type Res = "inc" | "dec"


const SingleProductList: React.FC<SingleProductListProps> = ({ singleProduct }) => {

    const router = useRouter()
    const dispatch = useDispatch()
    const [color, setColor] = useState("")
    const [cartCount, setCartCount] = useState(1)
    const [message, setMessage] = useState(false)
    const [inWishlist, setInWishlist] = useState(false);



    const cartChange = (res: Res) => {
        if (res === 'inc') {
            setCartCount(cartCount + 1)
        }
        else if (res === 'dec') {
            cartCount > 1 && setCartCount(cartCount - 1)
        }
    }


    const handleAddToCart = () => {
        dispatch(
            addProduct({ ...singleProduct, quantity: cartCount, color })
        )
        toast.success("New Product Added To Cart")
        setMessage(true)
    }

    const { products } = useSelector((state) => state.wish)

    useEffect(() => {
        if (singleProduct) {
            const isInWishlist = products.find((product) => singleProduct.id)
            setInWishlist(isInWishlist);
        }
    }, [singleProduct,products]);
    const handleWishListToggle = () => {
        if (inWishlist) {
            dispatch(wishRemoveProduct(singleProduct.id)); // Remove from wishlist
            toast.success("Item removed from wishlist");
        } else {
            dispatch(wishProduct(singleProduct)); // Add to wishlist
            toast.success("Item added to wishlist");
        }
        setInWishlist(!inWishlist); // Toggle inWishlist state
    };


    return (
        <div className='h-auto  mb-8'>
            <Container>

                <div className='w-full flex flex-wrap gap-2 md:gap-4 justify-evenly' >
                    <div className='flex flex-col items-center md:gap-4'>
                        <div className='w-[220px] h-[200px] relative lg:w-[400px] lg:h-[400px]'>
                            <Image src={singleProduct?.imageSrc as string} alt="single product image" fill objectFit='contain' />
                            <div className='absolute right-0 '>
                                {inWishlist ? (
                                    <FaHeart
                                        size={22}
                                        title="Remove from wishlist"
                                        className='fill-pink-600'
                                        onClick={handleWishListToggle}
                                    />
                                ) : (
                                    <FaRegHeart
                                        size={22}
                                        title="Add to wishlist"
                                        onClick={handleWishListToggle}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            {singleProduct?.category === "Mobile" &&
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
                        <p className='text-xs text-gray-400 cursor-pointer'>&#9734;&#9734;&#9734;&#9734;&#9734;(There is no review yet)</p>
                        <p className='text-xs md:text-lg'><span>OMR</span>{" "}<span
                            className='font-bold'>{singleProduct?.offer}</span>{" "}<s>{singleProduct?.price}</s></p>
                        <p>{singleProduct?.description}</p>
                        <div>
                            {(singleProduct?.category === "Mobile" || singleProduct?.category === 'Laptop') &&
                                <>
                                    <p className='font-bold'>Internel Memory</p>
                                    <div className='flex gap-1 mb-8'>
                                        <button className='border border-black p-2 hover:bg-black hover:text-white'>256 GB</button>
                                        <button className='border border-black p-2 hover:bg-black  hover:text-white'>512 GB</button>
                                    </div>
                                </>
                            }
                            <hr />
                            <div className='flex  gap-1 bg-pink'>
                                <span>color:</span>
                                {singleProduct?.color?.map((c) => (
                                    <div className="w-5 h-5 rounded-full cursor-pointer border border-black "
                                        style={{
                                            backgroundColor: c,
                                            border: color === c ? '2px solid black' : ""
                                        }} key={c} onClick={() => setColor(c)}></div>
                                ))}

                            </div>
                            <hr />
                            <div className='flex flex-col md:flex-row gap-1 md:gap-4 mt-8'>
                                <div className='flex items-center'>
                                    <button className='border border-gray-400 p-2' onClick={() => cartChange('inc')}>+</button>
                                    <div className='md:p-2'>{cartCount}</div>
                                    <button className='border border-gray-400 p-2' onClick={() => cartChange('dec')}>-</button>
                                </div>
                                <button className='bg-black p-2 md:p-4 text-white' onClick={handleAddToCart}>ADD TO CART</button>
                            </div>
                        </div>

                    </div>
                </div>

            </Container>
            {message && <MessageModal setMessage={() => setMessage(false)} />}
        </div>
    );
};

export default SingleProductList;
