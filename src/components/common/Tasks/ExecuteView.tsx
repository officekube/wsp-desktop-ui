import React, { FC } from "react";
import { Block } from "../Block";
import { TabsGroup } from "../TabsGroup";
import type { TabsGroupItemType } from "../TabsGroup";

interface TaskExecuteProps {
  items: TabsGroupItemType[];
  title?: string;
}

export const TaskExecute: FC<TaskExecuteProps> = ({
  items,
  title = "Execute Task: Generate Documentation"
}) => {
  return (
    <Block title={title}>
      <div className="w-full border border-t-0 border-gray-700 overflow-x-hidden">
        <TabsGroup items={items} />
      </div>
    </Block>
  );
};