/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import classNames from 'classnames/bind';

import styles from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../services/nonauth';

const cx = classNames.bind(styles);
const codeCheckEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
function Login() {
    const navigate = useNavigate();

    const [openFail, setOpenFail] = useState(false);
    const [openEmail, setOpenEmail] = useState(false);
    const [openBlank, setOpenBlank] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    const check = (values) => {
        if (values.email === undefined || values.email === '') {
            setEmail(true);
        } else {
            setEmail(false);
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
                setOpenEmail(true);
            } else {
                setEmailError(false);
            }
        }

        if (values.password === undefined || values.password === '') {
            setPassword(true);
        } else {
            setPassword(false);
        }

        if (!values.password && !values.email) {
            setOpenBlank(true);
        }
    };

    const handleFinish = async (values) => {
        await check(values);

        if (values.email && values.password) {
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
                setOpenEmail(true);
            } else {
                setEmailError(false);
                const data = {
                    password: values.password,
                    email: values.email,
                };

                await LoginApi(data)
                    .then(async (response) => {
                        console.log('response:', response);
                        localStorage.setItem(
                            'User',
                            JSON.stringify({
                                token: response.data.user.token,
                            }),
                        );
                        navigate('/home');
                    })
                    .catch((error) => {
                        console.log('error:', error);
                    });
            }
        }
    };

    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Login</h1>
            <Modal
                title="This is not an email"
                open={openEmail}
                onOk={() => setOpenEmail(false)}
                onCancel={() => setOpenEmail(false)}
                footer={null}
            >
                <img className={cx('img-warning')} src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" />
            </Modal>
            <Modal
                title="Login email or password cannot be blank"
                open={openBlank}
                onOk={() => setOpenBlank(false)}
                onCancel={() => setOpenBlank(false)}
                footer={null}
            >
                <img className={cx('img-warning')} src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" />
            </Modal>
            <Modal
                title="Login email or password is incorrect"
                open={openFail}
                onOk={() => setOpenFail(false)}
                onCancel={() => setOpenFail(false)}
                footer={null}
            >
                <img className={cx('img-warning')} src="https://cdn-icons-png.flaticon.com/512/4201/4201973.png" />
            </Modal>
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
                        maxWidth: 600,
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
                        <Form.Item className={cx('form-item')} label="Password" name="password">
                            <Input.Password className={cx('item-input')} />
                        </Form.Item>
                        {password ? <div className={cx('error')}>Password cannot be left blank</div> : ''}
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
                                Login
                            </Button>
                            <Link className={cx('link')} to="/register">
                                Register now
                            </Link>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Login;
