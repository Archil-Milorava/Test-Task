"use client";

import Image from "next/image";
import chat from "./assetsTabMenu/chat_inactive.png";
import home from "./assetsTabMenu/home_inactive.png";
import menu from "./assetsTabMenu/menu_inactive.png";
import quickDeposit from "./assetsTabMenu/quick_deposit_inactive.png";
import search from "./assetsTabMenu/search_inactive.png";

const TabMenuMain = () => {
  return (
    <div className="sm:hidden fixed bottom-0 z-[9999] bg-[#10202D] w-full h-[60px] border-t border-[#2C3E50] rounded-t-[5px] overflow-hidden">
      <div className="flex justify-between items-center h-full px-6">
        <Image src={home} alt="Home" width={30} height={30} />

        <Image src={search} alt="Search" width={30} height={30} />

         <div className="bg-[#0F70DC] w-[50px] h-[50px] rounded-full flex items-center justify-center ">
          <Image src={quickDeposit} alt="Deposit" width={90} height={90} className="w-full h-full object-cover" />
        </div>

        <Image src={chat} alt="Chat" width={24} height={24} />
        <Image src={menu} alt="Menu" width={30} height={30} />
      </div>
    </div>
  );
};

export default TabMenuMain;
