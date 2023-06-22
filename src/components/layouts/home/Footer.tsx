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
    <div className="bg-light-bg py-14">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-x-5 flex-wrap gap-5">
          <div className="space-y-5 flex flex-col justify-between">
            <img src={logo} className="w-full" />

            <div className="flex items-center space-x-3">
              {icons.map((icon, i) => (
                <div
                  key={i}
                  className="text-3xl text-white font-bold bg-primary rounded-full p-3"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="text-xl font-medium mb-5">Quick Links</h3>
            <div className="flex flex-col space-y-2 text-lg font-medium">
              {quickLinks.map((link, i) => (
                <Link
                  to={link.to}
                  key={i}
                  className="text-[#666] hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="shrink-0">
            <h3 className="text-xl font-medium mb-5">Disclosures</h3>
            <div className="flex flex-col space-y-2 text-lg font-medium">
              {disclosureLinks.map((link, i) => (
                <Link
                  to={link.to}
                  key={i}
                  className="text-light-text hover:text-primary transition-colors duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="shrink-0 lg:col-span-2">
            <h3 className="text-xl font-medium mb-5">Contact Us</h3>
            <div className="flex items-center space-x-3">
              <FiMail />
              <p className="text-light-text font-medium -pb-0.5">
                Support@youngnrg.com
              </p>
            </div>
            <div className="flex items-stretch mt-8 mb-14">
              <div>
                <h3 className="font-semibold">Monday-Friday</h3>
                <p className="text-light-text font-medium">
                  8:00 PM - 9:00 PM EST
                </p>
              </div>
              <div className="w-0.5 mx-4 bg-black"></div>
              <div>
                <h3 className="font-semibold">Saturday</h3>
                <p className="text-light-text font-medium">
                  9:00 PM - 2:00 PM EST
                </p>
              </div>
            </div>

            <h3 className="text-xl font-medium mb-8">Subscribe</h3>

            <div className="flex items-center relative w-5/6">
              <input
                type="text"
                placeholder="Enter Your Email Here"
                className="bg-white rounded-full py-4 px-5 w-full"
              />
              <FaLocationArrow className="absolute right-5" />
            </div>

            <div className="flex items-center space-x-4 text-[50px] text-[#999] mt-5">
              <FaCcMastercard />
              <FaCcVisa />
            </div>
          </div>
        </div>

        <div className="h-1 w-full bg-[#444] rounded my-10"></div>

        <div className="flex flex-col items-center justify-center text-lg text-light-text font-medium">
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
