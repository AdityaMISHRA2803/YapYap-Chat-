// axios.js

import axios from "axios";

// ✅ Ensure correct baseURL depending on environment
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://yapyap-chat-wjuo.onrender.com/api";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // ✅ For sending cookies
});
