import HomeShowcase from "../components/pages/home/Showcase";
import HomeVitality from "../components/pages/home/Vitality";
import HomeCollection from "../components/pages/home/Collection";
import HomePosts from "../components/pages/home/Posts";
import HomeScience from "../components/pages/home/Science";

const HomePage = () => {
  return (
    <div>
      <HomeShowcase />
      <HomeVitality />

      <div className="container mx-auto my-3 bg-primary py-2 sm:py-3 lg:py-8">
        <p
          className="text-sm sm:text-[22px] md:text-[26px] lg:text-[33px] xl:text-[40px] f-besporh text-center text-white w-full tracking-wider"
          style={{ fontWeight: "lighter" }}
        >
          ENERGIZE YOUR LOOK AND YOUR LIFE WITH{" "}
          <span className="underline">YOUNG NRG</span>
        </p>
      </div>

      <HomeScience />
      <HomeCollection />
      <HomePosts />
    </div>
  );
};

export default HomePage;
