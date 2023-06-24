import { useState } from "react";
import collection1 from "../../../assets/images/home/collection1.png";
import collection2 from "../../../assets/images/home/collection2.png";
import collection3 from "../../../assets/images/home/collection3.png";
import collection4 from "../../../assets/images/home/collection4.png";

type Collection = {
  text: string;
  image: string;
  bottomPos: string;
};

const HomeCollection = () => {
  const [collections] = useState<Collection[]>([
    { text: "LIPS", image: collection1, bottomPos: "45%" },
    { text: "NAILS", image: collection2, bottomPos: "15%" },
    { text: "FACE", image: collection3, bottomPos: "70%" },
    { text: "WELLNESS", image: collection4, bottomPos: "15%" },
  ]);
  return (
    <div className="bg-light-bg p-5 flex flex-col items-center justify-center rounded my-3">
      <h3 className="text-[23px] sm:text-[30px] md:text-[35px] lg:text-[47px] xl:text-[57px] font-[500] f-besporh">
        SHOP THE COLLECTION
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-4 mt-4 container mx-auto">
        {collections.map((collection, i) => (
          <div key={i} className="relative p-4 lg:p-5 xl:p-6">
            <img src={collection.image} className="w-full" alt="" />
            <h3
              className="underline absolute -left-0.5 f-besporh font-semibold text-xl md:text-[24px] lg:text-[32px] xl:text-[40px]"
              style={{ bottom: collection.bottomPos }}
            >
              {collection.text}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeCollection;
