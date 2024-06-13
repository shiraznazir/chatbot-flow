import React from "react";
import { Link } from "react-router-dom";
import lang from "../../language";

interface MenProps {
  handleMenClose: () => void;
}

const MenFootWear: React.FC<MenProps> = ({ handleMenClose }) => {
  return (
    <>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("casual_shoes")}
        </li> */}
      </Link>
      <Link to="/products/Men/Foot Wear/Sports Shoes" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sports_shoes")}
        </li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("formal_shoes")}
        </li> */}
      </Link>
      <Link to="/products/Men/Foot Wear/Sneakers" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sneakers")}
        </li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sandals_floaters")}
        </li> */}
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("flip_flops")}
        </li> */}
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">{lang("socks")}</li> */}
      </Link>
    </>
  );
};

export default MenFootWear;
