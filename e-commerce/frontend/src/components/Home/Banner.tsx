import banImg1 from "../../assets/banner-mobile-1.webp";
import banImg2 from "../../assets/banner-2.webp";
import banImg3 from "../../assets/banner-3.webp";
import banImg4 from "../../assets/banner-4.webp";
import banImg5 from "../../assets/banner-5.webp";
import banImg6 from "../../assets/banner-6.webp";
import Searchbar from "../common/Searchbar";

export function Banner() {
  return (
    <div className="p-2 sm:p-4">
      <Searchbar style="block sm:hidden w-full mt-1 sm:mt-0 mb-4" />
      <div className="grid grid-cols-4 sm:grid-cols-9 gap-1 sm:gap-4">
        <div className="col-span-4 sm:col-span-5 row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg1} alt="ban1" />
        </div>
        <div className="col-span-2 row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg2} alt="ban2" />
        </div>
        <div className="col-span-2 row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg3} alt="ban3" />
        </div>
        <div className="col-span-2 row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg4} alt="ban4" />
        </div>
        <div className="col-span-2 row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg5} alt="ban5" />
        </div>
        <div className="col-span-4 sm:col-span-5  row-span-1">
          <img className="w-full h-[17.6rem]" src={banImg6} alt="ban6" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
