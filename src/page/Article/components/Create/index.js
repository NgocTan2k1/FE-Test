/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import classNames from 'classnames/bind';

import styles from './Create.module.scss';
import { CreateAnArticlesApi } from '../../../../services/auth';
const cx = classNames.bind(styles);

function Create({ slug }) {
    const [title, setTitle] = useState(false);
    const [description, setDescription] = useState(false);
    const [body, setBody] = useState(false);
    const [open, setOpen] = useState(false);

    // check email & username
    const check = async (values) => {
        if (values.title === undefined || values.title === '') {
            setTitle(true);
        } else {
            setTitle(false);
        }

        if (values.description === undefined || values.description === '') {
            setDescription(true);
        } else {
            setDescription(false);
        }

        if (values.body === undefined || values.body === '') {
            setBody(true);
        } else {
            setBody(false);
        }
    };

    const handleFinish = async (values) => {
        await check(values);

        if (values.title && values.description && values.body) {
            const data = {
                title: values.title,
                description: values.description,
                body: values.body,
                tagList: values.tagList ? values.tagList : '',
            };

            CreateAnArticlesApi(data)
                .then((response) => {
                    console.log(response);
                    setOpen(true);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Modal
                title="Please refresh the page to see the last Create"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                <img
                    className={cx('img-warning')}
                    src="https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-29-1.jpg"
                />
            </Modal>

            <h1>Create An Article</h1>
            <div className={cx('container-form')}>
                <Form
                    className={cx('form')}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 700,
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    onFinish={handleFinish}
                    autoComplete="off"
                >
                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Title" name="title">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {title ? <div className={cx('error')}>Title cannot be left blank</div> : ''}
                    </div>
                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Description" name="description">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {description ? <div className={cx('error')}>Description cannot be left blank</div> : ''}
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Body" name="body">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {body ? <div className={cx('error')}>Body cannot be left blank</div> : ''}
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="TagList" name="tagList">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item
                            className={cx('form-item')}
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button className={cx('item-button')} type="primary" htmlType="submit">
                                Create
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Create;
