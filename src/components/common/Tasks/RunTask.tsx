import React, { useState } from "react";
import { Block } from "../Block";
import type { CheckboxGroupItemType } from "../CheckboxGroup";
import { CheckboxGroup } from "../CheckboxGroup";
import { initialTaskRunTasksItems } from "../../../constant/component-items";

export const TaskRunTask = () => {
  const [myItems, setMyItems] = useState<CheckboxGroupItemType[]>(
    initialTaskRunTasksItems
  );

  const handleChecked = (key: number) => {
    setMyItems((prevItems) =>
      prevItems.map((item, index) =>
        index === key ? { ...item, value: !item.value } : item
      )
    );
  };

  return (
    <Block title="Excuted/Running Tasks">
      <div className="w-full border border-t-0 border-[#3a3a3a] overflow-x-hidden overflow-y-scroll h-[250px]">
        <CheckboxGroup items={myItems} handleChecked={handleChecked} />
      </div>
    </Block>
  );
};
