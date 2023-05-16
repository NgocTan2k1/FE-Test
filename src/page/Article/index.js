import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Article.module.scss';
const cx = classNames.bind(styles);

function Article() {
    return (
        <div className={cx('container')}>
            <h1>Article</h1>
        </div>
    );
}

export default Article;
