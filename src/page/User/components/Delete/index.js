import { useEffect, useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import classNames from 'classnames/bind';

import styles from './Delete.module.scss';
import { DeleteUserApi, GetUserInfomationApi } from '../../../../services/auth';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);
const codeCheckEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
function Delete() {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');
    const [email, setEmail] = useState(false);
    const [emailError, setEmailError] = useState(false);

    // check email
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
    };
    const handleFinish = async (values) => {
        await check(values);

        if (values.email) {
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }

            if (codeCheckEmail.test(values.email)) {
                DeleteUserApi(values.email)
                    .then((response) => {
                        setOpen(true);
                        setContent('Delete sucess these user');
                    })
                    .catch((error) => {
                        console.log(error);
                        setOpen(true);
                        setContent("Can't delete these user");
                    });
            }
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h1>Delete User By Email</h1>
            <div className={cx('container-form')}>
                <Modal title={content} open={open} onCancel={() => setOpen(false)} footer={null}></Modal>
                <Form
                    className={cx('form')}
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
                        <Form.Item
                            className={cx('form-item')}
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button className={cx('item-button')} type="primary" htmlType="submit">
                                Delete
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Delete;
