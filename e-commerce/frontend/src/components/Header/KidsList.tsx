import { Link } from "react-router-dom";
import lang from "../../language";

const KidsList = ({
  setKidsToggle: setKidToggle,
  handleKidsClose: handleKidsClose,
}: {
  setKidsToggle: any;
  handleKidsClose: any;
}) => {
  return (
    <div
      onMouseEnter={() => setKidToggle(true)}
      onMouseLeave={handleKidsClose}
      className="w-7/12 absolute flex top-20 left-[9rem] bg-white px-2"
    >
      {/* Indian & Fusion list */}

      <ul className="w-2/6 p-4">
        <li className="p-2 text-md font-medium text-purple-500">
          {lang("indian_fusion_list")}
        </li>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("kurtas_suits")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("kurtis_tunis_tops")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sarees")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("leggings_salwars_churidars")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("skirts_palazzos")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("dress_materials")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("lengha_cholis")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("dupattas_shawls")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("jackets")}
          </li>
        </Link>
        {/* <li className="border-b border-gray-200 p-2"></li> */}
      </ul>

      {/* Western wear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("western_wear")}
        </li>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("dresses")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("tops")}</li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("t_shirts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("jeans")}</li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("co_ords")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("playsuits")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("jumpsuits")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("shurgs")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sweaters_sweetshirts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("jackets_coats")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("blazers_waistcoats")}
          </li>
        </Link>
      </ul>

      {/* Footwear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("footwear")}
        </li>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("casual_shoes")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("flats")}</li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("heels")}</li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("boots")}</li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sports_shoes_floaters")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("flip_flops")}
          </li>
        </Link>
        <Link to="/search" onClick={handleKidsClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("socks")}</li>
        </Link>
      </ul>
    </div>
  );
};

export default KidsList;
