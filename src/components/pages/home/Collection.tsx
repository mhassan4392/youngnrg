import { useState } from "react";
import collection_header from "../../../assets/images/home/collection-header.png";
import collection1 from "../../../assets/images/home/collection1.png";
import collection2 from "../../../assets/images/home/collection2.png";
import collection3 from "../../../assets/images/home/collection3.png";
import collection4 from "../../../assets/images/home/collection4.png";

const HomeCollection = () => {
  const [images] = useState<string[]>([
    collection1,
    collection2,
    collection3,
    collection4,
  ]);
  return (
    <div className="bg-light-bg p-10 flex flex-col items-center justify-center rounded my-5">
      <img src={collection_header} alt="" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14 container mx-auto">
        {images.map((image, i) => (
          <img src={image} key={i} alt="" />
        ))}
      </div>
    </div>
  );
};

export default HomeCollection;
