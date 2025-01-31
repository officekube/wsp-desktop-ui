import React from "react";
import { TaskCreateNewTask, TaskRunTask } from "../../components/common";

export const AsiderTask = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <div className="flex flex-col items-center justify-center w-full h-[200px]">
        <span className="text-white/60 text-base font-semibold">
          YT Tutorial Gallery
        </span>
      </div>
      <TaskCreateNewTask />
      <TaskRunTask />
    </div>
  );
};
