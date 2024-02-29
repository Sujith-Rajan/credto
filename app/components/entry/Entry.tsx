
import LandingPage from '../home/LandingPage'
import Login from '../login/Login'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/lib/auth'


const Entry = async () => {

  const session = await getServerSession(authOptions)
 
   
  return (
    <>
    {session
    ?
    <LandingPage/>
    :
    <Login/>
    }
     
    
    </>
  )
}

export default Entry
