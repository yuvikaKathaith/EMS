import React from 'react'
import Header from '../Other/Header.jsx'
import CreateTask from '../Other/CreateTask.jsx'
import AllTask from '../Other/AllTask.jsx'

const AdminDashboard = () => {
  return (
    <div>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}
export default AdminDashboard