import React from "react";
import useImageData from "../../customHooks/useBinayImage";
import { Order } from "../../type";
import OrderCancelBtn from "./OrderCancelBtn";
import { Toaster } from "react-hot-toast";

interface OrderCardProps {
  order: Order;
  handlePreview: (order: Order) => void;
}

const OrderCard: React.FC<OrderCardProps> = ({ order, handlePreview }) => {
  const imageSrc = useImageData(order?.productId?.image[0]);

  const formatStatus = (status: string) =>
    status ? `${status.charAt(0).toUpperCase()}${status.slice(1)}` : "";

  return (
    <div className="bg-gray-200 my-2 px-4 py-2 rounded-md w-full">
      <h1 className="text-sm font-bold">{formatStatus(order?.status)}</h1>
      <div className="grid sm:grid-cols-12 gap-4 items-center py-4">
        <div className="w-full sm:col-span-2">
          <img
            className="w-full sm:w-20 sm:h-20 rounded-md"
            src={imageSrc}
            alt={order?.productId?.productName || "Product Image"}
          />
        </div>
        <div className="sm:col-span-8">
          <h1 className="my-1 text-md font-bold">
            {order?.productId?.productName}
          </h1>
          <p className="my-1 text-sm">{order?.productId?.description}</p>
          <p className="my-1 text-sm">Size: {order?.size}</p>
        </div>
        <div className="sm:col-span-2 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
            onClick={() => handlePreview(order)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="w-full my-2">
        <OrderCancelBtn order={order} />
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default OrderCard;
