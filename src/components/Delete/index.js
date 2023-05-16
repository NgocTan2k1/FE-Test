import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Delete.module.scss';
const cx = classNames.bind(styles);

function Delete() {
    return (
        <div className={cx('container')}>
            <h1>Delete</h1>
        </div>
    );
}

export default Delete;
