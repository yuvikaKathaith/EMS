import React from 'react';

const TaskList = ({key, data}) => {
  console.log(key)
  return (
    <div id="tasklist" className="p-7 flex flex-nowrap gap-6 justify-between h-full w-full overflow-x-auto">
      {data.tasks.map((task) => (
        <div className="bg-red-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
          <div className="flex flex-row justify-between">
            <h1 className="bg-red-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
              High
            </h1>
            <h1 className="font-semibold">{task.taskDate}</h1>
          </div>
          <div className="p-3">
            <h1 className="text-2xl font-bold">{task.taskTitle}</h1>
            <p className="text-sm mt-3">{task.taskDescription}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
