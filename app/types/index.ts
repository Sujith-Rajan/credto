import { Product, User} from '@prisma/client'

export type SafeUser = Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt : string,
    updatedAt : string,
    emailVerified : string | null

}

export interface SafeProduct {
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
    quantity: number | null; 
}