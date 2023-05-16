/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import classNames from 'classnames/bind';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);
const codeCheckEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

function Register() {
    const [openBlank, setOpenBlank] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState(false);

    // check input
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

        if (values.password === undefined || values.password === '') {
            setPassword(true);
        } else {
            setPassword(false);
        }

        if (values.confirmpassword === undefined || values.confirmpassword === '') {
            setConfirmpassword(true);
        } else {
            setConfirmpassword(false);
        }

        // if (values.password !== values.confirmpassword) {
        //     setConfirmPasswordError(true);
        // } else {
        //     setConfirmPasswordError(false);
        // }
    };

    const handleFinish = async (values) => {
        await check(values);

        if (values.email && values.username && values.password && values.confirmpassword) {
            if (!codeCheckEmail.test(values.email)) {
                setEmailError(true);
            } else {
                setEmailError(false);
            }
            if (values.password !== values.confirmpassword) {
                setConfirmPasswordError(true);
            } else {
                setConfirmPasswordError(false);
            }

            if (codeCheckEmail.test(values.email) && values.password === values.confirmpassword) {
                console.log('call');
            }
        } else {
            setOpenBlank(true);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <h1 className={cx('title')}>Register</h1>
            <Modal
                title="No field can be left blank"
                open={openBlank}
                onOk={() => {
                    setOpenBlank(false);
                }}
                onCancel={() => setOpenBlank(false)}
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
                        <Form.Item className={cx('form-item')} label="Password" name="password">
                            <Input.Password className={cx('item-input')} />
                        </Form.Item>
                        {password ? <div className={cx('error')}>Password cannot be left blank</div> : ''}
                    </div>

                    <div className={cx('container-form-item')}>
                        <Form.Item className={cx('form-item')} label="Confirm Password" name="confirmpassword">
                            <Input.Password className={cx('item-input')} />
                        </Form.Item>
                        {confirmpassword ? (
                            <div className={cx('error')}>Confirm password cannot be left blank</div>
                        ) : confirmPasswordError ? (
                            <div className={cx('error')}>Confirmation password doesn't match</div>
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
                                Register
                            </Button>
                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    );
}

export default Register;
