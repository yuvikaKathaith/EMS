import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [authData, setAuthData] = useContext(AuthContext);

  const handleCreateTask = (e) => {
    e.preventDefault();

    const newTask = {
      taskTitle,
      taskDate,
      category,
      taskDescription,
      active: false,
      newTask: true,
      failed: false,
      completed: false
    };

    const updatedData = { ...authData };

    updatedData.empData = updatedData.empData.map((employee) => {
      if (employee.firstName.toLowerCase() === assignTo.toLowerCase()) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          taskCounts: {
            ...employee.taskCounts,
            newTask: employee.taskCounts.newTask + 1
          }
        };
      }
      return employee;
    });

    setAuthData(updatedData);
    localStorage.setItem("employees", JSON.stringify(updatedData.empData));

    setTaskTitle('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setTaskDescription('');
  };

  return (
    <div className='bg-[#1c1c1c] m-9 -mt-3 p-5 rounded-lg'>
      <form onSubmit={handleCreateTask} className='flex flex-row justify-between'>
        <div>
          <div>
            <h1 className='mb-1'>Task Title</h1>
            <input
              required
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm'
              type='text'
              placeholder='For eg. Make a UI design'
            />
          </div>
          <div>
            <h1 className='mb-1'>Date</h1>
            <input
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm'
              type='date'
            />
          </div>
          <div>
            <h1 className='mb-1'>Assign To</h1>
            <input
              required
              value={assignTo}
              onChange={(e) => setAssignTo(e.target.value)}
              className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm'
              type='text'
              placeholder='Employee name'
            />
          </div>
          <div>
            <h1 className='mb-1'>Category</h1>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className='border border-gray-300 p-2 rounded-sm w-[600px] text-sm'
              type='text'
              placeholder='Design, Dev, etc.'
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className='mb-3 text-lg'>Description</h1>
            <textarea
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
              className='border border-gray-300 mb-3 p-3 w-[600px] h-[200px] rounded-sm'
              placeholder='For eg. Design a clean and modern user interface...'
            />
          </div>
          <button className='w-[600px] h-10 rounded-sm text-center font-semibold bg-blue-500'>
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
