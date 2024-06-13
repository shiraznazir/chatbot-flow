import { Outlet } from "react-router-dom";
import Drawer from "./Drawer";
import Header from "./Header";
import { useState } from "react";
import ScrollToTop from "../components/common/ScrollToTop";

const DashboardRoot = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="">
      <Header toggle={toggle} setToggle={setToggle} />
      <ScrollToTop />
      <div className="pt-20 grid grid-cols-5 z-0">
        {toggle && (
          <div className="col-span-1">
            <Drawer />
          </div>
        )}
        <div className={`${toggle ? "col-span-4" : "col-span-5"}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardRoot;
