import {Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import "../css/login.css";
// import { Label } from '@material-ui/icons';

export const Signup = () => {
  return (
    <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          >
          <Form.Item
            name="name"
            rules={[{ required: true, message: 'Please input your Name!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} type="text" placeholder="FullName" />
          </Form.Item>
          <Form.Item
            name="emailid"
            rules={[{ required: true, message: 'Please input your Email Address!' }]}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon"  />}
            type="email" placeholder="Email for communication"
            />
          </Form.Item>
          <Form.Item
            name="phonenumber"
            rules={[{ required: true, message: 'Please input your Phone Number!' }]}
          >
            <Input id="phonenumber"
              prefix={<PhoneOutlined className="site-form-item-icon" />}
            type="number" placeholder="Phone Number"/>
          </Form.Item>
          <Form.Item
            name="gender"
            rules={[{ required: true, message: 'Please select your gender!' }]}
          >
              <div>Gender</div>
            <Button>Male</Button> <Button>Female</Button> <Button>No To Say</Button>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
            type="password" placeholder="create password"/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block>
              Sign Up
            </Button>
          </Form.Item>
        </Form>
  );
};
