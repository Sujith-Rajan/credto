
import React from 'react';
import getProductId from '@/app/actions/getProductId';
import SingleProductList from './SingleProductList';

interface IParams {
    product?: string;
}

const SingleProduct: React.FC<{ params: IParams }> = async ({params}) => {
    const productId = params.product;
    const singleProduct = await getProductId({productId})
   
    return (
        <div className='h-auto pt-36 mb-8'>
            <SingleProductList singleProduct={singleProduct}/>
        </div>
    );
};

export default SingleProduct;
