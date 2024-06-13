import lang from "../../language";
import WomenIndianWear from "../common/WomenIndianWear";
import WomenWesternWear from "../common/WomenWesternWear";
// import WomenFootWear from "../common/WomenFootWear";

const WomenList = ({
  setWomenToggle,
  handleWomenClose,
}: {
  setWomenToggle: any;
  handleWomenClose: any;
}) => {
  return (
    <div
      onMouseEnter={() => setWomenToggle(true)}
      onMouseLeave={handleWomenClose}
      className="w-7/12 absolute flex top-20 left-[9rem] bg-white px-2"
    >
      {/* Indian & Fusion list */}

      <ul className="w-2/6 p-4">
        <li className="p-2 text-md font-medium text-gray-500">
          {lang("indian_fusion_list")}
        </li>
        <WomenIndianWear handleWomenClose={handleWomenClose} />
      </ul>

      {/* Western wear list */}
      <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-gray-500">
          {lang("western_wear")}
        </li>
        <WomenWesternWear handleWomenClose={handleWomenClose} />
      </ul>

      {/* Footwear list */}
      {/* <ul className="w-2/6 p-4">
        <li className="py-2 px-2 text-md font-medium text-purple-500">
          {lang("footwear")}
        </li>
       <WomenFootWear handleWomenClose={handleWomenClose} />
      </ul> */}
    </div>
  );
};

export default WomenList;
