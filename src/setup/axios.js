import axios from 'axios';

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

const axiosAuth = axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: false,
});

axiosAuth.interceptors.request.use(
    (config) => {
        if (!config.headers['Authorization']) {
            const token = JSON.parse(localStorage.getItem('User')).token;
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error),
);

export { axiosClient, axiosAuth };
