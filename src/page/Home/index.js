import { Tabs } from 'antd';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import User from '../User';
import Article from '../Article';
import Comment from '../Comment';
import Logout from '../Logout';

const cx = classNames.bind(styles);
function Home() {
    const items = [
        {
            key: '1',
            label: `Users`,
            children: <User />,
        },
        {
            key: '2',
            label: `Articles`,
            children: <Article />,
        },
        {
            key: '3',
            label: `Comment`,
            children: <Comment />,
        },

        {
            key: '4',
            label: `Logout`,
            children: <Logout />,
        },
    ];

    return (
        <div className={cx('wrapper')}>
            <Tabs defaultActiveKey="1" items={items} />
        </div>
    );
}

export default Home;
