import React, {FC} from "react";
import "./style.css";

export type CheckboxGroupItemType = {
  label: string;
  value: boolean;
};

interface CheckboxGroupProps {
  items: CheckboxGroupItemType[];
  handleChecked: (key: number) => void;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  items,
  handleChecked,
}) => {
  return (
    <>
      {items.map((item, index) => (
        <div key={index} className="w-full">
          <label className="text-base text-white/60 flex items-center justify-between cursor-pointer hover:bg-[#2C2C2C] transition-all ease-in-out duration-300 p-4">
            {item.label}
            <input
              type="checkbox"
              name={item.label}
              checked={item.value}
              onChange={() => handleChecked(index)}
            />
          </label>
        </div>
      ))}
    </>
  );
};