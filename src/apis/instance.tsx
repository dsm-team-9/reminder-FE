import axios from "axios";
import type { AxiosInstance } from "axios";

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_USER_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
