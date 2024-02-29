import { clearSession } from '@/app/redux/otpSlice';
import { signOut } from 'next-auth/react';
import React from 'react'
import { FiLogOut } from "react-icons/fi";
import { useDispatch } from 'react-redux';

const LogButton = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=>{signOut();dispatch(clearSession())}} title='Logout'><FiLogOut /></button>
    </div>
  )
}

export default LogButton
