import React from 'react'

const Header = ({data}) => {
  return (
    <div className='flex flex-row justify-between p-10 h-full'>
        <div>
            <h1 className='text-xl font-semibold'>Hello</h1>
            <h1 className='text-4xl font-bold'>{data.firstName} 👋</h1>
        </div>
        <button className='mt-5 bg-red-700 w-26 h-10'>Log Out</button>
    </div>
  )
}

export default Header