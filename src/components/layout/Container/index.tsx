import React, {FC, ReactNode} from "react";
import "./style.css";

interface ContainerProps {
  children: ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full h-[100vh] bg-black/90 overflow-y-hidden">
      {children}
    </div>
  );
};
