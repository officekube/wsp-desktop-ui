import React, { FC, ReactNode } from "react";

interface AsiderProps {
  children: ReactNode;
}

export const Asider: FC<AsiderProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-10 items-center justify-between w-[15%] border-l border-[#3a3a3a] min-h-screen p-4">
      {children}
    </div>
  );
};
