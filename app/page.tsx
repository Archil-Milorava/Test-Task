import GridLayoutMain from "@/components/GridLayoutMain/GridLayoutMain";
import SliderMain from "@/components/PrimarySlider/SliderMain";
import Swiper from "@/components/ui/Swiper";
import SearchLayout from "@/features/Filtering/SearchMain";

import icon from "./../assets/SVGRepo_iconCarrier.png";
import PaymentOptions from "@/components/PaymentOptions";
import CasinoDescription from "@/components/CasinoDescription";

const page = async () => {
  // const res = await fetch("https://api.remailer.eu/games/list.php")

  // const data = await res.json()

  // const games = data.data

  // console.log(games);

  return (
    <div className="w-full min-h-screen  my-2">
      <SliderMain />
      <GridLayoutMain />
      <SearchLayout />
      <div className="p-4">
        {/* <Swiper icon={icon} title="New Releases" items={games} /> */}
      </div>
      <PaymentOptions />
      <CasinoDescription />
    </div>
  );
};

export default page;
