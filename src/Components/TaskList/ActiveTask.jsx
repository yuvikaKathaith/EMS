import React from 'react'

const ActiveTask = ({ task }) => {
  return (
    <div className="border-2 border-yellow-400 text-gray-900 dark:text-white w-[500px] h-[300px] p-4 rounded-lg shadow-md shrink-0">
      <div className="flex flex-row justify-between">
        <h1 className="bg-red-200 text-red-700 font-semibold h-7 text-sm w-16 flex justify-center items-center rounded-lg">
          {task.priority || "High"}
        </h1>
        <h1 className="font-semibold text-gray-700 dark:text-white">{task.taskDate}</h1>
      </div>
      <div className="p-3">
        <h1 className="text-2xl font-bold">{task.taskTitle}</h1>
        <p className="text-sm mt-3 text-gray-700 dark:text-gray-200">{task.taskDescription}</p>
      </div>
      <div className="flex justify-between mt-6">
        <button className="bg-green-400 text-white rounded font-medium py-1 px-2 text-xs shadow-sm hover:bg-green-500 transition">
          Mark as Completed
        </button>
        <button className="bg-red-400 text-white rounded font-medium py-1 px-2 text-xs shadow-sm hover:bg-red-500 transition">
          Mark as Failed
        </button>
      </div>
    </div>
  )
}

export default ActiveTask
