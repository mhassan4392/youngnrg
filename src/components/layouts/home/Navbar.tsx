import logo from "../../../assets/images/common/logo.png";
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
    <div className="container mx-auto flex items-center justify-between space-x-10 py-4 my-4 relative">
      <img src={logo} alt="" />

      <div className="hidden lg:flex items-center space-x-10 uppercase font-semibold text-xl">
        {links.map((link, i) => (
          <Link
            className="hover:text-primary transition-colors duration-200"
            key={i}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <div className="hidden lg:flex items-center justify-center text-2xl space-x-4">
        <FiSearch className="hover:text-primary transition-colors duration-200 cursor-pointer" />
        <FiShoppingBag className="hover:text-primary transition-colors duration-200 cursor-pointer" />
      </div>

      <div className="hidden lg:flex">
        <button className="text-white bg-primary rounded-full py-2 px-10 text-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
          Log in
        </button>
      </div>

      <div
        className="text-xl cursor-pointer lg:hidden px-1 sm:px-0"
        onClick={() => setShowMenu(!showMenu)}
      >
        {!showMenu ? <FiMenu /> : <MdOutlineClose />}
      </div>

      <HomeNavbarMenu show={showMenu} links={links} />
    </div>
  );
};

export default HomeNavbar;
