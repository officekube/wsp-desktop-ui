import React, {FC} from "react";
import type {BlockItemType} from "../Block";
import {Block} from "../Block";
import "./style.css";

interface TaskCreateNewTaskProps {
  items: BlockItemType;
}

export const TaskCreateNewTask: FC<TaskCreateNewTaskProps> = ({ items }) => {
  return (
    <Block title={items.title}>
      <div className="w-full border border-t-0 border-gray-700 overflow-x-hidden">
        <p className="text-base text-white/60 p-4">
          {items.content}
        </p>
        <div className="flex flex-col items-center justify-center h-24">
          <button className="px-6 py-2 text-white/60 border border-gray-700 hover:bg-gray-800 transition-colors duration-200">
            Create
          </button>
        </div>
      </div>
    </Block>
  );
};