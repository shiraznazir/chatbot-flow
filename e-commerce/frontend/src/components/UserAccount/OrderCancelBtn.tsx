import toast from "react-hot-toast";
import { cancelOrderApi } from "../../apis";
import { Address, Product } from "../../type";
import { useDispatch } from "react-redux";
import { fetchOrderData } from "../../redux/reducers/orderSlice";

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

interface OrderCardProps {
  order: Order;
}

const OrderCancelBtn: React.FC<OrderCardProps> = ({ order }) => {
  const dispatch = useDispatch();
  const handleCancel = () => {
    cancelOrderApi(order?.order_id)
      .then((response) => {
        if (response.success) {
          toast.success(response.message);
          dispatch(fetchOrderData(order?.userId?._id));
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error("Error ", err);
      });
  };
  return (
    <button
      type="button"
      className="w-full py-2 rounded-md font-bold bg-red-500 text-white"
      onClick={handleCancel}
    >
      Cancel
    </button>
  );
};

export default OrderCancelBtn;
