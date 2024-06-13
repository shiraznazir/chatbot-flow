import ALL_API_CONST from "../constants";
import axios from "axios";

const PRODUCTS_API = ALL_API_CONST.home;

export const getAllProducts = (page: number): Promise<any> => {
  const promise: Promise<any> = axios.get(PRODUCTS_API.products + `${page}`);
  return promise.then((response) => response.data);
};

export const getFeaturedProducts = (page: number): Promise<any> => {
  const promise: Promise<any> = axios.get(
    PRODUCTS_API.featured_products + `${page}`
  );
  return promise.then((response) => response.data);
};

export const getNewArrivals = (page: number): Promise<any> => {
  const promise: Promise<any> = axios.get(
    PRODUCTS_API.new_arrivals + `${page}`
  );
  return promise.then((response) => response.data);
};

export const getProductsByCategory = (data: any): Promise<any> => {
  return axios
    .get(`${PRODUCTS_API.productByCategory}${data}`, {
      withCredentials: true,
    })
    .then((response) => response.data);
};

export const getProductsByFilter = (data: any): Promise<any> => {
  return axios
    .post(`${PRODUCTS_API.productByFilter}`, data, {
      withCredentials: true,
    })
    .then((response) => response.data);
};

export const getProductsBySearch = (params: any): Promise<any> => {
  return axios
    .post(`${PRODUCTS_API.search}${params.keyword}`, params?.data, {
      withCredentials: true,
    })
    .then((response) => response.data);
};

export const getSingleProductAPI = (uid: string) => {
  const promise = axios.get(PRODUCTS_API.singleProduct + `${uid}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};
