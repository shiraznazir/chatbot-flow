import React from "react";
import { Link } from "react-router-dom";
import lang from "../../language";

interface Women {
  handleWomenClose: () => void;
}

const WomenWesternWear: React.FC<Women> = ({ handleWomenClose }) => {
  return (
    <>
      <Link
        to="/products/Women/Western Wear/Dresses"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("dresses")}</li>
      </Link>
      <Link to="/products/Women/Western Wear/Tops" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("tops")}</li>
      </Link>
      <Link
        to="/products/Women/Western Wear/T-Shirts"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("t_shirts")}
        </li>
      </Link>
      <Link to="/products/Women/Western Wear/Jeans" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("jeans")}</li>
      </Link>
      <Link
        to="/products/Women/Western Wear/Co-ords"
        onClick={handleWomenClose}
      >
        {/* <li className="py-1 px-2 text-xs hover:font-bold">{lang("co_ords")}</li> */}
      </Link>
      <Link
        to="/products/Women/Western Wear/Dresses"
        onClick={handleWomenClose}
      >
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("playsuits")}
        </li> */}
      </Link>
      <Link
        to="/products/Women/Western Wear/Dresses"
        onClick={handleWomenClose}
      >
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("jumpsuits")}
        </li> */}
      </Link>
      <Link
        to="/products/Women/Western Wear/Dresses"
        onClick={handleWomenClose}
      >
        {/* <li className="py-1 px-2 text-xs hover:font-bold">{lang("shurgs")}</li> */}
      </Link>
      <Link
        to="/products/Women/Western Wear/Sweaters & SweatsShirts"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sweaters_sweetshirts")}
        </li>
      </Link>
      <Link
        to="/products/Women/Western Wear/Dresses"
        onClick={handleWomenClose}
      >
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("jackets_coats")}
        </li> */}
      </Link>
      <Link to="/search" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("blazers_waistcoats")}
        </li> */}
      </Link>
    </>
  );
};

export default WomenWesternWear;
