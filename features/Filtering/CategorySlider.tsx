"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

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
import lobby_icon from "@/components/SideNavbar/assets/Group.png";

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
  const [selected, setSelected] = useState<string[]>(["Lobby"]);

  const toggleSelection = (label: string) => {
    setSelected((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  return (
    <div className="w-full px-1 py-2 overflow-hidden">
      <Swiper
        spaceBetween={8}
        slidesPerView="auto"
        className="!overflow-visible"
      >
        {categories.map((item) => {
          const isActive = selected.includes(item.label);
          return (
            <SwiperSlide key={item.label} className="!w-auto">
              <button
                onClick={() => toggleSelection(item.label)}
                className={`flex items-center gap-2 px-3 h-[40px] rounded-[5px] text-sm whitespace-nowrap
                ${item.special ? "bg-[#10202D]" : "bg-[#223444]"}
                ${
                  isActive
                    ? "border border-[#789ebe]"
                    : "border border-transparent"
                }
                hover:opacity-90 transition cursor-pointer`}
              >
                <Image
                  src={item.icon}
                  alt={item.label}
                  width={20}
                  height={20}
                  className="filter brightness-0 invert"
                />
                <span className="text-white">{item.label}</span>
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default CategorySlider;
