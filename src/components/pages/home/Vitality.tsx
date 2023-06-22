import { useState } from "react";
import vitality1 from "../../../assets/images/home/vitality1.png";
import vitality2 from "../../../assets/images/home/vitality2.png";
import vitality3 from "../../../assets/images/home/vitality3.png";

type Card = {
  image: string;
  title: string;
  desc: string;
  shop: boolean;
};

const HomeVitality = () => {
  const [cards] = useState<Card[]>([
    {
      image: vitality1,
      title: "Cosmetics",
      desc: "Eyes, Lips, Nails <br /> and Brows",
      shop: true,
    },
    {
      image: vitality2,
      title: "Skin Care",
      desc: "Eyes, Face, Body and Hair",
      shop: false,
    },
    {
      image: vitality3,
      title: "Health",
      desc: "Brain, Heart, Gut and <br /> Weight Management",
      shop: false,
    },
  ]);
  return (
    <div className="container mx-auto bg-light-bg p-10 flex flex-col items-center justify-center rounded my-10">
      <h2 className="text-[40px] font-bold mb-6 mt-3">Full Body Vitality</h2>
      <p className="text-xl font-semibold">
        Your Journey begins <span className="font-bold">here</span>
      </p>
      <p className="text-xl font-semibold text-center">
        Indviduals can embrace a youthful feeling by focusing on beauty, <br />{" "}
        health and stamina leading to a more fulfilling and energetic lifestyle
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-8 flex flex-col items-center rounded shadow-lg"
          >
            <img src={card.image} alt="" />
            <div className="grow flex flex-col items-center justify-between space-y-4 mt-3">
              <h3 className="text-3xl font-bold">{card.title}</h3>
              <p
                className="text-center text-xl font-medium"
                dangerouslySetInnerHTML={{ __html: card.desc }}
              ></p>
              {card.shop ? (
                <button className="py-2 px-10 inline-block bg-transparent text-black text-lg font-bold rounded-full border-2 border-primary">
                  Shop Now
                </button>
              ) : (
                <p className="text-xl font-semibold text-primary pb-2">
                  Coming Soon
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeVitality;
