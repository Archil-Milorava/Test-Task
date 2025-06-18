"use client";

import Image from "next/image";
import Frame from "./Frame.png";
import user_menu_icon from "./user_menu_icon.png";
import deposit_icon from "./deposit_icon.png";

const HeaderMain = () => {
  return (
    <header className="w-full h-[60px] flex justify-between items-center bg-[#152535] px-[8px] lg:px-[8rem] xl:px-[16rem]">
      {/* Left: Logo Placeholder */}
      <div className="bg-[#253241] h-[40px] w-[75px] rounded-[5px]" />

      {/* Right: Balance, Icons */}
      <div className="flex items-center gap-1">
        {/* Balance + Deposit */}
        <div className="h-[40px] w-auto rounded-[5px] overflow-hidden flex border border-[#192C40]">
          <div className="bg-[#10202D]  h-full flex items-center justify-center gap-1 px-2">
            <span className="text-md bg-[#192C40] w-[24px] h-[24px] rounded-full flex items-center justify-center">
              $
            </span>
            <p className="text-sm">10,566.12</p>
          </div>
          <button className="bg-[#0F70DC] px-2 h-full flex items-center justify-center hover:opacity-90 transition">
            {/* Show text on medium+ screens */}
            <span className="uppercase text-sm tracking-wider hidden md:block">
              Deposit
            </span>

            {/* Show icon on small screens */}
            <Image
              src={deposit_icon}
              alt="Deposit"
              className="block md:hidden filter brightness-0 invert w-[24px] h-[24px]"
            />
          </button>
        </div>

        {/* Frame Button */}
        <button className="bg-[#273344] w-[40px] h-[40px] flex items-center justify-center rounded-[5px] border border-[#253241] hover:opacity-90 transition">
          <Image
            src={Frame}
            alt="Notifications"
            className="filter brightness-0 invert"
          />
        </button>

        {/* User Button */}
        <button className="bg-[#273344] w-[40px] h-[40px] flex items-center justify-center rounded-[5px] border border-[#253241] hover:opacity-90 transition">
          <Image
            src={user_menu_icon}
            alt="User Menu"
            className="filter brightness-0 invert"
          />
        </button>
      </div>
    </header>
  );
};

export default HeaderMain;
