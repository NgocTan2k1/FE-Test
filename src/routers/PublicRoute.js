import { Navigate, Outlet } from 'react-router-dom';
import { isLogin } from '../utils/auth';

const PublicRoute = ({ element: Element, restricted, ...rest }) => {
    const isAuth = isLogin() && restricted;
    return isAuth ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
