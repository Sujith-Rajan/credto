import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className='max-w-[1500px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
      {children}
    </div>
  )
}

export default Container
