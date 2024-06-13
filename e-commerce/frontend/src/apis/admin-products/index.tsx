import ALL_API_CONST from "../constants";
import axios from "axios";

const CONSTANT_API = ALL_API_CONST.admin_products;

interface ProductData {
  [key: string]: any;
}

export const addProduct = (data: any) => {
  const promise = axios.post(CONSTANT_API.addProduct, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const getAllProduct = () => {
  const promise = axios.get(CONSTANT_API.getProduct, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const getSingleProduct = (uid: string) => {
  const promise = axios.get(CONSTANT_API.singleProduct + `${uid}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const updateProduct = (uid: string, data: ProductData) => {
  const promise = axios.patch(`${CONSTANT_API.updateProduct}${uid}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const deleteSingleProduct = (uid: string) => {
  const promise = axios.delete(CONSTANT_API.deleteProduct + `${uid}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};
