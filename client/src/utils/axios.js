const axios = require("axios");

const api = axios.create({
  baseURL: "http://localhost:5000/api", // Common prefix
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

export default api;