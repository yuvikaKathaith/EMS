import React from 'react';
import ActiveTask from './ActiveTask';
import CompletedTask from './CompletedTask';
import FailedTask from './FailedTask';
import NewTask from './NewTask';

const TaskCard = ({data}) => {
  return (
    <div id="tasklist" className="p-7 flex flex-nowrap gap-6 justify-start h-full w-full overflow-x-auto">
      {data.tasks.map((task, idx) => {
          if(task.active) return <ActiveTask key={idx} task={task} />
          if(task.newTask) return <NewTask key={idx} task={task} />
          if(task.completed) return <CompletedTask key={idx} task={task} />
          if(task.failed) return <FailedTask key={idx} task={task} />
      })}
    </div>
  );
};

export default TaskCard;
