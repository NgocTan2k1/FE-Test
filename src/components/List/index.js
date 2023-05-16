import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './List.module.scss';
const cx = classNames.bind(styles);

function List() {
    return (
        <div className={cx('container')}>
            <h1>List</h1>
        </div>
    );
}

export default List;
