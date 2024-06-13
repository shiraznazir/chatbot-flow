import { RxDashboard } from "react-icons/rx";
import { GiLoincloth } from "react-icons/gi";
import { CgMenuBoxed } from "react-icons/cg";
import { Link } from "react-router-dom";

const Drawer = () => {
  return (
    <>
      <ul className="py-4 fixed overflow-y-auto">
        <Link to={"/dashboard"}>
          <li className="border-l-4 border-white hover:border-gray-500">
            <div className="flex mx-2 justify-start items-center gap-4 p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg">
              <RxDashboard />
              <h1 className="">Dashboard</h1>
            </div>
          </li>
        </Link>
        <Link to={"/dashboard/products"}>
          <li className="border-l-4 border-white hover:border-gray-500">
            <div className="flex mx-2 justify-start items-center gap-4 p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg">
              <GiLoincloth />
              <h1 className="">Products</h1>
            </div>
          </li>
        </Link>
        <Link to={"/dashboard/orders"}>
          <li className="border-l-4 border-white hover:border-gray-500">
            <div className="flex mx-2 justify-start items-center gap-4 p-2 cursor-pointer hover:bg-gray-300 hover:rounded-lg">
              <CgMenuBoxed />
              <h1 className="">Orders</h1>
            </div>
          </li>
        </Link>
        {/* <Link to={"/dashboard"}>
          <li className="border-l-4 border-white hover:border-purple-500">
            <div className="flex mx-2 justify-start items-center gap-4 p-2 cursor-pointer hover:bg-purple-300 hover:rounded-lg">
              <RxDashboard />
              <h1 className="">Dashboard</h1>
            </div>
          </li>
        </Link>
        <Link to={"/dashboard"}>
          <li className="border-l-4 border-white hover:border-purple-500">
            <div className="flex mx-2 justify-start items-center gap-4 p-2 cursor-pointer hover:bg-purple-300 hover:rounded-lg">
              <RxDashboard />
              <h1 className="">Dashboard</h1>
            </div>
          </li>
        </Link> */}
      </ul>
    </>
  );
};

export default Drawer;
