"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";

export interface DropdownItem {
  id: string | number;
  label: string;
  icon: string;
}

interface DropdownProps {
  title: string;
  icon: string;
  items: DropdownItem[];
  onSelect: (item: DropdownItem) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  title,
  icon,
  items,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<DropdownItem | null>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  return (
    <div className="relative w-[185px]">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full h-[40px] bg-[#10202D] border border-[#2C3E50] rounded-[5px] flex items-center justify-between px-3 text-sm text-white"
      >
        <div className="flex items-center gap-2">
          <Image src={icon} alt="main-icon" width={20} height={20} />
          <span>{selected?.label || title}</span>
        </div>
        {isOpen ? (
          <FiChevronUp className="bg-[#273344] w-[24px] h-[24px] p-0.5 rounded-sm" size={10} />
        ) : (
          <FiChevronDown className="bg-[#273344] w-[24px] h-[24px] p-0.5 rounded-sm" size={10} />
        )}
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute top-[44px] w-full h-[211px] bg-[#10202D] border border-[#2C3E50] rounded-[5px] overflow-y-auto z-10">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className="w-full h-[40px] px-3 flex items-center gap-2 text-white text-sm transition-all hover:opacity-80 hover:border-l-[2px] hover:border-[#0F70DC]"
            >
              <Image src={item.icon} alt={item.label} width={18} height={18} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
