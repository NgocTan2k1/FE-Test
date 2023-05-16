import classNames from 'classnames/bind';
import styles from './Logout.module.scss';
import { useNavigate } from 'react-router-dom';
const cx = classNames.bind(styles);

function Logout() {
    const navigate = useNavigate();
    const handleClick = () => {
        localStorage.removeItem('User');
        navigate('/');
    };
    return (
        <div className={cx('container')}>
            <h1>Logout</h1>
            <div className={cx('content-item')}>
                <button onClick={handleClick}>Logout</button>
            </div>
        </div>
    );
}

export default Logout;
