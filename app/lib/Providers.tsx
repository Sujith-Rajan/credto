"use client"
import {SessionProvider} from 'next-auth/react'


interface ChildrenProps {
    children: React.ReactNode
}

 const AuthProvider:React.FC<ChildrenProps> = ({children}) => {

    return(
        <SessionProvider>{children}</SessionProvider>
    )
}

export default AuthProvider