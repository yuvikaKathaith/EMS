import React from 'react'

const TaskListNumbers = ({ data }) => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-10 bg-white'>
      <div className='bg-blue-100 text-blue-800 shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition'>
        <h1 className='text-4xl font-bold'>{data.taskCounts.newTask}</h1>
        <h1 className='text-lg font-medium'>New Task</h1>
      </div>
      <div className='bg-green-100 text-green-800 shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition'>
        <h1 className='text-4xl font-bold'>{data.taskCounts.completed}</h1>
        <h1 className='text-lg font-medium'>Completed Task</h1>
      </div>
      <div className='bg-purple-100 text-purple-800 shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition'>
        <h1 className='text-4xl font-bold'>{data.taskCounts.active}</h1>
        <h1 className='text-lg font-medium'>Accepted Task</h1>
      </div>
      <div className='bg-red-100 text-red-800 shadow-md rounded-xl p-6 text-center transform hover:scale-105 transition'>
        <h1 className='text-4xl font-bold'>{data.taskCounts.failed}</h1>
        <h1 className='text-lg font-medium'>Failed Task</h1>
      </div>
    </div>
  )
}

export default TaskListNumbers;
