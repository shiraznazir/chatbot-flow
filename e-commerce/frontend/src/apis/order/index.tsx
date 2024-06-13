import ALL_API_CONST from "../constants";
import axios from "axios";

const ORDER_API = ALL_API_CONST.order;

export const createOrderApi = (data: any): Promise<any> => {
  const promise: Promise<any> = axios.post(ORDER_API.createOrder, data, {
    withCredentials: true,
  });
  return promise.then((response) => response.data);
};

export const getAllOrderApi = (userId: any): Promise<any> => {
  const promise: Promise<any> = axios.get(ORDER_API.getAllOrder + `${userId}`, {
    withCredentials: true,
  });
  return promise.then((response) => response.data);
};

export const cancelOrderApi = (orderId: any): Promise<any> => {
  const promise: Promise<any> = axios.get(
    ORDER_API.cancelOrder + `${orderId}`,
    {
      withCredentials: true,
    }
  );
  return promise.then((response) => response.data);
};

export const getAPIKey = () => {
  const promise: Promise<any> = axios.get(ORDER_API.getKey, {
    withCredentials: true,
  });
  return promise.then((response) => response.data);
};

export const paymentCheckoutAPI = (data: any) => {
  const promise: Promise<any> = axios.post(ORDER_API.paymentCheckout, data, {
    withCredentials: true,
  });
  return promise.then((response) => response.data);
};

export const paymentVerificationAPI = (data: any) => {
  const promise: Promise<any> = axios.post(
    ORDER_API.paymentVerification,
    data,
    {
      withCredentials: true,
    }
  );
  return promise.then((response) => response.data);
};
