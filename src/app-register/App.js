import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Icon, Input } from 'antd';

function Login(props) {

  const [scrollHeight, setScrollHeight] = useState(0); 

  useEffect(() => {
    setScrollHeight(document.documentElement.clientHeight)
    document.title = `登录`;
  }, [scrollHeight]);

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  const { getFieldDecorator, getFieldError, isFieldTouched } = props.form;
  const usernameError = isFieldTouched('username') && getFieldError('username');
  const passwordError = isFieldTouched('password') && getFieldError('password');
  return (
    <div className="App" style={{height: scrollHeight}}>
      <div className="login-container">
        <div className="login-title">
          Title
        </div>
        <Form className="login-form" onSubmit={handleSubmit}>
          <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入用户名!' },
              { min: 6, message: "请输入6-20位字母或数字" },
              { max: 10, message: "请输入6-20位字母或数字" }],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="username"
              />,
            )}
          </Form.Item>
          <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' },
              { min: 6, message: "请输入有效的密码！" }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox className="login-form-remember">Remember me</Checkbox>)}
            <a className="login-form-forgot" href="/#">
              Forgot password
            </a>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            Or <a href="/#">register now!</a>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Form.create({ name: 'Login' })(Login);
