import ALL_API_CONST from "../constants";
import axios from "axios";

const CONSTANT_API = ALL_API_CONST.admin_auth;

export const adminLoginAPI = (data: string) => {
  const promise = axios.post(CONSTANT_API.login, data, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};

export const adminLogoutAPI = () => {
  const promise = axios.post(CONSTANT_API.login, {
    withCredentials: true,
  });

  return promise.then((response) => response.data);
};
