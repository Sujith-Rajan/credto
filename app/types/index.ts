import { Product, User} from '@prisma/client'

export type SafeUser = Omit<
User,
"createdAt" | "updatedAt" | "emailVerified"
> & {
    createdAt : string,
    updatedAt : string,
    emailVerified : string | null

}

export type SafeProduct = Omit<Product,"createdAt"> & {
    createdAt : string;
}