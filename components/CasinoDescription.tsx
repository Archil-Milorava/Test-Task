"use client";

import { useState } from "react";

const CasinoDescription = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`relative p-6 rounded-xs overflow-hidden border border-gray-700 my-2 ${
        expanded
          ? "bg-[#1E2B38]"
          : "bg-gradient-to-b from-[#1E2B3800] to-[#1E2A38]"
      }`}
    >
      {/* Small header at top left */}
      <h2 className="text-lg mb-4">CASINO Casino</h2>

      {/* content description  */}
      <div
        className={`transition-all duration-300 ease-in-out text-sm ${
          expanded ? "max-h-[2000px]" : "max-h-[255px] md:max-h-[250px]"
        } overflow-hidden`}
      >
        <p className="mb-4 text-white text-[14px] leading-relaxed">
          CASINO is your premier online casino platform, offering a world-class
          gaming experience with hundreds of top-tier casino games, exclusive
          bonuses, and lightning-fast payouts. Whether you&apos;re a fan of
          classic slots, live dealer games, table games, or jackpot
          progressives, CASINO delivers everything you need for high-stakes
          excitement and non-stop fun — all from the comfort of your home or
          mobile device. <br /> Join thousands of players worldwide who trust
          CASINO for its secure, fair, and licensed gameplay. We partner with
          the industry&apos;s most reputable software providers to bring you an
          unbeatable selection of games with stunning graphics, realistic sound
          effects, and smooth gameplay. From roulette and blackjack to immersive
          live casino tables and high-RTP video slots, CASINO is designed to
          satisfy both new players and seasoned pros. <br /> At CASINO, new
          users are greeted with a generous welcome bonus and ongoing
          promotions, cashback offers, free spins, and VIP rewards for loyal
          players. Our platform supports multiple payment options, including
          credit cards, cryptocurrencies, e-wallets, and bank transfers, all
          processed with the highest level of security and privacy. Our 24/7
          customer support team ensures your questions are answered quickly —
          whenever you need assistance.
        </p>

        {/* Clickable overlay when collapsed */}
        {!expanded && (
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setExpanded(true)}
            aria-hidden="true"
          />
        )}
      </div>

  
      {!expanded && (
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#1E2A38] to-transparent pointer-events-none"></div>
      )}

   
      {/* Read More button */}
      <div
        className={`flex justify-center relative ${
          !expanded ? "-mt-10" : "mt-6"
        } z-10`}
      >
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-[#0F70DC] w-[250px] h-[40px] text-white uppercase text-sm tracking-wider hover:opacity-90 cursor-pointer transition rounded-sm shadow-md"
          aria-expanded={expanded}
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      </div>
    </div>
  );
};

export default CasinoDescription;
