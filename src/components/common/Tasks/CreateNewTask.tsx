import React from "react";
import { Block } from "../Block";
import "./style.css";

export const TaskCreateNewTask = () => {
  return (
    <Block title="Create New Task">
      <div className="w-full border border-t-0 border-[#3a3a3a] overflow-x-hidden">
        <p className="text-base text-white/60 p-4">
          Click Create to start creating a skeleton for your own automation task
        </p>
        <div className="flex flex-col items-center justify-center h-[100px]">
          <button className="px-6 py-2 text-white/60 border border-[#3a3a3a] hover:bg-[#2C2C2C] transition-all ease-in-out duration-300">
            Create
          </button>
        </div>
      </div>
    </Block>
  );
};
