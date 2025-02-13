import React, { FC, useState } from "react";
import { Block } from "../Block";
import type { CheckboxGroupItemType } from "../CheckboxGroup";
import { CheckboxGroup } from "../CheckboxGroup";

interface TaskRunTaskProps {
  items: CheckboxGroupItemType[];
  title?: string;
}

export const TaskRunTask: FC<TaskRunTaskProps> = ({
  items,
  title = "Executed/Running Tasks"
}) => {
  const [myItems, setMyItems] = useState<CheckboxGroupItemType[]>(items);

  const handleChecked = (key: number) => {
    setMyItems((prevItems) =>
      prevItems.map((item, index) =>
        index === key ? { ...item, value: !item.value } : item
      )
    );
  };

  return (
    <Block title={title}>
      <div className="w-full border border-t-0 border-gray-700 overflow-x-hidden overflow-y-scroll h-60">
        <CheckboxGroup items={myItems} handleChecked={handleChecked} />
      </div>
    </Block>
  );
};