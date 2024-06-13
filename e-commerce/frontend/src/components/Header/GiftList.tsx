import lang from "../../language";
import { Link } from "react-router-dom";

const GiftList = ({
  setGiftToggle,
  handleGiftClose: handleGiftClose,
}: {
  setGiftToggle: any;
  handleGiftClose: any;
}) => {
  return (
    <div
      onMouseEnter={() => setGiftToggle(true)}
      onMouseLeave={handleGiftClose}
      className="w-7/12 absolute flex top-20 left-[9rem] bg-white px-2"
    >
      {/* Top wear list */}

      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("top_wear")}
        </li>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("t_shirt")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("casual_shirts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("formal_shirts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sweet_shirts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sweaters")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("jackets")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("blazwers_Coats")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("suits")}</li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("ram_jackets")}
          </li>
        </Link>
        {/* <li className="border-b border-gray-200 p-2"></li> */}
      </ul>

      {/* Bottom wear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("bottom_wear")}
        </li>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("jeans")}</li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("casual_trousers")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("formal_trousers")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("shorts")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("track_pants_joggers")}
          </li>
        </Link>
        <li className="border-b border-gray-200 p-2"></li>

        {/* Innerwear & sleepwear */}
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("innerwear_sleepwear")}
        </li>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("briefs_trunks")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("boxers")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("vests")}</li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sleepwear_loungewear")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("thermals")}
          </li>
        </Link>
      </ul>

      {/* Footwear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("footwear")}
        </li>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("casual_shoes")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sports_shoes")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("formal_shoes")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sneakers")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sandals_floaters")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("flip_flops")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">{lang("socks")}</li>
        </Link>

        <li className="border-b border-gray-200 p-2"></li>
        {/* Indian Festive Wear */}
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("indian_festive_wear")}
        </li>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("kurtas_kurta_sets")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("sherwanis")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("nehru_jackets")}
          </li>
        </Link>
        <Link to="/search" onClick={handleGiftClose}>
          <li className="py-1 px-2 text-xs hover:font-bold">
            {lang("dhotis")}
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default GiftList;
