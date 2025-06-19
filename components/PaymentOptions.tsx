"use client";

import Image from "next/image";
import apple from "@/assets/payments/apple_pay_image.png";
import google from "@/assets/payments/google_pay_image.png";
import mc from "@/assets/payments/mc_image.png";
import neteller from "@/assets/payments/neteller_image.png";
import revolut from "@/assets/payments/revolut_image.png";
import skrill from "@/assets/payments/skrill_image.png";

const images = [apple, google, mc, neteller, revolut, skrill];

const PaymentOptions = () => {
  return (
    <main className="bg-[#10202D] h-[355px] md:h-[110px] w-full p-2 rounded-[5px] overflow-hidden flex flex-col md:flex-row md:items-center gap-2 justify-between md:px-4 my-12 text-white">
      <div className="h-1/4 md:h-full flex items-center justify-center md:w-1/4">
        <h1 className="text-[20px] font-bold text-center ">
          You dont hae crypto? <br /> Dont worry
        </h1>
      </div>
      <div className=" h-1/2 md:h-full md:w-1/2 flex flex-wrap items-center justify-center gap-1">
        {images.map((image, i) => (
          <Image src={image} alt="asd" key={i} className="h-[55px] w-[80px]" />
        ))}
      </div>
      <div className=" h-1/4 md:h-full md:w-1/4 md:1/2 flex items-center">
        <button className="w-full h-[40px] bg-[#0F70DC]">Buy now</button>
      </div>
    </main>
  );
};

export default PaymentOptions;
