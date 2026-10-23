// src/apis/axiosClient.ts
import axios from "axios";
import { API_ROOT } from "./constants";

const axiosClient = axios.create({
  baseURL: API_ROOT,
  timeout: 10000,
  withCredentials: true,
});

axiosClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    if (error.response?.status === 401) {
      window.location.href = "/login";
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
