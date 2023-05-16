import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Register.module.scss';
const cx = classNames.bind(styles);

function Register() {
    return (
        <div className={cx('container')}>
            <h1>Register</h1>
        </div>
    );
}

export default Register;
