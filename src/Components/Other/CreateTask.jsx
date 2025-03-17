import React from 'react'

const CreateTask = () => {
  return (
    <div className='flex flex-row justify-between bg-[#1c1c1c] m-9 -mt-3 p-5 rounded-lg'>
        <div className=''>
            <h1 className='mb-1'>Task Title</h1>
            <input className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' type='text' placeholder='For eg. Make a UI design' />
            <h1 className='mb-1'>Date</h1>
            <input className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' type='date' />
            <h1 className='mb-1'>Assign To</h1>
            <input className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' type='text' placeholder='employee name' />
            <h1 className='mb-1'>Category</h1>
            <input className='border border-gray-300 p-2 rounded-sm w-[600px] text-sm' type='text' placeholder='design, dev, etc.'/>
        </div>
        <div>
            <div>
                <h1 className='mb-3 text-lg'>Description</h1>
                <textarea className='border border-gray-300 mb-3 p-3 w-[600px] h-[200px]' placeholder='For eg. Design a clean and modern user interface for a web application. Focus on user experience (UX) and usability, ensuring an intuitive layout with consistent typography, spacing, and color schemes.'/>
            </div>
            <button className='w-[600px] h-8 rounded-sm text-center font-semibold bg-emerald-600'>Create Task</button>
        </div>
    </div>
  )
}

export default CreateTask