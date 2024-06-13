import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SubMenu from "../../components/common/SubMenu";
import { getOrderByIdAPI } from "../../apis";
import toast from "react-hot-toast";
import OrderCard from "./OrderCard";
import Loader from "../../components/common/Loader";
import ScrollToTop from "../../components/common/ScrollToTop";

interface OrderItem {
  _id: string;
  color: string;
  quantity: string;
  size: string;
  totalPrice: number;
  productId: {
    productName: string;
    img: {
      type: string;
      data: Uint8Array;
    };
  };
}

interface Order {
  totalOfferPrice: number;
  totalPrice: number;
  items: OrderItem[];
  address: {
    name: string;
    phone: string;
    address: string;
    town: string;
    city: string;
    pincode: number;
  };
}

const ShowOrder: React.FC = () => {
  const navigate = useNavigate();
  const { uid } = useParams<{ uid: string }>();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleBack = () => {
    navigate("/dashboard/orders");
  };

  const getOrder = async () => {
    if (!uid) return;

    try {
      const response = await getOrderByIdAPI(uid);
      if (response.success) {
        setOrder(response.OrderDetails);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      toast.error(`Error: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (uid) {
      getOrder();
    }
  }, [uid]);

  const capitalizeFirstLetter = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className="relative">
      <ScrollToTop />
      <SubMenu main="Orders" sub="Order" handleBack={handleBack} />
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <Loader />
        </div>
      ) : (
        <div className="w-full p-4 bg-gray-200 mb-16 flex flex-col gap-4">
          <h1 className="text-lg font-bold my-4">Order Details</h1>
          <div className="bg-white rounded-md">
            <div className="w-full p-4 font-semibold flex flex-col gap-4">
              <div className="bg-gray-100 p-4 flex justify-between items-center rounded-md">
                <h1 className="font-bold">All Items</h1>
              </div>
              <div className="w-full">
                {order?.items.map((item: any) => (
                  <OrderCard key={item._id} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-md">
            <div className="px-8 p-4 grid grid-cols-5 gap-4 rounded-md">
              <div className="col-span-3 flex flex-col gap-4">
                <h1 className="font-bold">Totals</h1>
                <h1 className="font-normal">Offer Price</h1>
                <h1 className="font-normal">Price</h1>
                <h1 className="font-bold">Total Price</h1>
              </div>
              <div className="col-span-2 flex flex-col gap-4">
                <h1 className="font-bold">Price</h1>
                <h1 className="font-normal">{order?.totalOfferPrice}</h1>
                <h1 className="font-normal">{order?.totalPrice}</h1>
                <h1 className="font-bold">Total Price</h1>
              </div>
            </div>
          </div>
          <div className="bg-white flex gap-4 rounded-md px-8 py-4">
            <h1 className="font-bold">Name</h1>
            <p>
              {order?.address?.name &&
                capitalizeFirstLetter(order.address.name)}
            </p>
          </div>
          <div className="bg-white flex gap-4 rounded-md px-8 py-4">
            <h1 className="font-bold">Phone</h1>
            <p>{order?.address?.phone}</p>
          </div>
          <div className="bg-white flex gap-4 rounded-md px-8 py-4">
            <h1 className="font-bold">Address</h1>
            <p>{order?.address?.address}, {order?.address?.town},{order?.address?.city},{order?.address?.address}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowOrder;
