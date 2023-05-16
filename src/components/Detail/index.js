import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
const cx = classNames.bind(styles);

function Detail() {
    return (
        <div className={cx('container')}>
            <h1>Detail</h1>
        </div>
    );
}

export default Detail;
