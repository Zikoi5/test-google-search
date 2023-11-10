import axios from "axios";

const axiosIns = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_API
});

export default axiosIns;
