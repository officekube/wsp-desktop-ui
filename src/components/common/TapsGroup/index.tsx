import React, { FC, useState } from "react";

export type TabsGroupItemType = {
  title: string;
  subtitle: string;
  content: string[];
};

interface TabsGroupProps {
  items: TabsGroupItemType[];
}

export const TabsGroup: FC<TabsGroupProps> = ({ items }) => {
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full">
      <div>
        <ul className="flex flex-row items-center gap-0 border-b border-[#3a3a3a]">
          {items.map((item, index) => (
            <li
              key={index}
              className={`border-r border-[#3a3a3a] w-[200px] py-4 flex items-center justify-center ${
                active === index && "bg-[#292929]"
              } hover:bg-[#2C2C2C] transition-all ease-in-out duration-300 cursor-pointer`}
            >
              <button
                className="text-center text-base text-white/60 block"
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 overflow-x-hidden overflow-y-scroll">
        <h3 className="text-white/60 text-center">{items[active].subtitle}</h3>
        <ul className="p-4">
          {items[active].content.map((content, index) => (
            <li key={index} className="text-white/70 py-2">
              {content}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
