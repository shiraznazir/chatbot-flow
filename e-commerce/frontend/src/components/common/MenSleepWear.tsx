import React from "react";
import { Link } from "react-router-dom";
import lang from "../../language";

interface MenProps {
  handleMenClose: () => void;
}

const MenSleepWear: React.FC<MenProps> = ({ handleMenClose }) => {
  return (
    <>
      <Link to="/search" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("briefs_trunks")}
        </li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("boxers")}</li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">{lang("vests")}</li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("sleepwear_loungewear")}
        </li>
      </Link>
      <Link to="/search" onClick={handleMenClose}>
        <li className="py-1 px-2 text-xs hover:font-bold">
          {lang("thermals")}
        </li>
      </Link>
    </>
  );
};

export default MenSleepWear;
