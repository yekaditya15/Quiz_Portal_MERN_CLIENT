import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://quiz-portal-mern-server.vercel.app",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
