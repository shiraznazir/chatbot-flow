import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { MdOutlineLocalOffer, MdOutlineDescription } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import CheckPincode from "./CheckPincode";
import { addToCartAPI, getSingleProductAPI } from "../../apis";
import toast from "react-hot-toast";
import { checkPincode } from "../../apis/user-auth";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  fetchCartData,
} from "../../redux/reducers/cartSlice";
import { v4 as uuidv4 } from "uuid";
import Loader from "./Loader";
import ScrollToTop from "./ScrollToTop";
import ShowImages from "./ShowImages";

interface ProductDetails {
  _id: string;
  productName: string;
  offerPrice: number;
  price: number;
  category: string;
  subCategory: string;
  type: string;
  size: string[];
  discount: number;
  color: string[];
  image: { img: { data: Uint8Array } }[];
  details: string;
  description: string;
}

const ShowProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state?.user?.user?.userId);
  const params: { uid?: string } = useParams();
  const [productsDetails, setProductsDetails] = useState<ProductDetails | null>(
    null
  );
  const [pincode, setPincode] = useState<string>("");
  const [sizeVal, setSizeVal] = useState<string>("");
  const [colorVal, setColorVal] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getProductByIdApi = async () => {
    try {
      if (params?.uid) {
        const response = await getSingleProductAPI(params.uid);
        if (response.success) {
          setProductsDetails(response.product);
          setLoading(false);
        } else {
          toast.error(response.message);
        }
      }
    } catch (error) {
      console.error("Error getting product:", error);
      toast.error(`An error occurred while getting the product.`);
    }
  };

  useEffect(() => {
    if (params?.uid) {
      getProductByIdApi();
    }
  }, [params.uid]);

  const handleCheckPincode = () => {
    if (pincode.trim() !== "") {
      checkPincode({ pincode }).then((response: any) => {
        if (response.success) {
          setIsAvailable(response.available);
        }
      });
    }
  };

  const validate = () => {
    if (!sizeVal) {
      toast.error("Please select size of the product");
    } else if (!colorVal) {
      toast.error("Please select color of the product");
    } else {
      return true;
    }
  };

  const handleCart = async () => {
    if (productsDetails && validate()) {
      const qty: number = 1;
      const uuid = uuidv4();
      dispatch(
        addProductToCart({
          _id: uuid,
          productId: productsDetails,
          quantity: qty,
          size: sizeVal,
          color: colorVal,
        })
      );
      if (user) {
        addToCartAPI(user, {
          productId: productsDetails._id,
          quantity: qty,
          size: sizeVal,
          color: colorVal,
        }).then((response: any) => {
          if (response.success) {
            dispatch(fetchCartData(user));
            toast.success("Added to cart");
            setTimeout(() => {
              navigate("/checkout/cart");
            }, 1000);
          } else {
            toast.error("Error in adding product");
          }
        });
      } else {
        toast.success("Added to cart");
        setTimeout(() => {
          navigate("/checkout/cart");
        }, 1000);
      }
    }
  };

  const handleSize = (val: string) => {
    toast.success("Size selected");
    setSizeVal(val);
  };

  const handleColor = (val: string) => {
    toast.success("Color selected");
    setColorVal(val);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="pt-20">
          <ScrollToTop />
          <div className="px-4 lg:px-10">
            <div className="my-6 flex">
              <Link to="/">
                <h1 className="text-sm font-normal">Home /</h1>
              </Link>
              {productsDetails && (
                <>
                  <Link to={`/products/style/${productsDetails?.category}`}>
                    <h1 className="text-sm font-normal">
                      &nbsp; {productsDetails.category} /
                    </h1>
                  </Link>
                  <Link
                    to={`/products/style/${productsDetails.category}/${productsDetails.subCategory}`}
                  >
                    <h1 className="text-sm font-normal">
                      &nbsp; {productsDetails.subCategory} /
                    </h1>
                  </Link>
                  <Link
                    to={`/products/style/${productsDetails.category}/${productsDetails.subCategory}/${productsDetails.type}`}
                  >
                    <h1 className="text-sm font-bold">
                      &nbsp; {productsDetails.type}
                    </h1>
                  </Link>
                </>
              )}
            </div>
            <div className="md:grid grid-cols-12 gap-8">
              <div className="col-span-2 md:col-span-5 gap-4 grid grid-cols-2">
                <ShowImages images={productsDetails?.image} />
              </div>
              <div className="col-span-10 md:col-span-7 pb-10">
                {productsDetails && (
                  <>
                    <h1 className="text-xl font-bold">
                      {productsDetails.productName}
                    </h1>
                    <h2 className="text-md">{productsDetails.description}</h2>
                    <div className="border-t border-gray-400 my-4"></div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-xl font-bold">
                        ₹ {productsDetails.offerPrice}
                      </h1>
                      <h1 className="text-md">
                        MRP
                        <span className="line-through">
                          ₹ {productsDetails.price}
                        </span>
                      </h1>
                      <h1 className="text-md text-yellow-500">
                        {(
                          (productsDetails.offerPrice / productsDetails.price) *
                          100
                        ).toFixed(0)}
                        %
                      </h1>
                    </div>
                    <h1 className="text-green-500 mb-4">
                      inclusive of all taxes
                    </h1>
                    <h1 className="mt-2 text-black">SELECT SIZE</h1>
                    <div className="flex gap-2">
                      {productsDetails.size?.map(
                        (productSize: string, index: number) => (
                          <div
                            key={index}
                            className="my-4 w-12 h-12 flex items-center justify-center text-sm font-bold border border-gray-300 hover:border-gray-500 rounded-full cursor-pointer"
                            onClick={() => handleSize(productSize)}
                          >
                            {productSize.toUpperCase()}
                          </div>
                        )
                      )}
                    </div>
                    <h1 className="mt-2 text-black">SELECT COLOR</h1>
                    <div className="flex gap-2">
                      {productsDetails.color?.map(
                        (productColor: string, index: number) => (
                          <div
                            key={index}
                            style={{ backgroundColor: `${productColor}` }}
                            className="my-4 w-12 h-12 flex items-center justify-center text-sm font-bold border border-gray-300 hover:border-gray-500 rounded-full cursor-pointer"
                            onClick={() => handleColor(productColor)}
                          ></div>
                        )
                      )}
                    </div>
                    <button
                      type="button"
                      className="my-4 p-2 px-4 rounded cursor-pointer bg-gray-500 hover:bg-gray-600 text-white flex items-center gap-2"
                      onClick={handleCart}
                    >
                      <MdOutlineLocalOffer
                        style={{ fontSize: "20px", marginTop: "5px" }}
                      />
                      ADD TO CART
                    </button>
                    <div className="border-t border-gray-400 my-4"></div>
                    <h1 className="mt-4 text-sm font-bold">DELIVERY OPTIONS</h1>
                    <CheckPincode
                      isAvailable={isAvailable}
                      value={pincode}
                      setValue={setPincode}
                      handleChange={handleCheckPincode}
                    />
                    <span className="text-xs">
                      Please enter PIN code to check delivery time & Pay on
                      Delivery Availability
                    </span>
                    <h1 className="mt-4 my-1 text-sm">
                      100% Original Products
                    </h1>
                    <h1 className="my-1 text-sm">
                      Pay on delivery might be available
                    </h1>
                    <h1 className="mb-4 my-1 text-sm">
                      Easy 14 days returns and exchanges
                    </h1>
                    <h1 className="text-md font-bold flex gap-4">
                      BEST OFFERS
                      <MdOutlineLocalOffer
                        style={{ fontSize: "20px", marginTop: "5px" }}
                      />
                    </h1>
                    <h1 className="my-2 text-sm font-bold">
                      Best Price:{" "}
                      <span className="text-yellow-500">Rs. 486</span>
                    </h1>
                    <div className="border-t border-gray-400 my-4"></div>
                    <h1 className="my-2 text-md font-bold flex gap-4">
                      PRODUCT DETAILS{" "}
                      <CgDetailsMore style={{ fontSize: "20px" }} />
                    </h1>
                    <p className="text-sm">{productsDetails.details}</p>
                    {/* <p className="text-sm">Solid</p>
                    <p className="text-sm">Regular Length</p>
                    <p className="text-sm">Short sleeves</p>
                    <p className="text-sm">Polo collar</p>
                    <p className="text-sm">Slim fit</p>
                    <p className="text-sm">Knitted cotton</p>
                    <p className="text-sm">Front button placket</p>
                    <p className="text-sm">PUMA Cat logo at chest</p> */}
                    <h1 className="my-2 text-md font-bold flex gap-4">
                      PRODUCT DESCRIPTION
                      <MdOutlineDescription style={{ fontSize: "20px" }} />
                    </h1>
                    <p className="text-sm">{productsDetails.description}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ShowProduct;
