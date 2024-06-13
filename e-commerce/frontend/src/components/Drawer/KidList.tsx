import { useState } from "react";
import lang from "../../language";
import MenTopWear from "../common/MenTopWear";
import MenBottomWear from "../common/MenBottomWear";
import MenSleepWear from "../common/MenSleepWear";
import MenFootWear from "../common/MenFootWear";
import MenFestiveWear from "../common/MenFestiveWear";

interface KidListProps {
  handleClose: () => void;
}

const KidList: React.FC<KidListProps> = ({ handleClose }) => {
  const [topToggle, setTopToggle] = useState(false);
  const [bottomToggle, setBottomToggle] = useState(false);
  const [footToggle, setFootToggle] = useState(false);
  const [sleepToggle, setSleepToggle] = useState(false);
  const [festiveToggle, setFestiveToggle] = useState(false);

  return (
    <>
      <div className="mt-2 ml-2">
        {/* Top Wear */}
        <div
          className="flex py-2 justify-between cursor-pointer"
          onClick={() => setTopToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("top_wear")}</h1>
          <div
            className={`transform ${
              topToggle ? "rotate-90" : ""
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
          {topToggle && (
            <MenTopWear
              handleClose={() => {
                handleClose();
                setTopToggle((preVal) => !preVal);
              }}
            />
          )}
        </ul>
        {/* Bottom wear */}
        <div
          className="flex py-2 justify-between cursor-pointer"
          onClick={() => setBottomToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("bottom_wear")}</h1>
          <div
            className={`transform ${
              bottomToggle ? "rotate-90" : ""
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
          {bottomToggle && (
            <MenBottomWear
              handleMenClose={() => {
                handleClose();
                setTopToggle((preVal) => !preVal);
              }}
            />
          )}
        </ul>
        {/* Inner & Sleep wear */}
        <div
          className="flex py-2 justify-between cursor-pointer"
          onClick={() => setSleepToggle((preVal) => !preVal)}
        >
          <h1 className="text-md font-normal">{lang("innerwear_sleepwear")}</h1>
          <div
            className={`transform ${
              sleepToggle ? "rotate-90" : ""
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
          {sleepToggle && (
            <MenSleepWear
              handleMenClose={() => {
                handleClose();
                setSleepToggle((preVal) => !preVal);
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
            <MenFootWear
              handleMenClose={() => {
                handleClose();
                setFootToggle((prevVal) => !prevVal);
              }}
            />
          )}
        </ul>
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
            <MenFestiveWear
              handleMenClose={() => {
                handleClose();
                setFestiveToggle((prevVal) => !prevVal);
              }}
            />
          )}
        </ul>
      </div>
    </>
  );
};

export default KidList;
