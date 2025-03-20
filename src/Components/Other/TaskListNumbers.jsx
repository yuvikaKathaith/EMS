import React from 'react'

const TaskListNumbers = ({data}) => {
    console.log(data)
  return (
    <div className='gap-5 p-7 flex flex-nowrap justify-between shrink-0'>
        <div className='text-white bg-blue-400 w-[400px] p-6 rounded-xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCounts.newTask}</h1>
            <h1 className='text-xl'>New Task</h1>
        </div>
        <div className='text-white bg-green-500 w-[400px] p-6 rounded-xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCounts.completed}</h1>
            <h1 className='text-xl'>Completed Task</h1>
        </div>
        <div className='text-white bg-purple-400 w-[400px] p-6 rounded-xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCounts.active}</h1>
            <h1 className='text-xl'>Accepted Task</h1>
        </div>
        <div className='text-white bg-red-600 w-[400px] p-6 rounded-xl font-semibold'>
            <h1 className='text-3xl'>{data.taskCounts.failed}</h1>
            <h1 className='text-xl'>Failed Task</h1>
        </div>
    </div>
  )
}

export default TaskListNumbers