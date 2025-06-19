"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel } from "swiper/modules";
import "swiper/css";

import menu_Image from "@/assets/menu_image.png";
import promotions_icon from "./assets/promotions_icon.png";
import blackjack_image from "./assets/blackjack_image.png";
import crash_image from "./assets/crash_image.png";
import dice_image from "./assets/dice_image.png";
import favorites_image from "./assets/favorites_image.png";
import Group from "./assets/Group.png";
import language_image from "./assets/language_image.png";
import live_dealers_image from "./assets/live_dealers_image.png";
import recent_image from "./assets/recent_image.png";
import roulette_image from "./assets/roulette_image.png";
import sidebar_baccarat_image from "./assets/sidebar_baccarat_image.png";
import slots_image from "./assets/slots_image .png";
import support_image from "./assets/support_image.png";
import tournaments_icon from "./assets/tournaments_icon.png";
import vec from "./assets/vec.png";
import video_poker_image from "./assets/video_poker_image.png";
import vip_club_icon from "./assets/vip_club_icon.png";
import SVGRepo_iconCarrier from "./assets/SVGRepo_iconCarrier.png";

const sidebarCategories = [
  {
    title: "Promotions",
    items: [
      { label: "Promotions", icon: promotions_icon },
      { label: "VIP Club", icon: vip_club_icon },
      { label: "Tournaments", icon: tournaments_icon },
    ],
  },
  {
    title: "Games",
    items: [
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
    ],
  },
  {
    title: "Activity",
    items: [
      { label: "Favorites", icon: favorites_image },
      { label: "Recent", icon: recent_image },
    ],
  },
  {
    title: "Explore",
    items: [
      { label: "Collections", icon: SVGRepo_iconCarrier },
      { label: "Providers", icon: SVGRepo_iconCarrier },
    ],
  },
  {
    title: "Settings",
    items: [
      { label: "Support", icon: support_image },
      { label: "Language", icon: language_image },
    ],
  },
];

const SideNavbarMain = () => {
  const [collapsed, setCollapsed] = useState(true);
  const sidebarRef = useRef(null);

  return (
    <div
      ref={sidebarRef}
      className={`fixed z-[40] hidden lg:block top-0 left-0 ${
        collapsed ? "w-[60px]" : "w-[240px]"
      } h-screen bg-[#162231] text-[#C1C9E5] flex flex-col py-4 transition-all duration-300 ease-out will-change-transform overflow-hidden`}
    >
      <Swiper
        direction="vertical"
        slidesPerView="auto"
        freeMode={true}
        mousewheel={true}
        modules={[FreeMode, Mousewheel]}
        className="h-full !overflow-visible"
      >
        <SwiperSlide className="!h-auto !flex flex-col">
          {/* Toggle button */}
          <div
            className="px-4 mb-6 cursor-pointer min-w-[32px]"
            onClick={() => setCollapsed(!collapsed)}
          >
            <Image
              src={menu_Image}
              alt="menu"
              className="filter brightness-0 invert"
              width={22}
              height={22}
            />
          </div>

          {/* Sidebar sections */}
          <div className="flex flex-col w-full px-2 space-y-3 min-w-[56px] flex-grow">
            {sidebarCategories.map((category, catIndex) => (
              <div
                key={catIndex}
                className="flex flex-col rounded-[4px] overflow-hidden min-w-0"
              >
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`w-full flex items-center gap-3 px-3 py-2 bg-[#223446] hover:bg-[#2C3E50] cursor-pointer transition ${
                      collapsed ? "min-h-[40px] justify-center" : ""
                    }`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="filter brightness-0 invert w-[20px] h-[20px] min-w-[20px]"
                    />
                    {!collapsed && (
                      <span className="text-[14px] text-white font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                        {item.label}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SideNavbarMain;
