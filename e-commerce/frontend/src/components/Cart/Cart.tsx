import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CheckPincode from "../common/CheckPincode";
import { checkPincode } from "../../apis/user-auth";
import PriceDetails from "../common/PriceDetails";
import ProductCard from "./ProductCard";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import usePriceDetails from "../../customHooks/usePriceDetails";
import ScrollToTop from "../common/ScrollToTop";
import Loader from "../common/Loader";
import NoCart from "../common/NoCart";

interface Product {
  _id: string;
  productId: {
    _id: string;
    productName: string;
    offerPrice: number;
    price: number;
    discount: number;
    category?: string;
    subCategory?: string;
    type?: string;
    size?: string[];
    color?: string[];
    image: { img: { data: Uint8Array } }[];
    details: string;
    description: string;
  };
  quantity: number;
  color: string;
  size: string;
}

const Cart: React.FC = () => {
  const cartData: Product[] = useSelector((state: any) => state.cart.products);
  const priceDetails = usePriceDetails();
  const [loading, setLoading] = useState<boolean>(true);

  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [pincode, setPincode] = useState<string>("");

  const handleCheckPincode = () => {
    if (pincode.trim() !== "") {
      checkPincode({ pincode })
        .then((response: any) => {
          if (response.success) {
            setIsAvailable(response.available);
          }
        })
        .catch((error) => {
          console.error("Error in checking pincode:", error);
          toast.error("Error in checking pincode");
        });
    }
  };

  useEffect(() => {
    if (cartData.length > 0) {
      setLoading(false);
    } else {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  }, [cartData]);

  return (
    <div className="pt-20 bg-gray-200">
      <ScrollToTop />
      {loading ? (
        <Loader />
      ) : cartData?.length === 0 ? (
        <NoCart />
      ) : (
        <>
          <div className="p-4 lg:p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <div className="mb-4 px-4 py-2 bg-white flex flex-col md:flex-row justify-center md:justify-between shadow-md">
                <h1 className="text-md mt-4">From Saved Addresses</h1>
                <CheckPincode
                  isAvailable={isAvailable}
                  value={pincode}
                  setValue={setPincode}
                  handleChange={handleCheckPincode}
                />
              </div>
              {cartData &&
                cartData.map((item: Product, index: number) => (
                  <ProductCard key={item?._id || `index${index}`} item={item} />
                ))}
              <div className="my-4 px-4 py-2 bg-white flex justify-between shadow-md">
                <Link to={"/checkout/cart/address"}>
                  <button
                    type="button"
                    className="px-8 py-2 text-lg bg-orange-500 text-white"
                  >
                    PLACE ORDER
                  </button>
                </Link>
              </div>
            </div>
            <div className="px-4">
              <PriceDetails priceDetails={priceDetails} />
              <Toaster position="top-right" reverseOrder={false} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
