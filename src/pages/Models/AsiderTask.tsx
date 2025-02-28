import React from "react";
import {TaskRunTask} from "../../components/common";
import {initialInstalledModelItems} from "../../constant/component-items";

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
                    <TaskRunTask items={initialInstalledModelItems} title="Installed Models" />
                </div>
            </div>
        </div>
    );
};

export default AsiderTask;