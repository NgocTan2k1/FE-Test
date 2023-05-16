import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
const cx = classNames.bind(styles);

function Login() {
    return (
        <div className={cx('container')}>
            <h1>Login</h1>
        </div>
    );
}

export default Login;
