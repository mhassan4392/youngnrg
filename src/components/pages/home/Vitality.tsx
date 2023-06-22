import { useState } from "react";
import vitality_image from "../../../assets/images/home/vitality.png";

type Card = {
  title: string;
  desc: string;
  shop: boolean;
};

const HomeVitality = () => {
  const [cards] = useState<Card[]>([
    {
      title: "Cosmetics",
      desc: "Eyes, Lips, Nails <br /> and Brows",
      shop: true,
    },
    { title: "Skin Care", desc: "Eyes, Face, Body and Hair", shop: false },
    {
      title: "Health",
      desc: "Brain, Heart, Gut and <br /> Weight Management",
      shop: false,
    },
  ]);
  return (
    <div className="container mx-auto bg-light-bg p-10 flex flex-col items-center justify-center rounded my-10">
      <h2 className="text-3xl font-bold mb-5">Full Body Vitality</h2>
      <p className="text-xl font-semibold">Your Journey begins here</p>
      <p className="text-xl font-semibold text-center">
        Indviduals can embrace a youthful feeling by focusing on beauty, <br />{" "}
        health and stamina leading to a more fulfilling and energetic lifestyle
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-8 flex flex-col items-center rounded"
          >
            <img src={vitality_image} alt="" />
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
