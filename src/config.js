import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backrepuestock.vercel.app", // Cambia esto por la URL correcta del backend
});

export default apiClient;
