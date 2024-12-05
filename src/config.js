import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backrepuestock.vercel.app", // URL del backend
});

export default apiClient;
