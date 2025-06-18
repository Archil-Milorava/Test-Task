"use client";

import Image from "next/image";
import { useState } from "react";

// Images
import blackjack_image from "@/components/SideNavbar/assets/blackjack_image.png";
import crash_image from "@/components/SideNavbar/assets/crash_image.png";
import dice_image from "@/components/SideNavbar/assets/dice_image.png";
import Group from "@/components/SideNavbar/assets/Group.png";
import live_dealers_image from "@/components/SideNavbar/assets/live_dealers_image.png";
import roulette_image from "@/components/SideNavbar/assets/roulette_image.png";
import sidebar_baccarat_image from "@/components/SideNavbar/assets/sidebar_baccarat_image.png";
import slots_image from "@/components/SideNavbar/assets/slots_image .png";
import vec from "@/components/SideNavbar/assets/vec.png";
import video_poker_image from "@/components/SideNavbar/assets/video_poker_image.png";
import lobby_icon from "@/components/SideNavbar/assets/Group.png"; // Change if needed

const categories = [
  { label: "Lobby", icon: lobby_icon, special: true },
  { label: "Blackjack", icon: blackjack_image },
  { label: "Crash", icon: crash_image },
  { label: "Dice", icon: dice_image },
  { label: "Group", icon: Group },
  { label: "Live Dealers", icon: live_dealers_image },
  { label: "Roulette", icon: roulette_image },
  { label: "Baccarat", icon: sidebar_baccarat_image },
  { label: "Slots", icon: slots_image },
  { label: "Vector", icon: vec },
  { label: "Video Poker", icon: video_poker_image },
];

const CategorySlider = () => {
  const [selected, setSelected] = useState("Lobby");

  return (
    <div className="w-full h-[40px] overflow-x-hidden whitespace-nowrap  ">
      <div className="flex gap-2 min-w-max">
        {categories.map((item) => (
          <button
            key={item.label}
            onClick={() => setSelected(item.label)}
            className={`flex items-center gap-2 px-3 h-[40px] rounded-[5px] text-sm whitespace-nowrap
              ${item.special ? "bg-[#10202D]" : "bg-[#223444] cursor-pointer hover:opacity-80 transition"}
              ${
                selected === item.label
                  ? "border border-[#789ebe]"
                  : "border border-transparent"
              }
              hover:opacity-90 transition`}
          >
            <Image
              src={item.icon}
              alt={item.label}
              className="filter brightness-0 invert w-[20px] h-[20px]"
            />
            <span className="text-white text-sm tracking-wide">
              {item.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategorySlider;
