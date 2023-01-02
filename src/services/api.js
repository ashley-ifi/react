import axios from "axios";

const api = axios.create(
    {
        baseURL: 'https://63b28b485e490925c51b3dda.mockapi.io/'
    }
);

export default api;