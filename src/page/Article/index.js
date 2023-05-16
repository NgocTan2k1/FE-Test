import { Tabs } from 'antd';
import classNames from 'classnames/bind';

import styles from './Article.module.scss';
import ListItem from './components/ListItem/index.js';
import Create from './components/Create/index.js';
import Update from './components/Update/index.js';

const cx = classNames.bind(styles);
function Article() {
    const items = [
        {
            label: `List Articles`,
            key: 1,
            children: <ListItem />,
        },
        {
            label: `Create An Article`,
            key: 2,
            children: <Create />,
        },
        {
            label: `Update An Article`,
            key: 3,
            children: <Update />,
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

export default Article;
