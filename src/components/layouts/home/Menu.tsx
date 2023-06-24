import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import type { LinkType } from "./Navbar";

type Props = {
  show: boolean;
  links: LinkType[];
};

const HomeNavbarMenu = ({ show, links }: Props) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed top-20 left-0 right-0 bg-white !m-0 p-5 z-50"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            {links.map((link, i) => (
              <Link
                key={i}
                to={link.path}
                className="hover:text-primary f-q-extrabold transition-colors duration-200 uppercase"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center text-2xl space-x-4 my-5">
            <FiSearch className="hover:text-primary transition-colors duration-200 cursor-pointer" />
            <FiShoppingBag className="hover:text-primary transition-colors duration-200 cursor-pointer" />
          </div>

          <div className="flex items-center justify-center my-5">
            <button className="text-white bg-primary rounded-full py-2 px-10 text-lg font-semibold hover:bg-opacity-90 transition-all duration-200">
              Log in
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default HomeNavbarMenu;
