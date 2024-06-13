import { Link } from "react-router-dom";
import lang from "../../language";
import React from "react";

interface Women {
  handleWomenClose: () => void;
}

const WomenFootWear: React.FC<Women> = ({ handleWomenClose }) => {
  return (
    <>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("casual_shoes")}
        </li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("flats")}</li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("heels")}</li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("boots")}</li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sports_shoes_floaters")}
        </li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("flip_flops")}
        </li>
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("socks")}</li>
      </Link>
    </>
  );
};

export default WomenFootWear;
