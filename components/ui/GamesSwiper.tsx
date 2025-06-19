"use client";

import Image from "next/image";
import icon from "./icon.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Game } from "@/types/games";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperMainProps {
  games: Game[];
}

const SwiperMain = ({ games }: SwiperMainProps) => {
  return (
    <div className="w-full h-[245px] overflow-hidden relative">
      {/* Header with title */}
      <div className="h-[45px] w-full flex items-center justify-between px-2">
        <div className="flex gap-2 items-center">
          <Image src={icon} alt="Hot games icon" width={20} height={20} />
          <p className="text-[16px]">Hot games</p>
        </div>
      </div>

      {/* Swiper container with custom navigation */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          spaceBetween={15}
          slidesPerView={"auto"}
          className="h-[200px]"
        >
          {games.map((game) => (
            <SwiperSlide key={game.id} className="!w-[150px] h-full ">
              <div className=" rounded-[5px] max-w-[150px] max-h-[200px] overflow-hidden relative cursor-pointer">
                <img src={game.image} className="object-cover w-full h-full" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom navigation buttons positioned absolutely */}
        {/* <button className="custom-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-[#253241] text-white flex items-center justify-center hover:bg-[#1a2633] transition-colors rounded-full">
          <FaChevronLeft />
        </button>
        <button className="custom-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-[#253241] text-white flex items-center justify-center hover:bg-[#1a2633] transition-colors rounded-full">
          <FaChevronRight />
        </button> */}
      </div>
    </div>
  );
};

export default SwiperMain;
