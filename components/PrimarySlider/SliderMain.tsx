"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import img1 from "./1.png";
import img2 from "./2.png";
import { useState } from "react";

const images = [img1, img2];

export default function SliderMain() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2000 }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-[300px] rounded-[5px] overflow-hidden"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <Image
              src={img}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="h-5 w-full flex items-center justify-center gap-1 mt-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-[15px] h-[5px] rounded-full border border-[#0F70DC] transition-all duration-300 ${
              i === activeIndex ? "bg-[#0F70DC]" : "bg-transparent"
            }`}
          />
        ))}
      </div>
    </>
  );
}
