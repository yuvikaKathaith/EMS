import React, { useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage';

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [asignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const [task, setTask] = useState({});

  const handleCreateTask = (e) => {
      e.preventDefault()
      setTaskTitle('')
      setTaskDate('')
      setAssignTo('')
      setCategory('')
      setTaskDescription('')

      setTask({taskTitle, taskDate, asignTo, category, taskDescription, active: false, newTask: true, failed: false, completed: false})
      // console.log(task);

      const data = getLocalStorage('empData');
      console.log(data)
  }

  return (
    <div className='bg-[#1c1c1c] m-9 -mt-3 p-5 rounded-lg'>
        <form
          onSubmit={(e) => handleCreateTask(e)} 
          className='flex flex-row justify-between'>
          <div>
              <div>
                <h1 className='mb-1'>Task Title</h1>
                <input 
                  value={taskTitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value)
                  }}
                  className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' 
                  type='text' 
                  placeholder='For eg. Make a UI design' 
                />
              </div>
              <div>
                <h1 className='mb-1'>Date</h1>
                <input 
                  value={taskDate}
                  onChange={(e) => {
                    setTaskDate(e.target.value);
                  }}
                  className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' 
                  type='date' 
                />
              </div>
              <div>
                <h1 className='mb-1'>Assign To</h1>
                <input 
                  value={asignTo}
                  onChange={(e) => {
                    setAssignTo(e.target.value);
                  }}
                  className='mb-10 border border-gray-300 p-2 rounded-sm w-[600px] text-sm' 
                  type='text' 
                  placeholder='employee name' 
                />
              </div>
              <div>
                <h1 className='mb-1'>Category</h1>
                <input 
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  className='border border-gray-300 p-2 rounded-sm w-[600px] text-sm' 
                  type='text' 
                  placeholder='design, dev, etc.'
                />
              </div>
          </div>
          <div>
              <div>
                  <h1 className='mb-3 text-lg'>Description</h1>
                  <textarea 
                    value={taskDescription}
                    onChange={(e) => {
                      setTaskDescription(e.target.value);
                    }}
                    className='border border-gray-300 mb-3 p-3 w-[600px] h-[200px] rounded-sm' 
                    placeholder='For eg. Design a clean and modern user interface for a web application. Focus on user experience (UX) and usability, ensuring an intuitive layout with consistent typography, spacing, and color schemes.'
                  />
              </div>
              <button 
                className='w-[600px] h-10 rounded-sm text-center font-semibold bg-blue-500'>
                  Create Task
              </button>
          </div>
        </form>
    </div>
  )
}

export default CreateTask