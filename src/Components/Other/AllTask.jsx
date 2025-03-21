import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const { empData } = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded-lg m-9 text-lg font-medium">
      <div className="bg-red-900 h-14 text-lg font-semibold py-2 px-4 flex justify-between items-center rounded-lg mb-3 sticky top-0 z-10">
        <h2 className="w-1/5">Employee Name</h2>
        <h3 className="w-1/5">New Task</h3>
        <h5 className="w-1/5">Active Task</h5>
        <h5 className="w-1/5">Completed</h5>
        <h5 className="w-1/5">Failed</h5>
      </div>

      <div>
        {empData.map((employee, idx) => (
            <div key={idx} className="bg-black border-2 border-green-300 h-12 mb-2 text-md py-2 px-4 flex justify-between items-center rounded-lg">
              <h2 className="w-1/5">{employee.firstName}</h2>
              <h5 className="w-1/5 text-blue-400">{employee.taskCounts.newTask}</h5>
              <h5 className="w-1/5 text-yellow-400">{employee.taskCounts.active}</h5>
              <h5 className="w-1/5 text-green-400">{employee.taskCounts.completed}</h5>
              <h5 className="w-1/5 text-red-400">{employee.taskCounts.failed}</h5>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AllTask;
