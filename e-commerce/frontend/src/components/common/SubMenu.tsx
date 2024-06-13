import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { IoFilterSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

interface SubMenuProps {
  main: string;
  sub?: string;
  btn?: boolean;
  handleBack: () => void;
}

const SubMenu: React.FC<SubMenuProps> = ({ main, sub, btn, handleBack }) => {
  return (
    <div className="w-full bg-gray-100 flex justify-between items-center p-2">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <div onClick={handleBack} className="cursor-pointer">
            <FaArrowLeft />
          </div>
          <h1>{main}</h1>
          {sub && (
            <>
              <h1>/</h1>
              <h1 className="font-semibold">{sub}</h1>
            </>
          )}
        </div>
      </div>
      {btn && (
        <div className="flex gap-2 items-center">
          <Link to={"/dashboard/add-products"}>
            <button
              type="button"
              className="bg-gray-500 px-3 p-2 text-white rounded-lg shadow-xl"
            >
              <GrPowerReset />
            </button>
          </Link>
          <Link to={"/dashboard/add-products"}>
            <button
              type="button"
              className="bg-gray-500 px-3 p-2 text-white rounded-lg shadow-xl"
            >
              <IoFilterSharp />
            </button>
          </Link>
          <Link to={"/dashboard/add-products"}>
            <button
              type="button"
              className="bg-gray-500 px-3 p-1 flex gap-[2px] text-white rounded-lg shadow-xl"
            >
              Add
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SubMenu;
