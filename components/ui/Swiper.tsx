"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";

interface SwiperMainProps {
  icon: string;
  title: string;
  items: { id: number; image: string }[];
}

const SwiperMain: React.FC<SwiperMainProps> = ({ icon, title, items }) => {

    
    

  return (
    <div className="w-full space-y-2 relative">
      {/* Header */}
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <Image src={icon} alt="icon" width={20} height={20} />
          <span className="text-white text-sm font-semibold">{title}</span>
        </div>
        <div className="flex gap-2">
          <button className="swiper-button-prev-custom text-white text-lg">←</button>
          <button className="swiper-button-next-custom text-white text-lg">→</button>
        </div>
      </div>

      {/* Swiper */}
      <Swiper
        spaceBetween={12}
        slidesPerView={"auto"}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        modules={[Navigation]}
        className="!pb-6"
      >
        {items.map((item) => (
          <SwiperSlide
            key={item.id}
            className="!w-[120px] !h-[150px] rounded-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.id.toString()}
              className="w-full h-full object-cover rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Bottom Arrows (Optional) */}
      <div className="flex justify-end gap-2 px-2">
        <button className="swiper-button-prev-custom text-white text-lg">←</button>
        <button className="swiper-button-next-custom text-white text-lg">→</button>
      </div>
    </div>
  );
};

export default SwiperMain;
