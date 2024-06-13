import { useState } from "react";
import lang from "../../language";
import WomenWesternWear from "../common/WomenWesternWear";
import WomenIndianWear from "../common/WomenIndianWear";
import WomenFootWear from "../common/WomenFootWear";

interface WomenProps {
  handleClose: () => void;
}

const WomenList: React.FC<WomenProps> = ({ handleClose }) => {
  const [westernToggle, setWesternToggle] = useState(false);
  const [footToggle, setFootToggle] = useState(false);
  const [festiveToggle, setFestiveToggle] = useState(false);

  return (
    <>
      <div className="mt-2 ml-2">
        {/* Indian Festive Wear */}
        <div
          className="flex py-2 justify-between items-center cursor-pointer"
          onClick={() => setFestiveToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("indian_festive_wear")}</h1>
          <div
            className={`transform ${
              festiveToggle ? "rotate-90" : ""
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
        <ul className="ml-4">
          {festiveToggle && (
            <WomenIndianWear
              handleWomenClose={() => {
                handleClose();
                setFestiveToggle((prevVal) => !prevVal);
              }}
            />
          )}
        </ul>
        {/* Western Wear */}
        <div
          className="flex py-2 justify-between cursor-pointer"
          onClick={() => setWesternToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("western_wear")}</h1>
          <div
            className={`transform ${
              westernToggle ? "rotate-90" : ""
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
        <ul className="ml-4">
          {westernToggle && (
            <WomenWesternWear
              handleWomenClose={() => {
                handleClose();
                setWesternToggle((preVal) => !preVal);
              }}
            />
          )}
        </ul>

        {/* Foot Wear */}
        <div
          className="flex py-2 justify-between cursor-pointer"
          onClick={() => setFootToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("footwear")}</h1>
          <div
            className={`transform ${
              footToggle ? "rotate-90" : ""
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
        <ul className="ml-4">
          {footToggle && (
            <WomenFootWear
              handleWomenClose={() => {
                handleClose();
                setFootToggle((prevVal) => !prevVal);
              }}
            />
          )}
        </ul>
      </div>
    </>
  );
};

export default WomenList;
