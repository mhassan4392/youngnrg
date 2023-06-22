import header_image from "../../../assets/images/home/showcase-header.png";
import main_image from "../../../assets/images/home/showcase-main.png";
const HomeShowcase = () => {
  return (
    <div className="container mx-auto bg-light-bg p-10 flex flex-col items-center justify-center rounded">
      <img src={header_image} alt="showcase header image" />
      <button className="py-2 mt-8 relative z-10 px-10 inline-block bg-transparent text-black text-lg font-bold rounded-full border-2 border-primary">
        Shop Now
      </button>
      <img src={main_image} className="-mt-5" alt="showcase main image" />
    </div>
  );
};

export default HomeShowcase;
