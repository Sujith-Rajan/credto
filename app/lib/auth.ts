import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import prisma from "../lib/prismaClient";
import { AuthOptions, getServerSession} from "next-auth";
import { Adapter } from "next-auth/adapters";


export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            
        }),
    
    ],
    pages: {
        signIn: '/',
    },
    debug: process.env.NODE_ENV === 'development',
    session:{
        strategy: "jwt"
    },
    secret:  process.env.NEXTAUTH_SECRET,


}

export const getAuthSession = () => getServerSession(authOptions); 
