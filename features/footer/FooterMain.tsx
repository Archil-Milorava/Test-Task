import Link from "next/link";
import Image from "next/image";

import one from "./one.png";
import two from "./two.png";
import LineBreak from "@/components/ui/LineBreak";

import bitcoin from "./assetsCoins/bitcoin_icon.png";
import etherium from "./assetsCoins/etherium_icon.png";
import tether from "./assetsCoins/tether_icon.png";
import bitCash from "./assetsCoins/bitcoin_cash_icon.png";
import liteCoin from "./assetsCoins/litecoin_icon.png";
import usdc from "./assetsCoins/usdc_icon.png";
import doge from "./assetsCoins/dogecoin_icon.png";
import ripple from "./assetsCoins/ripple_icon.png";
import visa from "./assetsCoins/visa_icon.png";
import mc from "./assetsCoins/mc_icon.png";
import amex from "./assetsCoins/amex_icon.png";
import diners from "./assetsCoins/diners_icon.png";
import discover from "./assetsCoins/discover_icon.png";
import legal_logos from "./assetsCoins/legal_logos.png";

const gridItems = [
  {
    title: "Games",
    links: ["Slots", "Live Dealers", "Table Games", "Video Poker", "Crash"],
  },
  {
    title: "Promotions",
    links: [
      "Welcome Bonus",
      "Cash Back Deals",
      "Weekly Cashback",
      "Tournaments",
      "VIP Club",
    ],
  },
  {
    title: "Banking",
    links: [
      "Deposit Options",
      "Withdraw Options",
      "Refund Policy",
      "Payment Security",
      "AML Policy",
    ],
  },
  {
    title: "Casino",
    links: [
      "Terms & Conditions",
      "Privacy Policy",
      "Bonus Terms",
      "Affiliate Program",
      "About CASINO",
    ],
  },
  {
    title: "Customer Care",
    links: [
      "Live Chat",
      "Phone Support",
      "Email Support",
      "Help Desk",
      "Responsible Gaming",
    ],
  },
];

const coins = [
  { id: "bitcoin", name: "Bitcoin", image: bitcoin },
  { id: "etherium", name: "Ethereum", image: etherium },
  { id: "tether", name: "Tether", image: tether },
  { id: "bitCash", name: "Bitcoin Cash", image: bitCash },
  { id: "liteCoin", name: "Litecoin", image: liteCoin },
  { id: "usdc", name: "USDC", image: usdc },
  { id: "doge", name: "Dogecoin", image: doge },
  { id: "ripple", name: "Ripple", image: ripple },
  { id: "visa", name: "Visa", image: visa },
  { id: "mc", name: "Mastercard", image: mc },
  { id: "amex", name: "American Express", image: amex },
  { id: "diners", name: "Diners Club", image: diners },
  { id: "discover", name: "Discover", image: discover },
];

const FooterMain = () => {
  return (
    <footer className="bg-[#10202D]  pt-4 text-white px-6 lg:px-[16rem]">
      {/* top section */}
      <div className=" flex flex-col md:flex-row gap-12">
        {/* First section */}
        <div className="flex flex-col gap-4 mb-8">
          <div className="bg-[#253241] h-[40px] w-[75px] rounded-[5px]" />
          <p className="text-[14px] text-[#8898B0] leading-[20px] max-w-[325px]">
            Strike it rich at CASINO! Experience heart-pounding action with
            massive jackpots, fast payouts, and VIP treatment that keeps
            champions coming back. Join thousands of winners today - your
            fortune awaits!
          </p>
        </div>

        {/* Grid section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
          {gridItems.map((section, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-bold text-[16px]">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href="#"
                      className="text-[14px] text-[#8898B0] hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* apps */}
          <div className=" md:hidden w-full max-h-[200px] flex flex-col items-center justify-center gap-2 pr-8">
            <div className="h-1/2 w-full rounded-[5px] overflow-hidden ">
              <Image
                src={one}
                alt="one"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/2 w-full rounded-[5px] overflow-hidden ">
              <Image
                src={two}
                alt="two"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <LineBreak />

      <div className="flex flex-wrap items-center justify-center gap-4 py-8">
        {coins.map((coin) => (
          <Image
            key={coin.id}
            src={coin.image}
            alt={coin.name}
            width={50}
            height={50}
            className="object-cover"
          />
        ))}
      </div>

      <LineBreak />

      <div className="w-full py-11 flex items-center justify-center">
        <Image src={legal_logos} alt="legal" className="w-[170px] h-[35px]" />
      </div>

      <LineBreak />

      {/* Bottom section */}
      <div className="text-[#8898B0] flex flex-col gap-6 items-center justify-center py-6">
        <p className="text-[14px]">
          © 2025{" "}
          <span className="font-extrabold text-white text-[14px]">
            CASINO.COM.
          </span>{" "}
          All Rights Reserved.
        </p>
        <p className="tracking-wider uppercase text-[14px]">
          GAMBLING CAN BE ADDICTIVE! PLAY RESPONSIBLY!{" "}
        </p>
        <p className="text-center text-[12px] ">
          CASINO casino is operated by CASINO B.V., ensuring a secure and fair
          gaming environment for all players. We strictly adhere to all
          regulatory requirements to maintain transparency and fairness. Our
          commitment to integrity and ethical practices is at the core of our
          business. We employ advanced security measures, including SSL
          encryption and robust firewall systems, to protect your personal and
          financial information. Promoting responsible gaming is a priority at
          CASINO Casino. We provide tools and resources to help you gamble
          responsibly. We offer a variety of secure payment methods and ensure
          seamless transactions. All payment processes are encrypted and
          compliant with industry standards. Our professional customer support
          team is available 24/7 to assist you with any questions or issues you
          may have.{" "}
        </p>
      </div>
    </footer>
  );
};

export default FooterMain;
