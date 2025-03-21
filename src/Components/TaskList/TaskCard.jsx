import React from 'react';
import ActiveTask from './ActiveTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskList = ({data, idx}) => {
  return (
    <div id="tasklist" className="p-7 flex flex-nowrap gap-6 justify-start h-full w-full overflow-x-auto">
      {data.tasks.map((task) => {
          if(task.active) return <ActiveTask key={idx} />
          if(task.newTask) return <NewTask key={idx} />
          if(task.completed) return <CompletedTask key={idx} />
          if(task.failed) return <FailedTask key={idx} />
      })}
    </div>
  );
};

export default TaskList;
