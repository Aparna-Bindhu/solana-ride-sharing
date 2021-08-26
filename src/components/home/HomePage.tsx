import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Login } from './Login';
import { Signup } from './Signup';
import { useState } from 'react';
import logo from '../../img/car.png';

export const HomePage = () => {

  const [signUpLink, setSignUpLink] = useState(false);

  function SignUpLink() {
    setSignUpLink(true);
  }

  function LoginLink(){
    setSignUpLink(false);
  }
  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}>
          <div>
            <img className="logo-ride-share-img" src={logo} width={200} height={150} />
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} className="home-main-col">
          <Row className="home-content-row">
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} className="app-content">
              <div className="sub-app-content">
                <h1>Lorem Ipsum</h1>
                <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                  when an unknown printer took a galley of type and scrambled it to make a type specimen
                  book.</p>
                {!signUpLink ?
                  <Form.Item className="register-now-link">
                    <a onClick={SignUpLink}>Signup now!</a>
                  </Form.Item>
                  :
                  <Form.Item className="register-now-link">
                    Already register? <a onClick={LoginLink}>Login!</a>
                  </Form.Item>
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

