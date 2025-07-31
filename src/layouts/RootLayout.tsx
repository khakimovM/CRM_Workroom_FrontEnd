import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
