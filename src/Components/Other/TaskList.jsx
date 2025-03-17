import React from 'react';

const TaskList = () => {
  return (
    <div id="tasklist" className="p-7 flex flex-nowrap gap-6 justify-between h-full w-full overflow-x-auto">
      <div className="bg-red-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-red-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            High
          </h1>
          <h1 className="font-semibold">20 Feb 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Submit Report</h1>
          <p className="text-sm mt-3">Complete and submit the monthly financial report.</p>
        </div>
      </div>

      <div className="bg-yellow-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-yellow-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            Medium
          </h1>
          <h1 className="font-semibold">05 Mar 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Update Documentation</h1>
          <p className="text-sm mt-3">Review and update the API documentation.</p>
        </div>
      </div>

      <div className="bg-green-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-green-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            Low
          </h1>
          <h1 className="font-semibold">22 Apr 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Backup Database</h1>
          <p className="text-sm mt-3">Create a backup of all company databases.</p>
        </div>
      </div>

      <div className="bg-yellow-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-yellow-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            Medium
          </h1>
          <h1 className="font-semibold">15 Mar 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Prepare Presentation</h1>
          <p className="text-sm mt-3">Design slides for the upcoming client meeting.</p>
        </div>
      </div>

      <div className="bg-green-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-green-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            Low
          </h1>
          <h1 className="font-semibold">10 Apr 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Organize Files</h1>
          <p className="text-sm mt-3">Sort and archive important project documents.</p>
        </div>
      </div>


      <div className="bg-red-400 text-white w-[300px] h-[300px] p-4 rounded-lg shrink-0">
        <div className="flex flex-row justify-between">
          <h1 className="bg-red-700 font-semibold text-white h-7 text-sm w-16 flex justify-center items-center rounded-lg">
            High
          </h1>
          <h1 className="font-semibold">28 Feb 2025</h1>
        </div>
        <div className="p-3">
          <h1 className="text-2xl font-bold">Fix Critical Bug</h1>
          <p className="text-sm mt-3">Resolve the login authentication issue ASAP.</p>
        </div>
      </div>
      
    </div>
  );
};

export default TaskList;
