import { axiosAuth } from '../setup/axios.js';

// api detail
const GetUserInfomationApi = (data) => {
    return axiosAuth.get('/api/user', data);
};

// api update
const UpdateUserInfomationApi = (data) => {
    return axiosAuth.put('/api/user', data);
};

// api list user
const GetAllUsersApi = (data) => {
    return axiosAuth.get('/api/users', data);
};

export { GetAllUsersApi, UpdateUserInfomationApi, GetUserInfomationApi };
