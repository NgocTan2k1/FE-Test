import { axiosClient } from '../setup/axios.js';

// api login
const LoginApi = (data) => {
    return axiosClient.post('/api/login', data);
};

// api register
const RegisterApi = (data) => {
    return axiosClient.post('/api/users', data);
};

export { LoginApi, RegisterApi };
