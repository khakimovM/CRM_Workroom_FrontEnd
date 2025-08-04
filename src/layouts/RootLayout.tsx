import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex bg-[#F4F9FD] w-full h-screen">
      <SideBar />
      <div>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
