import React, { FC, ReactNode } from "react";
import "./style.css";

export type BlockItemType = {
  title: string;
  content: string;
};

interface BlockProps {
  children: ReactNode;
  title: string;
}

export const Block: FC<BlockProps> = ({ children, title }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <h2 className="text-white/70 text-sm md:text-base font-semibold p-2 border border-[#3a3a3a] bg-black/90">
        {title}
      </h2>
      {children}
    </div>
  );
};
