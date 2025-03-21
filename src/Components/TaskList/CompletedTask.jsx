import React from 'react'

const CompleteTask = () => {
  return (
    <div className="bg-red-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
            <h1 className="bg-red-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
                High
            </h1>
            <h1 className="font-semibold">20 Feb 2025</h1>
        </div>
        <div className="p-3">
            <h1 className="text-2xl font-bold">Submit Report</h1>
            <p className="text-sm mt-3">Complete and submit the monthly financial report.</p>
        </div>
        <div className='mt-6 flex items-center justify-center'>
            <button className='w-[100px] bg-green-600 rounded font-medium py-1 px-2 text-xs'>Complete</button>
        </div>
    </div>
  )
}

export default CompleteTask