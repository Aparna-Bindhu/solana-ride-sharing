import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Login } from './Login';
import { Signup } from './Signup';
import { useState } from 'react';
import logo from '../../img/ride.png';

export const HomePage = () => {
  const [signUpLink, setSignUpLink] = useState(false);

  function SignUpLink() {
    setSignUpLink(true);
  }

  function LoginLink() {
    setSignUpLink(false);
  }
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
          <div className="logo-ride-share-img">
            <img src={logo} />
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} className="home-main-col">
          <Row className="home-content-row">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} className="app-content">
              <div className="sub-app-content">
                {!signUpLink ?
                  <>
                    <h1>DRIVE</h1>
                    <p><b>DRIVE</b> to get a ride or share a ride.
                      <br />If you are not registered yet, please click the below link.</p>
                    <Form.Item className="register-now-link">
                      <a onClick={SignUpLink}>Register now!</a>
                    </Form.Item>
                  </>
                  :
                  <>
                    <h1>DRIVE</h1>
                    <p><b>DRIVE</b> to get a ride or share a ride.</p>
                    <Form.Item className="register-now-link">
                      Already registered? <a onClick={LoginLink}>Login!</a>
                    </Form.Item>
                  </>
                }
                <div id="social-media-align-single">
                  <a href="" ><FacebookOutlined className="social-media-icon" /></a> <a href="" ><InstagramOutlined className="social-media-icon" /></a> <a href="" ><GoogleOutlined className="social-media-icon" /></a>
                </div>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} className="login-register">
              {signUpLink ? <Signup /> : <Login />}
            </Col>
          </Row>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}></Col>
      </Row>
    </>
  );
};

