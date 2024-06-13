import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import lang from "../../language";
import Searchbar from "../common/Searchbar";
import Drawer from "../Drawer/Drawer";
import Icon from "../../assets/logo2.png";
import MenList from "./MenList";
import WomenList from "./WomenList";
import KidsList from "./KidsList";
import AccessoriesList from "./AccessoriesList";
import GiftList from "./GiftList";
import ProfileList from "./ProfileList";
import { logout } from "../../redux/reducers/userSlice";
import { emptyCart } from "../../redux/reducers/cartSlice";
import { emptyOrder } from "../../redux/reducers/orderSlice";
import { emptyAdresses } from "../../redux/reducers/addressSlice";
import { logoutUser } from "../../apis";
import toast from "react-hot-toast";

const Header = () => {
  const dispatch = useDispatch();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [menToggle, setMenToggle] = useState(false);
  const [womenToggle, setWomenToggle] = useState(false);
  const [kidsToggle, setKidsToggle] = useState(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState(false);
  const [giftToggle, setGiftToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);

  const handleLogout = () => {
    setProfileToggle(false);
    logoutUser()
      .then((response: any) => {
        if (response.success) {
          toast.success(response.message);
          dispatch(logout());
          dispatch(emptyCart());
          dispatch(emptyOrder());
          dispatch(emptyAdresses());
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error(err);
      });
  };

  return (
    <div className="w-full px-4 lg:px-10 h-16 md:h-20 bg-white fixed flex justify-between shadow-md z-50">
      <div className="w-6/12 flex items-center gap-4 sm:w-3/12 lg:w-1/12 cursor-pointer my-auto">
        <svg
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 block lg:hidden"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <Link to="/">
          <img
            className="w-14 h-14 md:w-20 md:h-20 cursor-pointer"
            src={Icon}
            alt="icon"
          />
        </Link>
      </div>

      <ul className="w-6/12 lg:flex gap-4 hidden justify-center">
        <li
          onMouseEnter={() => setMenToggle(true)}
          onMouseLeave={() => setMenToggle(false)}
          className="flex gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <div className="flex items-center justify-center gap-1">
            <h1 className="text-md">{lang("men_wear")}</h1>
            <div
              className={`transform ${
                menToggle ? "rotate-180" : ""
              } transition-transform`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {menToggle && (
            <MenList
              setMenToggle={setMenToggle}
              handleMenClose={() => setMenToggle(false)}
            />
          )}
        </li>
        <li
          onMouseEnter={() => setWomenToggle(true)}
          onMouseLeave={() => setWomenToggle(false)}
          className="flex gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <h1 className="text-md">{lang("womens_wear")}</h1>
          <div
            className={`transform ${
              womenToggle ? "rotate-180" : ""
            } transition-transform`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          {womenToggle && (
            <WomenList
              setWomenToggle={setWomenToggle}
              handleWomenClose={() => setWomenToggle(false)}
            />
          )}
        </li>
        <li
          onMouseEnter={() => setKidsToggle(true)}
          onMouseLeave={() => setKidsToggle(false)}
          className="flex gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <h1 className="text-md">{lang("kids_wear")}</h1>
          <div
            className={`transform ${
              kidsToggle ? "rotate-180" : ""
            } transition-transform`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          {kidsToggle && (
            <KidsList
              setKidsToggle={setKidsToggle}
              handleKidsClose={() => setKidsToggle(false)}
            />
          )}
        </li>
        <li
          onMouseEnter={() => setAccessoriesToggle(true)}
          onMouseLeave={() => setAccessoriesToggle(false)}
          className="flex gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <h1 className="text-md">{lang("accessories")}</h1>
          <div
            className={`transform ${
              accessoriesToggle ? "rotate-180" : ""
            } transition-transform`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          {accessoriesToggle && (
            <AccessoriesList
              setAccessoriesToggle={setAccessoriesToggle}
              handleAccessoriesClose={() => setAccessoriesToggle(false)}
            />
          )}
        </li>
        <li
          onMouseEnter={() => setGiftToggle(true)}
          onMouseLeave={() => setGiftToggle(false)}
          className="flex gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <h1 className="text-md">{lang("sports")}</h1>
          <div
            className={`transform ${
              giftToggle ? "rotate-180" : ""
            } transition-transform`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </div>
          {giftToggle && (
            <GiftList
              setGiftToggle={setGiftToggle}
              handleGiftClose={() => setGiftToggle(false)}
            />
          )}
        </li>
      </ul>

      <div className="w-10/12 lg:w-6/12 flex gap-6 items-center justify-end">
        <Searchbar style={"hidden sm:block"} />
        <li
          onMouseEnter={() => setProfileToggle(true)}
          onMouseLeave={() => setProfileToggle(false)}
          className="flex h-full gap-2 items-center cursor-pointer border-b-4 border-white hover:border-gray-500"
        >
          <div className="flex flex-col cursor-pointer items-center mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
            </svg>
            <h1 className="hidden md:block text-md text-center">Profile</h1>
          </div>
          {profileToggle && (
            <ProfileList
              handleLogout={handleLogout}
              setProfileToggle={setProfileToggle}
              handleProfileClose={() => setProfileToggle(false)}
            />
          )}
        </li>
        <Link to="/checkout/cart">
          <div className="flex flex-col cursor-pointer items-center mr-2 mb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
            <h1 className="hidden md:block text-md text-center">Cart</h1>
          </div>
        </Link>
        {isDrawerOpen && (
          <Drawer
            isOpen={isDrawerOpen}
            onClose={() => setIsDrawerOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
