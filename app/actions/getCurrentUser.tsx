import { getServerSession } from "next-auth";
import { authOptions } from "../lib/auth";

export async function getSession() {
    return await getServerSession(authOptions)
}

const getCurrentUser = async () => {
    try {
        const session = await getSession()

        if(!session?.user?.email){
            return null
        }
        const currentUser = await prisma?.user.findUnique({
            where: {
                email: session.user.email as string
            },
            
        })
       
        if(!currentUser){
            return null
        }
       
        return {
            ...currentUser,
         
            emailVerified:
            currentUser.emailVerified?.toISOString() || null
        }
       
       
       
      
    }
    catch(error){
        return null
    }
}

export default getCurrentUser