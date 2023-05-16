import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';
import { GetUserInfomationApi } from '../../../../services/auth';
const cx = classNames.bind(styles);

function Detail() {
    const [userInfo, setUserInfo] = useState([]);

    useEffect(() => {
        GetUserInfomationApi()
            .then((response) => {
                setUserInfo(response.data.user);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <h1>Detail User Infomation</h1>
            <div className={cx('user-container')}>
                <div className={cx('container-user-image')}>
                    <img
                        className={cx('user-image')}
                        src={
                            userInfo.image
                                ? userInfo.image
                                : 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-facebook-doc-nen-ombre.jpg'
                        }
                        alt={'avata'}
                    />
                </div>
                <div className={cx('list-user')}>
                    <div className={cx('user-info')}>
                        id: <span className={cx('info')}>{userInfo.id}</span>
                    </div>
                    <div className={cx('user-info')}>
                        Email: <span className={cx('info')}>{userInfo.email}</span>
                    </div>
                    <div className={cx('user-info')}>
                        Username: <span className={cx('info')}>{userInfo.username}</span>
                    </div>
                    <div className={cx('user-info')}>
                        Bio: <span className={cx('info')}>{userInfo.bio}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
