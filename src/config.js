import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://backrepuestock.vercel.app", // Cambia esto por la URL correcta del backend
});

const config = {
    backendUrl: "https://backrepuestock.vercel.app",
};

export {
    apiClient,
    config,
};