import React from "react";
import useImageData from "../../customHooks/useBinayImage";

interface OrderItem {
  _id: string;
  color: string;
  quantity: string;
  size: string;
  productId: {
    image: any;
    productName: string;
  };
}

interface OrderCardProps {
  item: OrderItem;
}

const OrderCard: React.FC<OrderCardProps> = ({ item }) => {
  const imageSrc = useImageData(item?.productId?.image[0]);

  return (
    <div className="bg-gray-100 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 rounded-md">
      <div className="sm:col-span-2 lg:col-span-2 flex gap-4">
        <img
          className="w-10 h-10 sm:w-24 sm:h-24 rounded-sm"
          src={imageSrc}
          alt="img"
        />
        <div>
          <p className="text-sm font-normal">Product Name</p>
          <h1 className="font-bold">{item?.productId?.productName}</h1>
        </div>
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <p className="text-sm font-normal">Color</p>
        <h1 className="font-bold">
          {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
        </h1>
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <p className="text-sm font-normal">Quantity</p>
        <h1 className="font-bold">{item.quantity}</h1>
      </div>
      <div className="sm:col-span-1 lg:col-span-1">
        <p className="text-sm font-normal">Size</p>
        <h1 className="font-bold">{item.size.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default OrderCard;
