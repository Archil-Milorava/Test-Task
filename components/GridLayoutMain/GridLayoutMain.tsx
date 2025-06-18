'use client'

import Image from "next/image";
import img1 from "./imageBig1.png";
import img2 from "./imageBig2.png";
import img3 from "./imageSmall1.png";
import img4 from "./imageSmall2.png";
import img5 from "./imageSmall3.png";
import img6 from "./imageSmall4.png";

const GridLayoutMain = () => {
  const smallImages = [img3, img4, img5, img6];

  return (
    <div className="my-2 w-full h-[200px] md:h-[250px] grid grid-cols-4 md:grid-cols-6 grid-rows-2 gap-2 rounded-[3px] overflow-hidden">
      {/* Big images */}
      <div className="col-span-2 row-span-2 rounded-[3px] overflow-hidden">
        <Image src={img1} alt="Big 1" className="w-full h-full object-cover" />
      </div>
      <div className="col-span-2 row-span-2 rounded-[3px] overflow-hidden">
        <Image src={img2} alt="Big 2" className="w-full h-full object-cover" />
      </div>

      {/* Small images */}
      {smallImages.map((img, i) => (
        <div
          key={i}
          className="col-span-1 row-span-1 rounded-[3px] overflow-hidden"
        >
          <Image
            src={img}
            alt={`Small ${i}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default GridLayoutMain;
