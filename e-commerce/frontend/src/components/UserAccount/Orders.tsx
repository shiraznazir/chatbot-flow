import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OrderPreview from "./OrderPreview";
import { useSelector } from "react-redux";
import { getAllOrderApi } from "../../apis";
import toast from "react-hot-toast";
import OrderCard from "./OrderCard";
import noorderImg from "../../assets/noorder.png";
import { Product, Address } from "../../type";
import Loader from "../common/Loader";

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

const Orders: React.FC = () => {
  const [preview, setPreview] = useState<Order | null>(null);
  const user = useSelector((state: any) => state.user.user.userId);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const getOrdersAPI = () => {
    getAllOrderApi(user)
      .then((response: any) => {
        if (response.success) {
          const orders: Order[] =
            response?.userOrders?.flatMap((element: any) =>
              element.items.map((item: any) => ({
                address: element?.address,
                status: element?.status,
                userId: element?.userId,
                order_id: element?._id,
                ...item,
              }))
            ) ?? [];
          setOrders(orders);
          setLoading(false);
        } else {
          toast.error("Error in getting data from Order list");
        }
      })
      .catch((err: any) => {
        toast.error("Error in getting orders", err);
      });
  };

  useEffect(() => {
    setLoading(true);
    getOrdersAPI();
  }, []);

  return (
    <div className="col-span-12 sm:col-span-8 border border-gray-300 p-4">
      {preview ? (
        <>
          <OrderPreview setPreview={setPreview} order={preview} />
        </>
      ) : (
        <>
          <h3 className="font-semibold mb-4">All Orders</h3>
          {loading ? (
            <>
              <Loader />
            </>
          ) : (
            <>
              {" "}
              <div className="p-4">
                <div className="grid grid-cols-1 gap-4">
                  {orders.map((order: any) => (
                    <OrderCard
                      handlePreview={(val: Order) => setPreview(val)}
                      key={order.productId._id}
                      order={order}
                    />
                  ))}
                </div>
              </div>
            </>
          )}
          {!loading && orders.length === 0 && (
            <div className="p-4 flex flex-col gap-4 justify-center items-center">
              <img className="w-36 h-48" src={noorderImg} alt="noorder" />
              <h1 className="text-lg font-normal">No orders in the list!</h1>
              <h1 className="text-sm">Add items to it now.</h1>
              <Link to="/">
                <button className="w-40 shadow-2xl bg-gray-500 text-white p-2">
                  Shop Now
                </button>
              </Link>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Orders;
