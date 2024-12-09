// src/axiosInstance.ts
import axios, { InternalAxiosRequestConfig } from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Use environment variables for the base URL
  timeout: 10000, // Set a timeout for requests
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // Add authorization token or other headers if needed
    const token = localStorage.getItem("authToken") ?? "opensesame";
    if (token) {
      config.headers.set({
        Authorization: `Bearer ${token}`,
      });
    }
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  },
);

export default axiosInstance;
