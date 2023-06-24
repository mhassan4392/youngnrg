import main_image from "../../../assets/images/home/showcase-main.png";
const HomeShowcase = () => {
  return (
    <div className="container mx-auto bg-light-bg pt-10 px15 flex flex-col items-center justify-center rounded">
      <h3 className="xl:text-[57px] lg:text-[45px] md:font-[500] md:text-[34px] sm:text-[27px] text-[23px] font-[500] f-besporh uppercase">
        Your Life, Your Rules
      </h3>
      <button className="mt-2 relative f-q-heavy xl:text-[15px] md:text-xs md:text-[10px] sm:text-[9px] text-[8px] xl:w-[170px] xl:h-[50px] lg:w-[135px] lg:h-[38px] md:w-[105px] md:h-[31px] sm:w-[85px] sm:h-[30px] w-[70px] h-[24px] pt-0.5 z-10 inline-block bg-transparent text-black rounded-full border-2 border-primary hover:text-primary transition-colors duration-200">
        Shop Now
      </button>
      <img
        src={main_image}
        className="xl:-mt-10 sm:-mt-6 -mt-3 w-full xl:max-w-[600px] sm:max-w-[300px] md:max-w-[380px] lg:max-w-[480px] max-w-[250px]"
        alt="showcase main image"
      />
    </div>
  );
};

export default HomeShowcase;
