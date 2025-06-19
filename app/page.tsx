import CasinoDescription from "@/components/CasinoDescription";
import GridLayoutMain from "@/components/GridLayoutMain/GridLayoutMain";
import PaymentOptions from "@/components/PaymentOptions";
import SliderMain from "@/components/PrimarySlider/SliderMain";
import SwiperMain from "@/components/ui/GamesSwiper";
import SwiperProviders from "@/components/ui/SwiperProviders";
import SearchLayout from "@/features/Filtering/SearchMain";
import { fetchGames } from "@/lib/api/gamesAPI";
import { GamesResponse } from "@/types/games";

const categories = [
  { name: "featured-games", icon: "/icons/featured.png" },
  { name: "new-releases", icon: "/icons/new.png" },
  { name: "hot-games", icon: "/icons/hot.png" },
  { name: "bonus-buy", icon: "/icons/bonus.png" },
  { name: "live", icon: "/icons/live.png" },
];

const Page = async () => {
  let gamesResponse: GamesResponse;

  try {
    gamesResponse = await fetchGames();
  } catch (error) {
    console.error("Error fetching games:", error);
    return <div>Error loading games. Please try again later.</div>;
  }

  return (
    <div className="w-full min-h-screen my-2">
      <SliderMain />
      <GridLayoutMain />
      <SearchLayout />

      {categories.map((category) => (
        <div key={category.name} className="p-4">
          <SwiperMain games={gamesResponse.data} category={category.name} />
        </div>
      ))}

      <SwiperProviders />
      <PaymentOptions />
      <CasinoDescription />
    </div>
  );
};

export default Page;