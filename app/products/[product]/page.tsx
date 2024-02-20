
import React from 'react';
import getProductId from '@/app/actions/getProductId';
import SingleProductList from './SingleProductList';


interface IParams {
    product?: string;
}

interface SafeProduct {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    category: string;
    color: string[];
    inStock: boolean;
    price: number;
    offer: number;
    createdAt: Date;
    quantity: number; 
}




const SingleProduct: React.FC<{ params: IParams }> = async ({ params }) => {
    const productId = params.product;
    
   
    const singleProduct = await getProductId({ productId });

   
    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    
    const safeSingleProduct: SafeProduct = {
        ...singleProduct,
        quantity: singleProduct.quantity ?? 0, // Use 0 as default if quantity is null
    };

    return (
        <div className='h-auto pt-36 mb-8'>
       
            <SingleProductList singleProduct={safeSingleProduct} />
        </div>
    );
};

export default SingleProduct;
