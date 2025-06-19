"use client";

import { Game } from "@/types/games";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import icon from "./icon.png";

interface SwiperMainProps {
  games: Game[];
  category: string;
}

const SwiperMain = ({ games, category }: SwiperMainProps) => {
  return (
    <div className="w-full h-[245px] overflow-hidden relative">
      {/* Header with title */}
      <div className="h-[45px] w-full flex items-center justify-between px-2 ">
        <div className="flex gap-2 items-center">
          <Image src={icon} alt={`${category} icon`} width={20} height={20} />
          <p className="text-[16px] font-[500] capitalize">
            {category.replace("-", " ")}
          </p>
        </div>
      </div>

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
              <div className=" rounded-[5px] w-[150px] h-[200px] overflow-hidden relative  cursor-pointer">
                <Image
                  src={game.image}
                  alt="gameImage"
                  className="object-cover w-full h-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperMain;
