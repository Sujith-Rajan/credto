import prisma from "../lib/prismaClient"

export const getProducts = async () => {
    try{
            const products = await prisma.product.findMany({
                orderBy: {
                    createdAt: 'desc'
                }
            })
            const safeProducts = products.map((product) => ({
                ...product,
                createdAt: product.createdAt.toISOString(),
            }))
            return safeProducts
    }
    catch(error: any){
        throw new Error(error)
    }
}