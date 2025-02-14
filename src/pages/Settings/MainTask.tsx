import React from "react";
import "./style.css";
import {
  initialTasksExploreItems,
  initialTaskExcutedItems,
} from "../../constant/component-items";
import { TaskExplore, TaskExecute } from "../../components/common";

export const MainTask = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <TaskExplore items={initialTasksExploreItems} />
      <TaskExecute items={initialTaskExcutedItems} />
    </div>
  );
};
