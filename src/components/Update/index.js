import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Update.module.scss';
const cx = classNames.bind(styles);

function Update() {
    return (
        <div className={cx('container')}>
            <h1>Update</h1>
        </div>
    );
}

export default Update;
