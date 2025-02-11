import React from "react";
import { TaskCreateNewTask, TaskRunTask } from "../../components/common";

export const AsiderTask = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="w-full flex-none py-8">
        <div className="flex items-center justify-center">
          <span className="text-white/60 text-base font-semibold">
            YT Tutorial Gallery
          </span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex flex-col items-center gap-10 p-4">
          <TaskCreateNewTask />
          <TaskRunTask />
        </div>
      </div>
    </div>
  );
};

export default AsiderTask;