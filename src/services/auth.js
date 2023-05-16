import { axiosAuth } from '../setup/axios.js';

// api detail
const GetUserInfomation = (data) => {
    return axiosAuth.get('/api/user', data);
};

// api update
const UpdateUserInfomation = (data) => {
    return axiosAuth.put('/api/user', data);
};

// api list user
const GetAllUsers = (data) => {
    return axiosAuth.get('/api/users', data);
};

export {};
