import React, {FC} from "react";
import type {BlockItemType} from "../Block";
import {Block} from "../Block";

interface TaskExploreProps {
    items: BlockItemType[];
    showSearch?: boolean;
    title?: string;
}

export const TaskExplore: FC<TaskExploreProps> = ({
                                                      items,
                                                      showSearch = true,
                                                      title = "Explore Tasks"
                                                  }) => {
    return (
        <Block title={title}>
            <div
                className="w-full py-4 px-2 border border-t-0 border-gray-700 overflow-x-hidden overflow-y-scroll">
                {showSearch && (
                    <div>
                        <input
                            type="text"
                            placeholder="Search by name"
                            className="px-2 py-1 bg-transparent text-sm outline-none text-white/60 border border-gray-700"
                        />
                    </div>
                )}
                <div className={`grid grid-cols-3 gap-10 ${showSearch ? 'mt-4' : ''}`}>
                    {items.map((item, index) => (
                        <Block key={index} title={item.title}>
                            <textarea
                                value={item.content}
                                className="w-full h-40 overflow-y-auto overflow-x-hidden bg-transparent text-white/60 p-4 outline-none border border-t-0 border-gray-700"
                                disabled
                            />
                        </Block>
                    ))}
                </div>
            </div>
        </Block>
    );
};