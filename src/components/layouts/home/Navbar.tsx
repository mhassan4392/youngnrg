import logo from "../../../assets/images/common/logo.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMenu, FiShoppingBag } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";
import HomeNavbarMenu from "./Menu";
export type LinkType = {
  title: string;
  path: string;
};

const HomeNavbar = () => {
  const [links] = useState<LinkType[]>([
    { title: "shop", path: "/shop" },
    { title: "about us", path: "/about" },
    { title: "join us", path: "/join" },
  ]);

  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <>
      <div className="bg-light-bg sm:h-12 h-5"></div>
      <div className="container mx-auto flex items-center justify-between sm:py-5 py-2 my-4 relative overflow-hidden px-2 sm:px-0">
        <img
          src={logo}
          className="xl:w-[280px] lg:w-[220px] md:w-[170px] w-[140px] xl:mr-[160px] lg:mr-[120px] md:mr-[90px]"
          alt=""
        />

        <div className="grow hidden md:flex items-center justify-between">
          <div className=" flex items-center xl:space-x-[6.5rem] lg:space-x-[5.8rem] md:space-x-[3.8rem] uppercase">
            {links.map((link, i) => (
              <Link
                className="hover:text-primary transition-colors duration-200 f-q-extrabold xl:text-[15px] lg:text-[13px] md:text-[10px]"
                key={i}
                to={link.path}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center space-x-5 lg:pl-14 md:pl-10">
            <FiSearch className="hover:text-primary transition-colors duration-200 cursor-pointer xl:text-xl lg:text-base md:text-sm" />
            <FiShoppingBag className="hover:text-primary transition-colors duration-200 cursor-pointer xl:text-xl lg:text-base md:text-sm" />
          </div>

          <div className="flex">
            <button className="text-white f-q-heavy xl:text-[14px] lg:text-[12px] md:text-[9px] bg-primary rounded-full hover:bg-opacity-90 transition-all duration-200 xl:h-[45px] xl:w-[125px] lg:h-[35px] lg:w-[105px] md:h-[28px] md:w-[80px]">
              Log in
            </button>
          </div>
        </div>

        <div
          className="text-xl cursor-pointer md:hidden px-1 sm:px-0 shrink-0"
          onClick={() => setShowMenu(!showMenu)}
        >
          {!showMenu ? <FiMenu /> : <MdOutlineClose />}
        </div>

        <HomeNavbarMenu show={showMenu} links={links} />
      </div>
    </>
  );
};

export default HomeNavbar;
