import {Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import "../css/login.css";
import { useState } from 'react';
import { useHistory} from "react-router-dom";

export const Login = () => {

  const history = useHistory();
  const[showError,setShowError] = useState(false);
  const [loginDetails, setLoginDetails] = useState([{id:1, username:'admin@admin.com', password:'admin'},
                                  {id:1, username:'ridegiver@admin.com', password:'ridegiver'},
                                  {id:1, username:'ridetaker@admin.com', password:'ridetaker'}])

  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function ckeckLoginCredentials(){
    return loginDetails.map((item, index) => (
      (item.username == username && item.password == password)?
      history.push({
        pathname: '/ridetakerorgiver',
        state: {id:item.id, username:item.username}
    }):
    setShowError(true)
    ))
  }

  return (
    <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          >
            {showError&&<p style={{color:'red'}}>Invalid Username or Password.</p>}
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" onChange={e => setUserName(e.target.value)}/>
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              onChange={e => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button" block onClick={ckeckLoginCredentials}>
              Log in
            </Button>
            <a className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>
        </Form>
  );
};
