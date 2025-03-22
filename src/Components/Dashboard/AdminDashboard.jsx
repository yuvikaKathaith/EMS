import React from 'react'
import Header from '../Other/Header.jsx'
import CreateTask from '../Other/CreateTask.jsx'
import AllTask from '../Other/AllTask.jsx'

const AdminDashboard = (props) => {
  return (
    <div>
        <Header changeUser={props.changeUser} />
        <CreateTask />
        <AllTask />
    </div>
  )
}
export default AdminDashboard