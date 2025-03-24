import React from 'react'

const Header = (props) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')  
    props.changeUser('') 
  }
  return (
    <div className='flex flex-row justify-between p-10 h-full shadow-md'>
      <div>
        <h1 className='text-2xl font-semibold text-gray-700'>Hello</h1>
        <h1 className='text-4xl font-bold text-gray-900'>{props.data.firstName} 👋</h1>
      </div>
      <button 
        onClick={handleLogout} 
        className='mt-5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header