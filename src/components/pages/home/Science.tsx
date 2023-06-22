import bg_image from "../../../assets/images/home/scince-bg.jpg";
const HomeScience = () => {
  return (
    <div
      className="px-10 pt-40 pb-32 container mx-auto rounded bg-no-repeat bg-right-top bg-cover flex my-8"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="flex flex-col space-y-6 w-full lg:w-1/2">
        <h2 className="text-[70px] font-bold">Youth Driven By Science</h2>
        <p className="text-lg font-semibold">
          We are here to help you feel as youthful as ever without compromising
          on your beauty or values we steer clear all of those yucky chemicals
          so you can the embrance the fun and plaful side of your life
        </p>
        <button className="py-3 px-12 bg-transparent text-black text-lg font-bold rounded-full border-2 border-primary w-max hover:text-primary transition-colors duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomeScience;
