import React, { FC } from "react";
import "./style.css";

export type NavItemType = {
  name: string;
  active: boolean;
  path: string;
};

interface NavbarProps {
  items: NavItemType[];
  setActive: (key: string) => void;
}

export const Navbar: FC<NavbarProps> = ({ items, setActive }) => {
  return (
    <nav className="nav w-[10%] flex flex-col min-h-screen border-r border-[#3a3a3a]">
      <ul className="flex flex-col flex-1">
        {items.map((item, index) => (
          <li
            className={`p-4 cursor-pointer item border-b border-[#3a3a3a] hover:bg-[#2C2C2C] transition-all ease-in-out duration-300 ${
              item.active && "bg-[#292929]"
            }`}
            key={index}
            onClick={() => setActive(item.name)}
          >
            <a
              href={item.path}
              className={`${
                item.active ? "text-white" : "text-white/60"
              } hover:text-white flex items-center justify-center`}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
