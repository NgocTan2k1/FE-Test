/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import classNames from 'classnames/bind';

import styles from './Update.module.scss';
import { UpdateUserInfomationApi } from '../../../../services/auth';
const cx = classNames.bind(styles);
const codeCheckEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

function Update() {
    const [email, setEmail] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [username, setUsername] = useState(false);
    const [bio, setBio] = useState(false);
    const [image, setImage] = useState(false);
    const [open, setOpen] = useState(false);

    // check email & username
    const check = async (values) => {
        if (values.email === undefined || values.email === '') {
            setEmail(true);
        } else {
            setEmail(false);
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
        }

        if (values.username === undefined || values.username === '') {
            setUsername(true);
        } else {
            setUsername(false);
        }

        if (values.bio === undefined || values.bio === '') {
            setBio(true);
        } else {
            setBio(false);
        }

        if (values.image === undefined || values.image === '') {
            setImage(true);
        } else {
            setImage(false);
        }
    };
    const handleFinish = async (values) => {
        await check(values);

        if (values.email && values.username && values.bio && values.image) {
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }

            if (codeCheckEmail.test(values.email)) {
                console.log('call');
                const data = {
                    username: values.username,
                    email: values.email,
                    bio: values.bio,
                    image: values.image,
                };

                UpdateUserInfomationApi(data)
                    .then((response) => {
                        console.log(response);
                        setOpen(true);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <Modal
                title="Please refresh the page to see the last update"
                open={open}
                onCancel={() => setOpen(false)}
                footer={null}
            >
                <img
                    className={cx('img-warning')}
                    src="https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-29-1.jpg"
                />
            </Modal>

            <h1>Update User Infomation</h1>
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
                        <Form.Item className={cx('form-item')} label="Email" name="email">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {email ? (
                            <div className={cx('error')}>Email cannot be left blank</div>
                        ) : emailError ? (
                            <div className={cx('error')}>This is no email</div>
                        ) : (
                            ''
                        )}
                    </div>
                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Username" name="username">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {username ? <div className={cx('error')}>Username cannot be left blank</div> : ''}
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Bio" name="bio">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {bio ? <div className={cx('error')}>Bio cannot be left blank</div> : ''}
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Image Url" name="image">
                            <Input className={cx('item-input')} />
                        </Form.Item>
                        {image ? <div className={cx('error')}>Image cannot be left blank</div> : ''}
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
                                Update
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Update;
