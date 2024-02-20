import { signOut } from 'next-auth/react';
import React from 'react'
import { FiLogOut } from "react-icons/fi";

const LogButton = () => {
  return (
    <div>
      <button onClick={()=>signOut()}><FiLogOut /></button>
    </div>
  )
}

export default LogButton
