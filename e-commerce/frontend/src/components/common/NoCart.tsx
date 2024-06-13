import { Link } from "react-router-dom";
import nocart from "../../assets/nocart.jpg";

const NoCart = () => {
  return (
    <div className="py-8 flex justify-center items-center">
      <div className="w-10/12 bg-white flex flex-col justify-center items-center gap-4 py-4">
        <img className="w-48 h-48" src={nocart} alt="nocart" />
        <h1 className="text-lg font-normal">Your cart is empty!</h1>
        <h1 className="text-sm">Add items to it now.</h1>
        <Link to="/">
          <button className="w-40 shadow-2xl bg-gray-500 text-white p-2">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoCart;
