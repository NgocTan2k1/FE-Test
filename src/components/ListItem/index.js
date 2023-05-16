import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ListItem.module.scss';
const cx = classNames.bind(styles);

function ListItem({ data }) {
    console.log('dataUsers:', data);
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>All User List</h1>
            <ul className={cx('list-item')}>
                {data.map((item) => {
                    <li key={item.id} className={cx('item-user')}>
                        <div className={cx('user-container')}>
                            <image
                                src={
                                    item.image
                                        ? item.image
                                        : 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-facebook-doc-nen-ombre.jpg'
                                }
                                alt={'avata'}
                            />
                        </div>
                    </li>;
                })}
            </ul>
        </div>
    );
}

export default ListItem;
