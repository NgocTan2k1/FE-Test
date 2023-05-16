import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './User.module.scss';
const cx = classNames.bind(styles);

function User() {
    return (
        <div className={cx('container')}>
            <h1>User</h1>
        </div>
    );
}

export default User;
