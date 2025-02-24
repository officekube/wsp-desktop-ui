import React from "react";
import "./style.css";
import {initialTaskExcutedItems, initialTasksExploreItems,} from "../../constant/component-items";
import {TaskExecute, TaskExplore} from "../../components/common";

export const MainTask = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <TaskExplore items={initialTasksExploreItems} />
      <TaskExecute items={initialTaskExcutedItems} />
    </div>
  );
};
