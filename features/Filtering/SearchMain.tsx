"use client";

import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import React from "react";

import { BiSearchAlt } from "react-icons/bi";
import starIcon from "./icon.png";
import Layer_1 from "./Layer_1.png";
import CategorySlider from "./CategorySlider";

const items = [
  { id: 1, label: "Popular", icon: starIcon },
  { id: 2, label: "Trending", icon: Layer_1 },
];

const SearchLayout = () => {
  return (
    <div className=" my-4  flex flex-col gap-2 ">
      <div className="w-full flex flex-col md:flex-row gap-1 items-center">
        <Input
          icon={<BiSearchAlt size={20} />}
          className="w-full md:flex-1 bg-[#10202D] placeholder-white text-sm tracking-wider rounded-sm border-s overflow-hidden"
          placeholder="Search Your game"
        />

        <div className="w-full md:w-auto flex  sm:flex-row gap-1">
          <Dropdown
            title="Collections"
            icon={starIcon}
            items={items}
            onSelect={(item) => console.log("Selected:", item)}
          />
          <Dropdown
            title="Collections"
            icon={Layer_1}
            items={items}
            onSelect={(item) => console.log("Selected:", item)}
          />
        </div>
      </div>

      <CategorySlider />
    </div>
  );
};

export default SearchLayout;