/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './ListItem.module.scss';
import { DeleteArticleApi, GetAllArticlesApi } from '../../../../services/auth';
import { Modal } from 'antd';

const cx = classNames.bind(styles);

function ListItem({ data }) {
    const [articles, setArticles] = useState([]);
    const [openDelete, setOpenDelete] = useState(false);

    useEffect(() => {
        GetAllArticlesApi()
            .then((response) => {
                console.log(response.data.articles);
                setArticles(response.data.articles);
            })
            .catch((error) => {
                console.log('error:', error);
            });
    }, []);

    const handleDelete = (item) => {
        console.log('item.slug:', item.slug);
        DeleteArticleApi(item.slug)
            .then((response) => {
                console.log('response-delete-article:', response);
                setOpenDelete(true);
            })
            .catch((error) => {
                console.log('error-delete-article:', error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>All Article List</h1>
            <ul className={cx('list-item')}>
                <Modal
                    title="Please refresh the page to see the last update"
                    open={openDelete}
                    onCancel={() => setOpenDelete(false)}
                    footer={null}
                >
                    <img
                        className={cx('img-warning')}
                        src="https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-29-1.jpg"
                    />
                </Modal>
                {articles.map((item, index) => (
                    <li key={item.id} className={cx('item-article')}>
                        <div className={cx('content')}>
                            <h1 className={cx('title')}>{`Title-${index + 1}:  ${item.title}`}</h1>
                            <h2 className={cx('description')}>{`Description: ${item.description}`}</h2>
                            <h2 className={cx('slug')}>{`Slug: ${item.slug}`}</h2>
                            <>{item.body}</>
                        </div>

                        <div className={cx('author')}>
                            <h3 className={cx('author-description')}>Author</h3>
                            <div className={cx('user-container')}>
                                <img
                                    className={cx('user-image')}
                                    src={
                                        item.author.image
                                            ? item.author.image
                                            : 'https://haycafe.vn/wp-content/uploads/2022/02/Hinh-anh-avatar-facebook-doc-nen-ombre.jpg'
                                    }
                                    alt={'avata'}
                                />
                            </div>
                            <div className={cx('list-user')}>
                                <div className={cx('user-info')}>
                                    id: <span className={cx('info')}>{item.author.id}</span>
                                </div>
                                <div className={cx('user-info')}>
                                    Email: <span className={cx('info')}>{item.author.email}</span>
                                </div>
                                <div className={cx('user-info')}>
                                    Username: <span className={cx('info')}>{item.author.username}</span>
                                </div>
                                <div className={cx('user-info')}>
                                    Bio: <span className={cx('info')}>{item.author.bio}</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('handle')}>
                            <button onClick={() => handleDelete(item)} className={cx('button')}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListItem;
