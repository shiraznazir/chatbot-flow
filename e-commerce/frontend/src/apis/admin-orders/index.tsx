import ALL_API_CONST from "../constants";
import axios from "axios";

const CONSTANT_API = ALL_API_CONST.admin_orders;

export const getOrdersAPI = () => {
  const promise = axios.get(CONSTANT_API.getOrders, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const getOrderByIdAPI = (order_id: string) => {
  const promise = axios.get(CONSTANT_API.getOrderById + `${order_id}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const updateOrderByStatusAPI = (order_id: string, data: any) => {
  const promise = axios.post(
    CONSTANT_API.updateOrderByStatus + `${order_id}`,
    data,
    {
      withCredentials: true,
    }
  );

  return promise.then((response) => response.data);
};
