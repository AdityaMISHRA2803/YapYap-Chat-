// axios.js
import axios from "axios";

const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001/api"
    : "https://yapyap-chat-3wz6.onrender.com/api"; // ✅ Correct backend

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});
