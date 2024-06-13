import ALL_API_CONST from "../constants";
import axios from "axios";

const CONSTANT_API = ALL_API_CONST.cart;

export const getCartData = (userId: string) => {
  const promise = axios.get(CONSTANT_API.getCart + `${userId}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const addToCartAPI = (userId: string, data: any) => {
  const promise = axios.post(CONSTANT_API.addItem + `${userId}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const deleteItemCartAPI = (userId: string, data: any) => {
  const promise = axios.post(CONSTANT_API.deleteItem + `${userId}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const increaseItemCartAPI = (userId: string, data: any) => {
  const promise = axios.post(CONSTANT_API.increaseItem + `${userId}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const decreaseItemCartAPI = (userId: string, data: any) => {
  const promise = axios.post(CONSTANT_API.decreaseItem + `${userId}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};
