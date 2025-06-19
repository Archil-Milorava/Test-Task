"use client";

import { useEffect, useRef, useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image, { StaticImageData } from "next/image";
import dice from "./dice.png";

export interface DropdownItem {
  id: string | number;
  label: string;
  icon: string | StaticImageData;
}

interface DropdownProps {
  title: string;
  icon: string | StaticImageData;
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

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (item: DropdownItem) => {
    setSelected(item);
    onSelect(item);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-[175px] md:w-[185px]">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full h-[40px] bg-[#10202D] border border-[#2C3E50] rounded-[5px] flex items-center justify-between px-3 text-sm text-white"
      >
        <div className="flex items-center gap-2">
          <Image src={icon} alt="main-icon" width={20} height={20} />
          <span>{selected?.label || title}</span>
        </div>
        {isOpen ? (
          <FiChevronUp
            className="bg-[#273344] w-[24px] h-[24px] p-0.5 rounded-sm"
            size={10}
          />
        ) : (
          <FiChevronDown
            className="bg-[#273344] w-[24px] h-[24px] p-0.5 rounded-sm"
            size={10}
          />
        )}
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute top-[42px] w-full h-[211px] bg-[#10202D] border border-[#2C3E50] rounded-[5px] overflow-y-auto z-10">
          {items.map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelect(item)}
              className="w-full h-[40px] px-3 flex items-center gap-2 text-white text-sm hover:bg-secondary hover:border-l-[5px] hover:border-[#0F70DC] cursor-pointer"
            >
              <Image
                src={dice}
                alt={item.label}
                className="filter brightness-0 invert w-[16px] h-[16px] object-contain"
              />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
