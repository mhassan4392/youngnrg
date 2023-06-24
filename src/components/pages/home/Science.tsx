import bg_image from "../../../assets/images/home/science-bg.jpg";
const HomeScience = () => {
  return (
    <div
      className="px-10 xl:pt-36 xl:pb-24 lg:pt-32 lg:pb-20 pt-14 pb-12 container mx-auto rounded bg-no-repeat bg-right-top bg-cover flex my-3"
      style={{ backgroundImage: `url(${bg_image})` }}
    >
      <div className="flex flex-col w-full sm:w-1/2">
        <h2 className="text-[40px] sm:text-[35px] md:text-[43px] lg:text-[60px] xl:text-[73px] !m-0 !p-0 leading-tight f-besporh mb-3">
          Youth Driven <br /> By Science
        </h2>
        <p className="f-q-regular text-sm sm:text-xs xl:text-base leading-tight mb-4">
          We are here to help you feel as youthful as ever without compromising
          on your beauty or values we steer clear all of those yucky chemicals
          so you can the embrance the fun and plaful side of your life
        </p>
        <button className="xl:w-[170px] xl:h-[53px] lg:w-[130px] lg:h-[40px] w-[100px] h-[30px] text-[10px] sm:w-[90px] sm:h-[30px] sm:text-[9px] md:w-[105px] md:h-[32px] md:text-[10px] lg:text-xs xl:text-sm pt-0.5 f-q-heavy bg-transparent text-black font-bold rounded-full border-2 border-primary hover:text-primary transition-colors duration-200">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default HomeScience;
