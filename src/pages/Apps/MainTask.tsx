import React from "react";
import "./style.css";
import {appsTaskExcutedItems, appsTasksExploreItems,} from "../../constant/component-items";
import {TaskExecute, TaskExplore} from "../../components/common";

export const MainTask = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      <TaskExplore items={appsTasksExploreItems} title="Explore Apps" />
      <TaskExecute items={appsTaskExcutedItems} title="Install App: DB Atlas" />
    </div>
  );
};
