import logo from "../assets/logo.png";
import Searchbar from "../components/common/Searchbar";
import profilePic from "../assets/profile.jpg";
import { useState } from "react";
import Profile from "./Profile/Profile";

const Header = ({
  setToggle: setToggle,
  toggle: toggle,
}: {
  setToggle: any;
  toggle: any;
}) => {
  const [profileToggle, setProfileToggle] = useState(false);

  return (
    <div className="w-full fixed bg-white h-20 grid grid-cols-5 shadow-lg z-50">
      <div className="row-span-1 flex gap-4 items-center pl-4">
        {toggle ? (
          <svg
            onClick={() => setToggle((prevState: any) => !prevState)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        ) : (
          <svg
            onClick={() => setToggle((prevState: any) => !prevState)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        )}

        <img className="w-20 h-16" src={logo} alt="logo" />
      </div>
      <div className="col-span-3 flex items-center gap-4">
        <Searchbar style={"w-full"} />
      </div>
      <div className="col-span-1 flex gap-3 justify-center items-center">
        <img
          className="w-14 h-14 bg-gray-400 rounded-full cursor-pointer"
          src={profilePic}
          alt="admin-profile"
          onClick={() => setProfileToggle((prevVal) => !prevVal)}
        />
        <div>
          <h1 className="font-bold">Noor Alam</h1>
          <h1>Admin Bro</h1>
        </div>
      </div>
      {profileToggle && <Profile setProfileToggle={setProfileToggle} />}
    </div>
  );
};

export default Header;
