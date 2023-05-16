import { axiosAuth } from '../setup/axios.js';

// api detail
const GetUserInfomationApi = () => {
    return axiosAuth.get('/api/user');
};

// api update
const UpdateUserInfomationApi = (data) => {
    return axiosAuth.put('/api/user', data);
};

// api list user
const GetAllUsersApi = () => {
    return axiosAuth.get('/api/users');
};

const DeleteUserApi = (email) => {
    return axiosAuth.delete(`/api/users/${email}`);
};

export { GetAllUsersApi, UpdateUserInfomationApi, GetUserInfomationApi, DeleteUserApi };
