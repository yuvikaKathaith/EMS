import React from 'react'

const FailedTask = ({task}) => {
  return (
    <div className="bg-transparent border-2 border-red-500  text-white w-[500px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
            <h1 className="bg-red-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
                {task.priority || "High"}
            </h1>
            <h1 className="font-semibold">{task.taskDate}</h1>
        </div>
        <div className="p-3">
            <h1 className="text-2xl font-bold">{task.taskTitle}</h1>
            <p className="text-sm mt-3">{task.taskDescription}</p>
        </div>
        <div className='mt-6 flex items-center justify-center'>
            <button className='w-[100px] bg-red-500 rounded font-medium py-1 px-2 text-xs'>Failed</button>
        </div>
    </div>
  )
}

export default FailedTask