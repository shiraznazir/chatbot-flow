import React, { useMemo } from "react";
import useImageData from "../../customHooks/useBinayImage";
import { Address, Product } from "../../type";
import OrderCancelBtn from "./OrderCancelBtn";

interface Order {
  address: Address;
  productId: Product;
  quantity: number;
  size: string;
  color: string;
  status: string;
  order_id: string;
  userId: {
    _id: string;
  };
}
interface OrderPreviewProps {
  order: Order;
  setPreview: (val: any) => void;
}

const OrderPreview: React.FC<OrderPreviewProps> = ({ order, setPreview }) => {
  const imageSrc = useImageData(order?.productId?.image[0]);

  const totalPrice = useMemo(() => {
    return order?.quantity * order?.productId?.price;
  }, [order]);

  const totalOfferPrice = useMemo(() => {
    return order?.quantity * order?.productId?.offerPrice;
  }, [order]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-200 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="w-full flex justify-end">
        <svg
          onClick={() => setPreview(null)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <img
        className="w-36 h-40 rounded-md"
        src={imageSrc}
        alt={order?.productId?.productName}
      />
      <div className="col-span-8 my-4">
        <h1 className="my-1 text-md font-bold text-center">
          {order?.productId?.productName}
        </h1>
        <p className="my-1 text-sm text-center">
          {order?.productId?.description}
        </p>
        <p className="my-1 text-sm text-center">Size: {order?.size}</p>
        <p className="my-1 text-sm text-center">Color: {order?.color}</p>
      </div>
      <div className="bg-white w-full p-4 rounded-md my-2">
        <h1 className="my-1 text-lg font-bold my-2">Delivery Address</h1>
        <p className="text-sm font-bold">
          {order?.address.name} | {order?.address.phone}
        </p>
        <p className="my-1 text-sm">
          {order?.address.address}, {order?.address.town} ,{" "}
          {order?.address.city} , {order?.address.state} -{" "}
          {order?.address.pincode}
        </p>
      </div>
      <div className="bg-white w-full p-4 rounded-md my-2 flex justify-between">
        <div>
          <h1 className="text-sm font-bold my-2">Total Item Price</h1>
        </div>
        <div>
          <h1 className="text-sm font-bold my-2">₹ {totalPrice}</h1>
        </div>
      </div>
      <div className="bg-white w-full p-4 rounded-md my-2 flex justify-between">
        <div>
          <h1 className="text-sm font-bold my-2">Total Offer Price</h1>
        </div>
        <div>
          <h1 className="text-sm font-bold my-2">₹ {totalOfferPrice}</h1>
        </div>
      </div>
      <div className="w-full my-2">
        <OrderCancelBtn order={order} />
      </div>
    </div>
  );
};

export default OrderPreview;
