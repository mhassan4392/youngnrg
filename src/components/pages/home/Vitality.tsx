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
    <div className="container mx-auto bg-light-bg py-5 px-2 flex flex-col items-center justify-center rounded my-3">
      <h2 className="text-lg sm:text-sm md:text-lg lg:text-2xl xl:text-3xl f-q-extrabold mb-2 mt-2 lg:mb-4">
        Full Body Vitality
      </h2>
      <p className="font-semibold leading-tight text-xs sm:text-[11px] md:text-sm f-q-regular lg:text-base xl:text-lg">
        Your Journey begins{" "}
        <span className="f-q-extrabold font-extrabold">here</span>
      </p>
      <p className="leading-tight font-semibold text-center text-xs sm:text-[11px] md:text-sm lg:text-base xl:text-lg">
        Indviduals can embrace a youthful feeling by focusing on beauty, <br />{" "}
        health and stamina leading to a more fulfilling and energetic lifestyle
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4 w-full mt-10">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white p-8 sm:p-6 flex flex-col items-center rounded shadow-lg"
          >
            <img
              src={card.image}
              className="w-full rounded-full max-w-[230px] lg:max-w-[210px] xl:max-w-[270px]"
              alt=""
            />
            <div className="grow flex flex-col items-center justify-between space-y-4 mt-3">
              <h3 className="text-lg sm:text-base md:text-lg lg:text-2xl xl:text-3xl f-q-extrabold">
                {card.title}
              </h3>
              <p
                className="text-center text-sm sm:text-[11px] md:text-sm lg:text-base xl:!text-[19px] f-q-regular"
                dangerouslySetInnerHTML={{ __html: card.desc }}
              ></p>
              {card.shop ? (
                <button className="w-[90px] h-[28px] md:w-[100px] md:h-[32px] lg:w-[140px] lg:h-[40px] xl:w-[170px] xl:h-[50px] text-[9px] md:text-[10px] lg:text-xs xl:text-sm f-q-heavy inline-block bg-transparent text-black font-bold rounded-full border-2 border-primary hover:text-primary transition-colors duration-200">
                  Shop Now
                </button>
              ) : (
                <p className="text-sm sm:text-[10px] md:text-[11px] lg:text-sm xl:text-base f-q-heavy text-[#ff652c] pb-2 uppercase">
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
