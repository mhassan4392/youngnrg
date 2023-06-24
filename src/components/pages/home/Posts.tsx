import emoji_image from "../../../assets/images/home/posts-emoji.png";
import post1 from "../../../assets/images/home/post1.png";
import post2 from "../../../assets/images/home/post2.png";
import post3 from "../../../assets/images/home/post3.png";
import post4 from "../../../assets/images/home/post4.png";
import { useState } from "react";

const HomePosts = () => {
  const [posts] = useState<string[]>([post1, post2, post3, post4]);
  return (
    <div className="container mx-auto py-5 my-5 flex flex-col items-center justify-center">
      <img
        src={emoji_image}
        className="mb-4 max-w-[60px] md:max-w-[70px] lg:max-w-[90px] xl:max-w-[115px]"
        alt=""
      />
      <h3 className="text-[27px] sm:text-[33px] md:text-[40px] lg:text-[53px] xl:text-[66px] f-besporh font-semibold mb-2 space tracking-widest">
        #YOUNGNRG
      </h3>
      <p className="f-q-regular text-xs sm:text-[11px] md:text-xs lg:text-base xl:text-lg text-center mb-14">
        Join The Young NRG Community: Tag Us In Your Posts!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
        {posts.map((post, i) => (
          <img src={post} key={i} className="rounded" />
        ))}
      </div>
      <div className="grid grid-cols-4 rounded overflow-hidden w-5/6 mt-10">
        {Array.from({ length: 4 }).map((_ar, i) => (
          <div
            key={i}
            className={`h-1.5 sm:h-0.5 md:h-1 bg-light-bg ${
              i == 0 ? "bg-primary rounded" : ""
            }`}
          >
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePosts;
