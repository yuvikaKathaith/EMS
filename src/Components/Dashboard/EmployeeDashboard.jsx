import React from 'react'
import Header from '../Other/Header'
import TaskList from '../TaskList/TaskList'
import TaskListNumbers from '../Other/TaskListNumbers';

const EmployeeDashboard = ({data}) => {
    console.log(data);
    return (
        <div className='bg-[#1c1c1c] min-h-screen'>
            <Header data={data} />
            <TaskListNumbers data={data} />
            <TaskList key={data.id}  data={data} /> 
        </div>
    )
}

export default EmployeeDashboard