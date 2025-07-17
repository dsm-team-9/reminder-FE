import axios from "axios";
import type { AxiosInstance } from "axios";

const accessToken = localStorage.getItem("accessToken");
const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_USER_BASE_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
    "Content-Type": "application/json",
  },
});

export default instance;
