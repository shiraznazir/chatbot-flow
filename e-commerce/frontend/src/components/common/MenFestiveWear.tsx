import React from "react";
import { Link } from "react-router-dom";
import lang from "../../language";

interface MenProps {
  handleMenClose: () => void;
}

const MenFestiveWear: React.FC<MenProps> = ({ handleMenClose }) => {
  return (
    <>
      <Link
        to="/products/Men/Indian Festive Wear/Kurtas & Kurta Sets"
        onClick={handleMenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("kurtas_kurta_sets")}
        </li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sherwanis")}
        </li> */}
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("nehru_jackets")}
        </li> */}
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">{lang("dhotis")}</li> */}
      </Link>
    </>
  );
};

export default MenFestiveWear;
