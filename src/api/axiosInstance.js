import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", // update if different
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosInstance;
