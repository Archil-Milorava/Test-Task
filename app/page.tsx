import CasinoDescription from "@/components/CasinoDescription";
import GridLayoutMain from "@/components/GridLayoutMain/GridLayoutMain";
import PaymentOptions from "@/components/PaymentOptions";
import SliderMain from "@/components/PrimarySlider/SliderMain";
import SwiperMain from "@/components/ui/GamesSwiper";
import SwiperProviders from "@/components/ui/SwiperProviders";
import SearchLayout from "@/features/Filtering/SearchMain";
import FooterMain from "@/features/footer/FooterMain";
import { GamesResponse } from "@/types/games";

const fetchGames = async (): Promise<GamesResponse> => {
  const res = await fetch("https://api.remailer.eu/games/list.php");

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  return await res.json();
};

// Define your categories with optional icons
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

      {/* Render swipers for each category */}
      {categories.map((category) => (
        <div key={category.name} className="p-4">
          <SwiperMain
            games={gamesResponse.data}
            category={category.name}
            icon={category.icon}
          />
        </div>
      ))}

      <SwiperProviders />
      <PaymentOptions />
      <CasinoDescription />
    </div>
  );
};

export default Page;
