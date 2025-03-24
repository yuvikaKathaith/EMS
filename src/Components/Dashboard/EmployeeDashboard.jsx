import React from "react";
import EmployeeHeader from "../Other/EmployeeHeader.jsx";
import TaskCard from "../TaskList/TaskCard";
import TaskListNumbers from "../Other/TaskListNumbers";

const EmployeeDashboard = (props) => {
  return (
    <div className="bg-white min-h-screen">
      <EmployeeHeader data={props.data} changeUser={props.changeUser} />
      <TaskListNumbers data={props.data} />
      <TaskCard data={props.data} />
    </div>
  );
};

export default EmployeeDashboard;
