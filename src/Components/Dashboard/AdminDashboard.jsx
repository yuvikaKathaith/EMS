import React from "react";
import AdminHeader from "../Other/AdminHeader.jsx";
import CreateTask from "../Other/CreateTask.jsx";
import AllTask from "../Other/AllTask.jsx";

const AdminDashboard = (props) => {
  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <AdminHeader changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};
export default AdminDashboard;
