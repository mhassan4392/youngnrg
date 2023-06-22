import emoji_image from "../../../assets/images/home/posts-emoji.png";
import header_image from "../../../assets/images/home/posts-header.png";
import post1 from "../../../assets/images/home/post1.png";
import post2 from "../../../assets/images/home/post2.png";
import post3 from "../../../assets/images/home/post3.png";
import post4 from "../../../assets/images/home/post4.png";
import { useState } from "react";

const HomePosts = () => {
  const [posts] = useState<string[]>([post1, post2, post3, post4]);
  return (
    <div className="container mx-auto p-5 my-5 flex flex-col items-center justify-center">
      <img src={emoji_image} className="mb-8" alt="" />
      <img src={header_image} className="mb-6" alt="" />
      <p className="text-xl font-medium text-center mb-14">
        Join The Young NRG Community: Tag Us In Your Posts!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts.map((post, i) => (
          <img src={post} key={i} className="rounded" />
        ))}
      </div>
      <div className="grid grid-cols-4 rounded overflow-hidden w-5/6 mt-10">
        {Array.from({ length: 4 }).map((_ar, i) => (
          <div
            key={i}
            className={`h-1.5 bg-light-bg ${
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
