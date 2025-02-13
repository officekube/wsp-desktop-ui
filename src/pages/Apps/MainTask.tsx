import React from "react";
import "./style.css";
import {
  appsTasksExploreItems,
  appsTaskExcutedItems,
} from "../../constant/component-items";
import { TaskExplore, TaskExecute } from "../../components/common";

export const MainTask = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <TaskExplore items={appsTasksExploreItems} title="Explore Apps" />
      <TaskExecute items={appsTaskExcutedItems} title="Install App: DB Atlas" />
    </div>
  );
};
