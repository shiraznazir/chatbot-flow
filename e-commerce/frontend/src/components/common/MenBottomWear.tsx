import { Link } from "react-router-dom";
import lang from "../../language";

interface MenBottomWearProps {
  handleMenClose: any;
}

const MenBottomWear: React.FC<MenBottomWearProps> = ({ handleMenClose }) => {
  return (
    <>
      <Link to="/products/Men/Bottom Wear/Jeans" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("jeans")}
        </li>
      </Link>
      <Link
        to="/products/Men/Bottom Wear/Casual-Trousers"
        onClick={handleMenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("casual_trousers")}
        </li>
      </Link>
      <Link
        to="/products/Men/Bottom Wear/Formal-Trousers"
        onClick={handleMenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("formal_trousers")}
        </li>
      </Link>
      <Link to="/products/Men/Bottom Wear/Shorts" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("shorts")}
        </li>
      </Link>
      <Link
        to="/products/Men/Bottom Wear/Track-Pants & Joggers"
        onClick={handleMenClose}
      >
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("track_pants_joggers")}
        </li>
      </Link>
    </>
  );
};

export default MenBottomWear;
