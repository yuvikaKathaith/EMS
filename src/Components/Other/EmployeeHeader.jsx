import React, { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const EmployeeHeader = (props) => {
  const handleLogout = () => {
    localStorage.setItem("loggedInUser", '')  
    props.changeUser('') 
  }

  const [darkMode, setDarkMode] = useState('')
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      darkMode ? "dark" : "light"
    );
  }, [darkMode]);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className='flex flex-row justify-between p-10 h-full shadow-md dark:bg-gray-900'>
        <div>
          <h1 className='text-2xl font-semibold text-gray-700 dark:text-white'>Hello</h1>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-white'>{props.data.firstName} 👋</h1>
        </div>
        <div className='flex flex-row items-center gap-6'>
          <div className='flex flex-row gap-3 mt-5'>
            <button
              onClick={handleDarkMode}
              className={darkMode? "relative w-14 h-7 flex items-center justify-start bg-slate-50 rounded-full shadow-md transition-all duration-300 px-1 dark:bg-slate-50" : "relative w-14 h-7 flex items-center justify-end bg-gray-900 rounded-full shadow-md transition-all duration-300 px-1 dark:bg-[#373737]"}
            >
              <div
                className={darkMode? 'w-6 h-6 flex items-center justify-center rounded-full bg-gray-700 shadow-md transform transition-all duration-300 dark:bg-gray-700 ' : 'w-6 h-6 flex items-center justify-center rounded-full bg-slate-500 dark:bg-slate-600 shadow-md transform transition-all duration-300'}
              >
                {darkMode? <FaMoon /> : <FaSun />}
              </div>
            </button>
          </div>
          <button 
            onClick={handleLogout} 
            className='mt-5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition'
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}

export default EmployeeHeader