"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

import icon from "@/assets/providersPNG/icon.png";

// Import provider images
import a from "@/assets/providersPNG/a.png";
import b from "@/assets/providersPNG/b.png";
import c from "@/assets/providersPNG/c.png";
import d from "@/assets/providersPNG/d.png";
import e from "@/assets/providersPNG/e.png";
import f from "@/assets/providersPNG/f.png";
import g from "@/assets/providersPNG/g.png";
import h from "@/assets/providersPNG/h.png";

const providerImages = [
  { id: "a", image: a },
  { id: "b", image: b },
  { id: "c", image: c },
  { id: "d", image: d },
  { id: "e", image: e },
  { id: "f", image: f },
  { id: "g", image: g },
  { id: "h", image: h },
];

const SwiperProviders = () => {
  return (
    <div className="w-full h-auto my-4  overflow-hidden relative">
      {/* Header with title */}
      <div className="h-[45px] w-full flex items-center justify-between ">
        <div className="flex gap-2 items-center">
          <Image src={icon} alt="asd" />
          <p className="text-[16px] font-medium">Providers</p>
        </div>
      </div>

      {/* Swiper container */}
      <div className="relative h-[60px]">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".providers-next",
            prevEl: ".providers-prev",
          }}
          spaceBetween={15}
          slidesPerView="auto"
          className="h-full"
        >
          {providerImages.map((provider) => (
            <SwiperSlide key={provider.id} className="!w-[150px] h-full ">
              <div className="w-[150px] h-[60px] bg-[#10202D] flex items-center justify-center p-4 overflow-hidden">
                <Image
                  src={provider.image}
                  alt={`Provider ${provider.id.toUpperCase()}`}
                  className="object-fit w-full h-[40px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation buttons */}
        {/* <button className="providers-prev absolute left-2 top-1/2 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-[#253241] text-white flex items-center justify-center hover:bg-[#1a2633] transition-colors rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
        <button className="providers-next absolute right-2 top-1/2 -translate-y-1/2 z-10 w-[35px] h-[35px] bg-[#253241] text-white flex items-center justify-center hover:bg-[#1a2633] transition-colors rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 18l6-6-6-6"/>
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default SwiperProviders;
