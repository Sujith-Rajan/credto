import React from 'react'
import { IconType } from 'react-icons'

type Props = {
    icon:IconType;
  
}

const Icon = ({icon: Icon}:Props) => {
  return (
    <div className='border border-gray-500 p-2 rounded-md cursor-pointer'>
      <Icon size={18}/>
    </div>
  )
}

export default Icon
