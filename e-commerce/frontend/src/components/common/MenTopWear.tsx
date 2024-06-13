import { Link } from "react-router-dom";
import lang from "../../language";

interface MenTopWearProps {
  handleClose: () => void;
}

const MenTopWear: React.FC<MenTopWearProps> = ({
  handleClose: handleClose,
}) => {
  return (
    <>
      <Link to="/products/Men/Top Wear/T-Shirt" onClick={handleClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("t_shirt")}
        </li>
      </Link>
      <Link to="/products/Men/Top Wear/Causal-Shirt" onClick={handleClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("casual_shirts")}
        </li>
      </Link>
      <Link to="/products/Men/Top Wear/Formal-Shirt" onClick={handleClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("formal_shirts")}
        </li>
      </Link>
      <Link to="/products/Men/Top Wear/Sweatshirts" onClick={handleClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("sweatshirts")}
        </li>
      </Link>
      <Link to="/products/Men/Top Wear/Sweaters" onClick={handleClose}>
        <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("sweaters")}
        </li>
      </Link>
      <Link to="/products/Men/Top Wear/Jackets" onClick={handleClose}>
        {/* <li className="py-1 px-2 text-xs hover:font-bold list-none">
          {lang("jackets")}
        </li> */}
      </Link>
    </>
  );
};

export default MenTopWear;
