import axios from "axios";
import {message} from "antd";

const api = axios.create({
    baseURL: "https://68c7ac955d8d9f5147328890.mockapi.io/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10_000,
})

api.interceptors.response.use(
    (response) =>
    {
        return response;
    },
    (error) =>
    {
        const { status, data } = error.response;
        if (status === 400 || status === 404 || status === 500) {
            message.error(data.message || "An error occurred. Please try again.");
        }
        return Promise.reject(error);
    }
);

export { api };