import React, { useState } from "react";
import Icon from "../../assets/logo.png";
import lang from "../../language";
import MenList from "./MenList";
import WomenList from "./WomenList";
import KidList from "./KidList";
import { Link } from "react-router-dom";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ isOpen, onClose }) => {
  const [menToggle, setMenToggle] = useState<boolean>(false);
  const [womenToggle, setWomenToggle] = useState<boolean>(false);
  const [kidToggle, setKidToggle] = useState<boolean>(false);
  const [accessoriesToggle, setAccessoriesToggle] = useState<boolean>(false);
  const [giftToggle, setGiftToggle] = useState<boolean>(false);

  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-y-0 left-0 w-64 bg-white shadow-lg z-50 transform transition duration-300 ease-in-out`}
    >
      <div className="h-full overflow-y-scroll">
        <div className="h-16 py-6 border-b-2 p-2 border-gray-200 flex justify-between items-center">
          <Link to="/">
            <img className="w-16 h-16" src={Icon} alt="icon" />
          </Link>
          <svg
            onClick={onClose}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="py-2 px-4">
          {/* Men Wear */}
          <div
            className="flex py-2 justify-between cursor-pointer"
            onClick={() => setMenToggle((prevVal) => !prevVal)}
          >
            <h1 className="text-lg font-bold">{lang("men_wear")}</h1>
            <div
              className={`transform ${
                menToggle ? "rotate-90" : ""
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {menToggle && <MenList handleClose={onClose} />}
          {/* Women Wear */}
          <div
            className="flex py-2 justify-between cursor-pointer"
            onClick={() => setWomenToggle((prevVal) => !prevVal)}
          >
            <h1 className="text-lg font-bold">{lang("women_wear")}</h1>
            <div
              className={`transform ${
                womenToggle ? "rotate-90" : ""
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {womenToggle && <WomenList handleClose={onClose} />}
          {/* Kid Wear */}
          <div
            className="flex py-2 justify-between cursor-pointer"
            onClick={() => setKidToggle((prevVal) => !prevVal)}
          >
            <h1 className="text-lg font-bold">{lang("kids_wear")}</h1>
            <div
              className={`transform ${
                kidToggle ? "rotate-90" : ""
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {kidToggle && <KidList handleClose={onClose} />}
          {/* Accessories */}
          <div
            className="flex py-2 justify-between cursor-pointer"
            onClick={() => setAccessoriesToggle((prevVal) => !prevVal)}
          >
            <h1 className="text-lg font-bold">{lang("accessories")}</h1>
            <div
              className={`transform ${
                accessoriesToggle ? "rotate-90" : ""
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
          {/* Gift */}
          <div
            className="flex py-2 justify-between items-center cursor-pointer"
            onClick={() => setGiftToggle((prevVal) => !prevVal)}
          >
            <h1 className="text-lg font-bold">{lang("sports")}</h1>
            <div
              className={`transform ${
                giftToggle ? "rotate-90" : ""
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
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
