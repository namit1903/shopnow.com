import axios from "axios";
// import dotenv from "dotenv";
// const dotenv = require("dotenv");
// dotenv.config();
const backendApi = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`, // Common prefix
  headers: {
    "Content-Type": "application/json",
    // Add other default headers if needed
  },
  // You can set a timeout if you want
  timeout: 10000,
});

// Example: Attach a token automatically
// (Optional—uncomment if you have auth tokens)
/*
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
*/

export default backendApi;