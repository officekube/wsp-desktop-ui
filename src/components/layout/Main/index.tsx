import React, { FC, ReactNode } from "react";
import "./style.css";

interface MainProps {
  children: ReactNode;
}

export const Main: FC<MainProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen w-[60%] py-4">{children}</div>
  );
};
