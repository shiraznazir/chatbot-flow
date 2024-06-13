import React from "react";
import lang from "../../language";
import MenTopWear from "../common/MenTopWear";
import MenBottomWear from "../common/MenBottomWear";
import MenFootWear from "../common/MenFootWear";
import MenFestiveWear from "../common/MenFestiveWear";

interface MenListProps {
  setMenToggle: (toggle: boolean) => void;
  handleMenClose: () => void;
}

const MenList: React.FC<MenListProps> = ({ setMenToggle, handleMenClose }) => {
  return (
    <div
      onMouseEnter={() => setMenToggle(true)}
      onMouseLeave={handleMenClose}
      className="w-7/12 absolute flex top-20 left-[9rem] bg-white px-2"
    >
      {/* Top wear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-gray-500">
          {lang("top_wear")}
        </li>
        <MenTopWear handleClose={handleMenClose} />
      </ul>

      {/* Bottom wear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-gray-500">
          {lang("bottom_wear")}
        </li>
        <MenBottomWear handleMenClose={handleMenClose} />
      </ul>

      {/* Footwear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-gray-500">
          {lang("footwear")}
        </li>
        <MenFootWear handleMenClose={handleMenClose} />
        <li className="border-b border-gray-200 p-2"></li>
        {/* Indian Festive Wear */}
        <li className="py-2 px-2 text-md font-medium text-gray-500">
          {lang("indian_festive_wear")}
        </li>
        <MenFestiveWear handleMenClose={handleMenClose} />
      </ul>
    </div>
  );
};

export default MenList;
