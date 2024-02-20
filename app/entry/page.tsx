import React from 'react'
import getCurrentUser from '../actions/getCurrentUser'
import LandingPage from '../home/page'
import Login from '../login/page'

const Entry = async () => {
    const currentUser = await getCurrentUser()
  return (
    <>
      {currentUser ?<LandingPage/>:<Login/>}
    </>
  )
}

export default Entry
