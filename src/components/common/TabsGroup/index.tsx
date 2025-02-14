import React, {FC, useState} from "react";

export type TabsGroupItemType = {
    title: string;
    subtitle: string;
    content: string[];
};

interface TabsGroupProps {
    items: TabsGroupItemType[];
}

export const TabsGroup: FC<TabsGroupProps> = ({items}) => {
    const [active, setActive] = useState<number>(0);

    return (
        <div className="w-full">
            <div>
                <ul className="flex flex-row items-center gap-0 border-b border-gray-700">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className={`
                border-r border-gray-700 w-[200px] 
                ${active === index ? 'bg-gray-800' : 'hover:bg-gray-900'}
                transition-colors duration-200
              `}
                        >
                            <button
                                className={`
                  w-full py-4 px-2 text-base
                  ${active === index ? 'text-white' : 'text-white/60'}
                  hover:text-white transition-colors duration-200
                `}
                                onClick={() => setActive(index)}
                                aria-selected={active === index}
                                role="tab"
                            >
                                {item.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="p-4 overflow-x-hidden overflow-y-scroll max-h-96">
                <h3 className="text-white/60 text-center mb-4">{items[active].subtitle}</h3>
                <ul className="space-y-2">
                    {items[active].content.map((content, index) => (
                        <li
                            key={index}
                            className="text-white/70 py-2"
                        >
                            {content}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};