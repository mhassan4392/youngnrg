import { useState } from "react";
import logo from "../../../assets/images/common/logo-footer.png";
import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaLocationArrow,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
const HomeFooter = () => {
  const [icons] = useState([<FaFacebookF />, <FaYoutube />, <FaInstagram />]);

  const [quickLinks] = useState([
    { title: "Home", to: "/" },
    { title: "Shop", to: "/shop" },
    { title: "About Us", to: "/about" },
    { title: "Join Us", to: "/join" },
  ]);

  const [disclosureLinks] = useState([
    { title: "Refund Policy", to: "/" },
    { title: "Terms & Conditions", to: "/" },
    { title: "Privacy Policy", to: "/" },
    { title: "Shipping Policy", to: "/" },
    { title: "Policies & Procedures", to: "/" },
    { title: "Young NRG Reward Plans", to: "/" },
    { title: "Income Disclosure", to: "/" },
  ]);
  return (
    <div className="bg-light-bg py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:flex space-x-5 justify-between gap-5 md:gap-0">
          <div className="space-y-5 flex flex-col justify-between px-5 lg:space-x-5">
            <img
              src={logo}
              className="w-full max-w-[200px] sm:max-w-[250px] md:max-w-[190px] lg:max-w-[250px] xl:max-w-[310px]"
            />

            <div className="flex items-center space-x-0.5 lg:space-x-1">
              {icons.map((icon, i) => (
                <div
                  key={i}
                  className="text-white font-bold bg-primary rounded-full p-2 lg:!text-2xl xl:!text-3xl cursor-pointer hover:bg-opacity-90 transition-all duration-200"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="f-q-regular text-sm md:text-xs lg:text-[15px] xl:text-[17px] lg:mb-7 font-semibold mb-5 uppercase">
              Quick Links
            </h3>
            <div className="flex flex-col space-y-2 md:space-y-3 text-sm font-medium">
              {quickLinks.map((link, i) => (
                <Link
                  to={link.to}
                  key={i}
                  className="text-[#666] hover:text-primary transition-colors duration-200 text-xs md:text-[10px] lg:text-sm xl:text-base f-q-regular"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="f-q-regular text-sm md:text-xs lg:text-[15px] xl:text-[17px] lg:mb-7 font-semibold mb-5 uppercase">
              Disclosures
            </h3>
            <div className="flex flex-col space-y-2 md:space-y-3 text-lg font-medium">
              {disclosureLinks.map((link, i) => (
                <Link
                  to={link.to}
                  key={i}
                  className="text-light-text hover:text-primary transition-colors duration-200 text-xs md:text-[10px] lg:text-sm xl:text-base f-q-regular"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="shrink-0 md:col-span-2 f-q-regular">
            <h3 className="f-q-regular text-sm font-semibold mb-5 uppercase lg:text-[15px] xl:text-[17px] lg:mb-7 md:text-xs">
              Contact Us
            </h3>
            <div className="flex items-center space-x-3">
              <FiMail />
              <p className="text-light-text font-medium text-sm md:text-xs xl:text-base -pb-0.5">
                Support@youngnrg.com
              </p>
            </div>
            <div className="flex items-stretch mt-8 mb-14">
              <div>
                <h3 className="font-semibold text-sm md:text-[10px] lg:text-sm xl:text-base">
                  Monday-Friday
                </h3>
                <p className="text-light-text font-medium text-xs md:text-[9px] lg:text-xs xl:text-sm">
                  8:00 PM - 9:00 PM EST
                </p>
              </div>
              <div className="w-0.5 mx-4 bg-black"></div>
              <div>
                <h3 className="font-semibold text-sm md:text-[10px] lg:text-sm xl:text-base">
                  Saturday
                </h3>
                <p className="text-light-text font-medium text-xs md:text-[9px] lg:text-xs xl:text-sm">
                  9:00 PM - 2:00 PM EST
                </p>
              </div>
            </div>

            <h3 className="text-sm f-q-regular font-semibold mb-2 uppercase lg:text-[15px] xl:text-[17px] md:text-xs">
              Subscribe
            </h3>

            <div className="flex items-center relative w-[250px] lg:w-[300px]">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="bg-white rounded-full py-2 lg:py-2.5 xl:py-3 px-3 w-full placeholder:text-xs xl:placeholder:text-sm"
              />
              <FaLocationArrow className="absolute right-5 xl:text-lg" />
            </div>

            <div className="flex items-center space-x-4 text-[30px] sm:text-[35px] lg:text-[40px] xl:text-[45px] mt-5">
              <FaCcMastercard className="cursor-pointer text-[#999] hover:text-black transition-colors duration-200" />
              <FaCcVisa className="cursor-pointer text-[#999] hover:text-black transition-colors duration-200" />
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-[#444] rounded my-10"></div>

        <div className="flex flex-col items-center justify-center text-xs lg:text-sm xl:text-lg uppercase text-light-text px-2 f-q-regular">
          <p className="text-center">
            These Statements have not been evaluated by the food and drug
            administrantions
          </p>
          <p className="text-center">
            Young NRG products are not intended to diagnose, prevent, treate or
            cure any disease
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeFooter;
