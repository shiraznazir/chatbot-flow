import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import {
  deleteSingleProduct,
  getOrdersAPI,
  updateOrderByStatusAPI,
} from "../../apis";
import toast, { Toaster } from "react-hot-toast";
import DeletePopup from "../../components/common/DeletePopup";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/common/Loader";
import ChangeStatus from "../../components/common/ChangeStatus";

interface Order {
  _id: string;
  address: {
    name: string;
    phone: string;
  };
  status: string;
  totalOfferPrice: number;
  items: { quantity: number }[];
}

const OrdersTable: React.FC = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState<string>("");
  const [isStatusPopupOpen, setStatusPopupOpen] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const getAllOrdersApi = async () => {
    try {
      const response = await getOrdersAPI();
      if (response.success) {
        setOrders(response?.Orders);
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("An error occurred while getting the orders.");
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = (uid: string) => {
    navigate(`/dashboard/orders/order/${uid}`);
  };

  const handleDelete = async (orderId: string) => {
    try {
      const response = await deleteSingleProduct(orderId);
      if (response.success) {
        toast.success(response.message);
        getAllOrdersApi();
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      console.error("Error ", error);
      toast.error("An error occurred while deleting the order.");
    } finally {
      setDeletePopupOpen("");
    }
  };

  const totalQuantity = (items: { quantity: number }[]): number => {
    return items.reduce(
      (accu: number, item: { quantity: number }) => accu + item.quantity,
      0
    );
  };

  const onSelect = (status: string) => {
    updateOrderByStatusAPI(isStatusPopupOpen, { status: status })
      .then((response: any) => {
        if (response.success) {
          toast.success(response.message);
          setStatusPopupOpen("");
          getAllOrdersApi();
        } else {
          toast.error(response.message);
        }
      })
      .catch((err: any) => {
        toast.error("Error ", err);
      });
  };

  useEffect(() => {
    getAllOrdersApi();
  }, []);

  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="min-w-full divide-y divide-gray-200 overflow-x-scroll">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer Name
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Total Price
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Quantity
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {loading ? (
            <tr>
              <td colSpan={6} className="px-4 sm:px-6 py-4">
                <Loader />
              </td>
            </tr>
          ) : (
            orders.map((order: Order) => (
              <tr key={order._id}>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {order?.address?.name}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {order?.address?.phone}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {order?.totalOfferPrice}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {totalQuantity(order?.items)}
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                  {order?.status}
                </td>
                <td className="flex gap-2 px-4 sm:px-6 py-4 whitespace-nowrap">
                  <div
                    className="cursor-pointer"
                    onClick={() => handlePreview(order._id)}
                  >
                    <FaRegEye size={25} color="gray" />
                  </div>
                  <div
                    className="cursor-pointer"
                    onClick={() => setStatusPopupOpen(order._id)}
                  >
                    <MdEdit size={25} color="gray" />
                  </div>
                  {/* <div
                    className="cursor-pointer"
                    onClick={() => setDeletePopupOpen(order._id)}
                  >
                    <MdDelete size={25} color="red" />
                  </div> */}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <DeletePopup
        isOpen={Boolean(isDeletePopupOpen)}
        onClose={() => setDeletePopupOpen("")}
        onConfirm={() => handleDelete(isDeletePopupOpen)}
      />
      <ChangeStatus
        isOpen={Boolean(isStatusPopupOpen)}
        onClose={() => setStatusPopupOpen("")}
        onSelect={onSelect}
      />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default OrdersTable;
