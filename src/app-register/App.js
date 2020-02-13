import React, { useState, useEffect } from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button, Checkbox, Form, Icon, Input, Tooltip, Col, Select, Layout, message, Modal } from 'antd';
import SimpleFooter from '../common/footer-simple/App';
import RequestApi from '../common/RequestApi';

const { Content } = Layout;
const { Option } = Select;

function Register(props) {

  const [confirmDirty, setConfirmDirty] = useState(false);
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
  })(
    <Select style={{ width: 70 }}>
      <Option value="86">
        {/* <span>中国</span> */}
        <span>+86</span>
      </Option>
      <Option value="852">
        {/* <span>中国香港</span> */}
        <span>+852</span>
      </Option>
      <Option value="853">
        {/* <span>中国澳门</span> */}
        <span>+853</span>
      </Option>
      <Option value="886">
        {/* <span>中国台湾</span> */}
        <span>+886</span>
      </Option>
    </Select>,
  );

  useEffect(() => {

  });

  function handleSubmit(e) {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      RequestApi.post("/api/users", values).then((res) => {
        if (res.code !== 1) {
          Modal.error({
            title: '错误',
            content: res.data.message,
          });
        }
      }).catch(function (error) {
        message.info("-err->", JSON.stringify(error));
      });
    });
  };

  function handleConfirmBlur(e) {
    const { value } = e.target;
    setConfirmDirty(confirmDirty || !!value);
  };

  function compareToFirstPassword(rule, value, callback) {
    const { form } = props;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次输入的密码不一致!');
    } else {
      callback();
    }
  };

  function validateToNextPassword(rule, value, callback) {
    const { form } = props;
    if (value && confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  };

  return (
    <Layout style={{ background: '#fff' }}>
      <Content className="content">
        <div className="register-container">
          <div className="register-title">
            欢迎注册
          </div>
          <Form {...formItemLayout} onSubmit={handleSubmit}>
            <Form.Item
              label={
                <span>
                  用户名&nbsp;
                  <Tooltip title="不可修改">
                    <Icon type="question-circle-o" />
                  </Tooltip>
                </span>
              }
            >
              <Col span={16}>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: '请输入用户名!' }],
                })(<Input />)}
              </Col>
            </Form.Item>
            <Form.Item label="密码" >
              <Col span={16}>
                {getFieldDecorator('password', {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                })(<Input.Password />)}
              </Col>
            </Form.Item>
            <Form.Item label="确认密码" >
              <Col span={16}>
                {getFieldDecorator('confirm', {
                  rules: [
                    {
                      required: true,
                      message: '请输入确认密码!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                })(<Input.Password onBlur={handleConfirmBlur} />)}
              </Col>
            </Form.Item>
            <Form.Item label="手机号码" >
              <Col span={16}>
                {getFieldDecorator('mobile', {
                  rules: [{ required: true, message: '请输入手机号码!' }],
                })(<Input addonBefore={prefixSelector} style={{ width: '100%' }} />)}
              </Col>
            </Form.Item>
            <Form.Item label="验证码" >
              <Col span={16}>
                {getFieldDecorator('captcha', {
                  rules: [{ required: true, message: '请输入验证码!' }],
                })(<Input addonAfter={<Button type="link" size="small">获取</Button>} />)}
              </Col>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>
                  我已阅读并同意 <a href="/">agreement</a>
                </Checkbox>,
              )}
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit">注册</Button>
            </Form.Item>
          </Form>
        </div>
      </Content>
      <SimpleFooter />
    </Layout>
  );
}

export default Form.create({ name: 'Register' })(Register);
