import React from "react";
import AdminHeader from "../Other/AdminHeader.jsx";
import CreateTask from "../Other/CreateTask.jsx";
import AllTask from "../Other/AllTask.jsx";

const AdminDashboard = (props) => {
  return (
    <div>
      <AdminHeader changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
    </div>
  );
};
export default AdminDashboard;
