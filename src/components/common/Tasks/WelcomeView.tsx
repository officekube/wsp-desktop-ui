import React, {FC} from "react";
import type {BlockItemType} from "../Block";
import {Block} from "../Block";

interface TaskWelcomeProps {
  items: BlockItemType[];
}

export const TaskWelcomeView: FC<TaskWelcomeProps> = ({ items }) => {
  return (
    <Block title="Welcome">
      <div className="w-full py-4 px-2 border border-t-0 border-[#3a3a3a] overflow-x-hidden overflow-y-scroll">
        <div className="grid grid-cols-4 gap-10 mt-4">
          {items.map((item, index) => (
            <Block key={index} title={item.title}>
              <textarea
                value={item.content}
                className="w-full h-40 overflow-y-auto overflow-x-hidden bg-transparent text-white/60 p-4 outline-none border border-t-0 border-[#3a3a3a]"
                disabled
              />
            </Block>
          ))}
        </div>
      </div>
    </Block>
  );
};
