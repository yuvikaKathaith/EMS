import React, { useState } from 'react'

const Header = () => {
  // const [username, setUsername] = useState('');

  // if(!data){
  //   setUsername('Admin');
  // }
  // else{
  //   setUsername(data.firstName);
  // }

  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')
    window.location.reload()
  }

  return (
    <div className='flex flex-row justify-between p-10 h-full'>
        <div>
            <h1 className='text-2xl font-semibold'>Hello</h1>
            <h1 className='text-4xl font-bold'>username 👋</h1>
        </div>
        <button onClick={handleLogout} className='mt-5 bg-red-700 w-26 h-10'>Log Out</button>
    </div>
  )
}

export default Header