import axios from "axios";

export const api = axios.create({
    baseURL: "https://food-explorer-matos-api.onrender.com"
});