import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-white p-6 rounded-lg m-9 dark:bg-gray-900 h-full">
      <div className="bg-blue-500 h-16 text-lg font-bold py-4 px-6 flex justify-between items-center rounded-lg mb-4 sticky top-0 z-10">
        <h2 className="w-1/5 text-center text-white text-xl font-semibold">Employee Name</h2>
        <h3 className="w-1/5 text-center text-white text-xl font-semibold">New Task</h3>
        <h5 className="w-1/5 text-center text-white text-xl font-semibold">Active Task</h5>
        <h5 className="w-1/5 text-center text-white text-xl font-semibold">Completed</h5>
        <h5 className="w-1/5 text-center text-white text-xl font-semibold">Failed</h5>
      </div>

      <div>
        {userData.empData.map((employee, idx) => (
          <div
            key={idx}
            className="bg-gray-100 border-2 border-green-300 h-16 mb-3 text-md py-3 px-6 flex justify-between items-center rounded-lg hover:bg-gray-200 transition-all dark:bg-gray-900 dark:text-white dark:hover:bg-gray-950"
          >
            <h2 className="w-1/5 text-black text-center text-xl font-semibold dark:text-white">{employee.firstName}</h2>
            <h5 className="w-1/5 text-blue-400 text-center text-xl font-semibold">{employee.taskCounts.newTask}</h5>
            <h5 className="w-1/5 text-yellow-400 text-center text-xl font-semibold">{employee.taskCounts.active}</h5>
            <h5 className="w-1/5 text-green-400 text-center text-xl font-semibold">{employee.taskCounts.completed}</h5>
            <h5 className="w-1/5 text-red-400 text-center text-xl font-semibold">{employee.taskCounts.failed}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
