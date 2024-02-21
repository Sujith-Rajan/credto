import React from 'react'
import LandingPage from '../home/page'
import Login from '../login/page'
import { getServerSession } from 'next-auth'
import { authOptions } from '../lib/auth'

const Entry = async () => {
    const session = await getServerSession(authOptions)
  return (
    <>
      {session ?<LandingPage/>:<Login/>}
    </>
  )
}

export default Entry
