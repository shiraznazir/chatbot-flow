import React from "react";
import { Link } from "react-router-dom";
import lang from "../../language";

interface FusionProps {
  handleWomenClose: () => void;
}

const WomenIndianWear: React.FC<FusionProps> = ({ handleWomenClose }) => {
  return (
    <>
      <Link
        to="/products/Women/Indian Wear/Kurtas & Suits"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("kurtas_suits")}
        </li>
      </Link>
      <Link
        to="/products/Women/Indian Wear/Kurtis, tunis & Tops"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("kurtis_tunis_tops")}
        </li>
      </Link>
      <Link to="/products/Women/Indian Wear/Sarees" onClick={handleWomenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("sarees")}</li>
      </Link>
      <Link to="/products/Women/Indian Wear/Dresses" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("leggings_salwars_churidars")}
        </li> */}
      </Link>
      <Link to="/products/Women/Indian Wear/Dresses" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("skirts_palazzos")}
        </li> */}
      </Link>
      <Link to="/products/Women/Indian Wear/Dresses" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("dress_materials")}
        </li> */}
      </Link>
      <Link
        to="/products/Women/Indian Wear/Lengha-Cholis"
        onClick={handleWomenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("lengha_cholis")}
        </li>
      </Link>
      <Link to="/products/Women/Indian Wear/Dresses" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("dupattas_shawls")}
        </li> */}
      </Link>
      <Link to="/products/Women/Indian Wear/Dresses" onClick={handleWomenClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold">{lang("jackets")}</li> */}
      </Link>
    </>
  );
};

export default WomenIndianWear;
