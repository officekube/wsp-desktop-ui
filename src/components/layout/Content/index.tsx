import React, {FC, ReactNode} from "react";
import "./style.css";

interface ContentProps {
  children: ReactNode;
}

export const Content: FC<ContentProps> = ({ children }) => {
  return (
    <div className="flex flex-row items-center justify-between min-h-screen">
      {children}
    </div>
  );
};
