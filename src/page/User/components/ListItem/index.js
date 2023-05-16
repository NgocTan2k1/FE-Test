import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ListItem.module.scss';
import { GetAllUsersApi } from '../../../../services/auth';

const cx = classNames.bind(styles);

function ListItem({ data }) {
    const [userDatas, setUserDatas] = useState([]);

    useEffect(() => {
        GetAllUsersApi()
            .then((response) => {
                setUserDatas(response.data);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>All User List</h1>
            <ul className={cx('list-item')}>
                {userDatas.map((item) => (
                    <li key={item.id} className={cx('item-user')}>
                        <div className={cx('user-container')}>
                            <img
                                className={cx('user-image')}
                                src={
                                    item.image
                                        ? item.image
                                        : 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-facebook-doc-nen-ombre.jpg'
                                }
                                alt={'avata'}
                            />
                        </div>
                        <div className={cx('list-user')}>
                            <div className={cx('user-info')}>
                                id: <span className={cx('info')}>{item.id}</span>
                            </div>
                            <div className={cx('user-info')}>
                                Email: <span className={cx('info')}>{item.email}</span>
                            </div>
                            <div className={cx('user-info')}>
                                Username: <span className={cx('info')}>{item.username}</span>
                            </div>
                            <div className={cx('user-info')}>
                                Bio: <span className={cx('info')}>{item.bio}</span>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListItem;
