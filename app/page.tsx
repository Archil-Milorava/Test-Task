import GridLayoutMain from "@/components/GridLayoutMain/GridLayoutMain";
import SliderMain from "@/components/PrimarySlider/SliderMain";

const page = () => {
  return (
    <div className="w-full min-h-screen brder my-2">
      <SliderMain />
      <GridLayoutMain />
    </div>
  );
};

export default page;
