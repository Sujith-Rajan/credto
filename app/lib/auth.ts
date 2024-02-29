import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import prisma from "../lib/prismaClient";
import { NextAuthOptions} from "next-auth";
import { Adapter } from "next-auth/adapters";


export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma) as Adapter,
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
            
        }),
        Credentials({
            credentials: {
              otp: { label: "OTP", type: "text" }, 
            },
            async authorize(credentials, req) {
              if (credentials && credentials.otp === "2024") {
               
                return {
                  id: "1",
                  name: "John Doe",
                  email: "john.doe@example.com",
                  image: "",
                };
              }
      
              return null;
            },
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


