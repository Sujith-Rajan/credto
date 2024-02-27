import { Product, User} from '@prisma/client'

export type SafeUser = Omit<User, "emailVerified"> & {
    emailVerified: string | null;
  };

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

