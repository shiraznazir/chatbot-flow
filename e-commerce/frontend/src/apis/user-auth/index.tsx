import ALL_API_CONST from "../constants";
import axios from "axios";

const AUTH_API = ALL_API_CONST.user_auth;

export const generateOTPByMob = (data: any) => {
  const promise = axios.post(AUTH_API.generateOTP, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const verifyOTP = (data: any) => {
  const promise = axios.post(AUTH_API.verifyOTP, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const logoutUser = () => {
  const data = {};
  const promise = axios.post(AUTH_API.logout, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const checkPincode = (data: any) => {
  const promise = axios.post(AUTH_API.checkPincode, data);

  return promise.then((response) => response.data);
};

export const createUserAddress = (data: any) => {
  const promise = axios.post(AUTH_API.createAddress, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const getUserAddresses = (id: string) => {
  const promise = axios.get(AUTH_API.getUserAddress + `${id}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const updateUserAddress = (id: string, data: any) => {
  const promise = axios.patch(AUTH_API.editAddress + `${id}`, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const deleteUserAddress = (id: string) => {
  const promise = axios.delete(AUTH_API.deleteAddress + `${id}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const getUserAPI = (id: string) => {
  const promise = axios.get(AUTH_API.getUser + `${id}`, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const updateUserAPI = (id: string, data: any) => {
  const promise = axios.post(AUTH_API.updateUser + `${id}`, data, {
    withCredentials: true,
  });
  return promise.then((response) => response.data);
};
