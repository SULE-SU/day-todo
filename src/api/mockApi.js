import axios from "axios";

export const api = axios.create({
    baseURL: "https://68c7ac955d8d9f5147328890.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10_000,
});