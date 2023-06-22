import { Outlet } from "react-router-dom";
import HomeNavbar from "../components/layouts/home/Navbar";
import HomeFooter from "../components/layouts/home/Footer";

const HomeLayout = () => {
  return (
    <div>
      <HomeNavbar />
      <Outlet />
      <HomeFooter />
    </div>
  );
};

export default HomeLayout;
