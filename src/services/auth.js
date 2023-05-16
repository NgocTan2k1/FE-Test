import { axiosAuth } from '../setup/axios.js';

// user
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

// api delete user
const DeleteUserApi = (email) => {
    return axiosAuth.delete(`/api/users/${email}`);
};

// article
// api get all articles
const GetAllArticlesApi = () => {
    return axiosAuth.get('/api/articles');
};

// api get all articles
const CreateAnArticlesApi = (data) => {
    return axiosAuth.post('/api/articles', data);
};

// api update article
const UpdateArticleApi = (slug, data) => {
    return axiosAuth.put(`/api/articles/${slug}`, data);
};

// api delete article
const DeleteArticleApi = (slug) => {
    return axiosAuth.delete(`/api/articles/${slug}`);
};

export {
    GetAllUsersApi,
    UpdateUserInfomationApi,
    GetUserInfomationApi,
    DeleteUserApi,
    GetAllArticlesApi,
    CreateAnArticlesApi,
    UpdateArticleApi,
    DeleteArticleApi,
};
