import { useState } from "react";
// import { CiCircleMinus } from "react-icons/ci";
// import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import useImageData from "../../customHooks/useBinayImage";
import { useDispatch, useSelector } from "react-redux";
import {
  increaseQty,
  decreaseQty,
  deleteProductFromCart,
  fetchCartData,
} from "../../redux/reducers/cartSlice";
import DeletePopup from "../common/DeletePopup";
import toast from "react-hot-toast";
import {
  decreaseItemCartAPI,
  deleteItemCartAPI,
  increaseItemCartAPI,
} from "../../apis";

interface Product {
  _id: string;
  productId: {
    _id: string;
    productName: string;
    offerPrice: number;
    price: number;
    category?: string;
    subCategory?: string;
    type?: string;
    size?: string[];
    color?: string[];
    discount: number;
    image: { img: { data: Uint8Array } }[];
    details: string;
    description: string;
  };
  quantity: number;
  color: string;
  size: string;
}

interface ProductCardProps {
  item: Product;
}

// const iconStyle = { fontSize: "30px", color: "gray", cursor: "pointer" };

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const dispatch = useDispatch();
  const image = useImageData(item?.productId?.image[0]);
  const user: any =
    useSelector((state: any) => state?.user?.user?.userId) || null;
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState<boolean>(false);

  const handleIncrease = async () => {
    if (item?.quantity >= 6) {
      toast.error("Maximum limit");
      return;
    }
    await dispatch(increaseQty(item?._id));
    if (user) {
      increaseItemCartAPI(item?._id, { userId: user })
        .then((response: any) => {
          if (response.success) {
            dispatch(fetchCartData(user));
          } else {
            dispatch(increaseQty(item?._id));
          }
        })
        .catch((err: any) => {
          dispatch(increaseQty(item?._id));
          console.log("Error ", err);
        });
    }
  };

  const handleDecrease = async () => {
    if (item?.quantity <= 1) {
      handleDelete();
      return;
    }
    await dispatch(decreaseQty(item?._id));
    if (user) {
      decreaseItemCartAPI(item?._id, { userId: user })
        .then((response: any) => {
          if (response.success) {
            dispatch(fetchCartData(user));
          }
        })
        .catch((err: any) => {
          console.log("Error ", err);
        });
    }
  };

  const handleDelete = async () => {
    await dispatch(deleteProductFromCart(item?._id));
    if (user) {
      deleteItemCartAPI(item?._id, { userId: user })
        .then((response: any) => {
          if (response.success) {
            dispatch(fetchCartData(user));
            toast.success("Order Deleted");
            setIsDeletePopupOpen(false);
          } else {
            toast.error("Order is not Deleted");
          }
        })
        .catch((err: any) => {
          toast.error("Error ", err);
        });
    } else {
      toast.success("Order Deleted");
      setIsDeletePopupOpen(false);
    }
  };

  return (
    <>
      {item && (
        <div
          key={item?.productId?._id}
          className="px-4 py-2 bg-white grid grid-cols-6 gap-2"
        >
          <div className="col-span-2 sm:col-span-1">
            <img className="w-full" src={image} alt="image" />
            <div className="flex items-center justify-between gap-2 mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={handleDecrease}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>

              <input
                className="w-12 outline-none border-2 border-gray-500 px-3"
                type="number"
                value={item?.quantity}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 cursor-pointer"
                onClick={handleIncrease}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <div className="col-span-3">
            <h1 className="text-lg">{item?.productId?.productName}</h1>
            <h1 className="my-2 text-md opacity-70">Size: {item?.size}</h1>
            <div className="flex gap-2 my-2">
              <h1 className="text-md opacity-70 line-through">
                ₹{item?.productId?.price}
              </h1>
              <h1>₹{item?.productId?.offerPrice}</h1>
              <h1 className="text-green-600">{item?.productId?.discount}%</h1>
            </div>
            <button
              type="button"
              className="text-gray-500 flex gap-2 hover:text-gray-800"
              onClick={() => setIsDeletePopupOpen(true)}
            >
              REMOVE
              <MdDelete style={{ marginTop: "2px", fontSize: "20px" }} />
            </button>
          </div>
          <div className="col-span-2">
            {/* <h1 className="mt-2 text-sm">Delivery by {item.deliveryDate}</h1> */}
          </div>
          <DeletePopup
            isOpen={Boolean(isDeletePopupOpen)}
            onClose={() => setIsDeletePopupOpen(false)}
            onConfirm={handleDelete}
          />
        </div>
      )}
    </>
  );
};

export default ProductCard;
