import React, { FC } from "react";
import { Block } from "../Block";
import { TabsGroup } from "../TabsGroup";
import type { TabsGroupItemType } from "../TabsGroup";

interface ExcuteProps {
  items: TabsGroupItemType[];
}

export const TaskExcute: FC<ExcuteProps> = ({ items }) => {
  return (
    <Block title="Excute Task: Generate Documentation">
      <div className="w-full border border-t-0 border-[#3a3a3a] overflow-x-hidden">
        <TabsGroup items={items} />
      </div>
    </Block>
  );
};
