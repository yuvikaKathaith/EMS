import React from 'react'
import EmpDashHeader from '../Other/Header'
import TaskList from '../Other/TaskList'

const EmployeeDashboard = () => {
    return (
        <div className='bg-[#1c1c1c] min-h-screen'>
            <EmpDashHeader />
            <div className='gap-5 p-7 flex flex-nowrap justify-between shrink-0'>
                <div className='text-white bg-blue-400 w-[400px] p-6 rounded-xl font-semibold'>
                    <h1 className='text-3xl'>1</h1>
                    <h1 className='text-xl'>New Task</h1>
                </div>
                <div className='text-white bg-green-500 w-[400px] p-6 rounded-xl font-semibold'>
                    <h1 className='text-3xl'>3</h1>
                    <h1 className='text-xl'>Completed Task</h1>
                </div>
                <div className='text-white bg-purple-400 w-[400px] p-6 rounded-xl font-semibold'>
                    <h1 className='text-3xl'>0</h1>
                    <h1 className='text-xl'>Accepted Task</h1>
                </div>
                <div className='text-white bg-red-600 w-[400px] p-6 rounded-xl font-semibold'>
                    <h1 className='text-3xl'>0</h1>
                    <h1 className='text-xl'>Failed Task</h1>
                </div>
            </div>
            <TaskList />
        </div>
    )
}

export default EmployeeDashboard