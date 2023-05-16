import { Tabs } from 'antd';
import classNames from 'classnames/bind';

import styles from './User.module.scss';
import ListItem from './components/ListItem/index.js';
import Detail from './components/Detail/index.js';
import Update from './components/Update/index.js';
import Delete from './components/Delete/index.js';

const cx = classNames.bind(styles);

function User() {
    const items = [
        {
            label: `List Users`,
            key: 1,
            children: <ListItem />,
        },
        {
            label: `Detail User`,
            key: 2,
            children: <Detail />,
        },
        {
            label: `Update User`,
            key: 3,
            children: <Update />,
        },
        {
            label: `Delete`,
            key: 4,
            children: <Delete />,
        },
    ];
    return (
        <div className={cx('wrapper')}>
            <Tabs
                defaultActiveKey="1"
                tabPosition={'left'}
                style={{
                    height: '100%',
                }}
                items={items}
            />
        </div>
    );
}

export default User;
