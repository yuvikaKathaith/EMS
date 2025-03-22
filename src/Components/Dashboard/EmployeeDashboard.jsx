import React from 'react'
import Header from '../Other/Header'
import TaskCard from '../TaskList/TaskCard'
import TaskListNumbers from '../Other/TaskListNumbers';

const EmployeeDashboard = (props) => {
    return (
        <div className='bg-[#1c1c1c] min-h-screen'>
            <Header data={props.data} changeUser={props.changeUser} />
            <TaskListNumbers data={props.data} />
            <TaskCard data={props.data} /> 
        </div>
    )
}

export default EmployeeDashboard