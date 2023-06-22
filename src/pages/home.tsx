import HomeShowcase from "../components/pages/home/Showcase";
import HomeVitality from "../components/pages/home/Vitality";
import primary_banner from "../assets/images/home/primary-banner.png";
import HomeCollection from "../components/pages/home/Collection";
import HomePosts from "../components/pages/home/Posts";
import HomeScience from "../components/pages/home/Science";

const HomePage = () => {
  return (
    <div>
      <HomeShowcase />
      <HomeVitality />

      <div className="container mx-auto my-5">
        <img src={primary_banner} alt="" />
      </div>

      <HomeScience />
      <HomeCollection />
      <HomePosts />
    </div>
  );
};

export default HomePage;
