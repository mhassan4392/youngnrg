import { Routes, Route } from "react-router-dom";
import HomeLayout from "../layouts/Home";
import HomePage from "../pages/home";
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
