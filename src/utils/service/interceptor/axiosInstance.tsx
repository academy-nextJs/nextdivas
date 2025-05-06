// src/utils/service/axiosInstance.ts

import { API_BASE_URL } from "@/utils/config/env";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // اگه نیاز به ارسال کوکی یا session داری
});

// Request Interceptor
// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// Response Interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // هندل ارورها به صورت مرکزی
    if (error.response?.status === 401) {
      // مثلاً هدایت به صفحه لاگین
      console.warn("Unauthorized - redirect to login.");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
