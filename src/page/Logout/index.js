import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Logout.module.scss';
const cx = classNames.bind(styles);

function Logout() {
    return (
        <div className={cx('container')}>
            <h1>Logout</h1>
        </div>
    );
}

export default Logout;
