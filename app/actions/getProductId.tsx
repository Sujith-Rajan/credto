import prisma from "../lib/prismaClient";

interface Params {
    productId?: string
}

export default async function getProductId(params:Params) {
    
    try {
        const {productId} = params;
       
        const product = await prisma.product.findUnique({
            where:{
                id:productId,
            },
        })
        if(!product){
            return null
        }
        return {
            ...product,
            createdAt: product.createdAt.toString(),
           
        }
    }
    catch(error: any){
        throw new Error(error)
    }
}