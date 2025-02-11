import React from "react";
import "./style.css";
import {
    initialTasksExploreItems,
    initialTaskExcutedItems,
    welcomeTasksItems
} from "../../constant/component-items";
import {TaskExplore, TaskExcute, TaskWelcomeView} from "../../components/common";

export const MainTask = () => {
    return (
        <div className="w-full h-screen flex flex-col">
            <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col gap-10 p-4">
                    <TaskWelcomeView items={welcomeTasksItems} />
                    <TaskExplore items={initialTasksExploreItems} />
                    <TaskExcute items={initialTaskExcutedItems} />
                </div>
            </div>
        </div>
    );
};

export default MainTask;