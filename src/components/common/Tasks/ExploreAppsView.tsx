import React, { FC } from "react";
import { Block } from "../Block";
import { TabsGroup } from "../TabsGroup";
import type { TabsGroupItemType } from "../TabsGroup";

interface ExploreAppsProps {
  items: TabsGroupItemType[];
}

export const TaskExploreApps: FC<ExploreAppsProps> = ({ items }) => {
  return (
    <Block title="Explore Apps">
      <div className="w-full border border-t-0 border-[#3a3a3a] overflow-x-hidden">
        <div className="grid grid-cols-3 gap-10 mt-4">
        </div>
      </div>
    </Block>
  );
};
