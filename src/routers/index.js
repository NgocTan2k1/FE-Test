import Home from '../page/Home/index.js';
import Login from '../page/Login/index.js';
import Register from '../page/Register/index.js';
import User from '../page/User/index.js';
import Article from '../page/Article/index.js';
import Comment from '../page/Comment/index.js';

// public routers
export const publicRouters = [
    { path: '/', component: Login, restricted: true },
    { path: '/register', component: Register, restricted: true },
];

// private routers
export const privateRouters = [
    { path: '/home', component: Home },
    { path: '/user', component: User },
    { path: '/article', component: Article },
    { path: '/comment', component: Comment },
];

export * from './PrivateRoute.js';
export * from './PublicRoute.js';
