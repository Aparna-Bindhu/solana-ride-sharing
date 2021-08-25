import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/login.css";
import { Login } from './Login';

export const HomePage = () => {
  return (
    <Row>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}></Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} className="home-main-col">
        <Row className="home-content-row">
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} className="app-content">
        <div className="sub-app-content">
          <h1>Lorem Ipsum</h1>
          <p><b>Lorem Ipsum</b> is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.</p>
            <Form.Item className="register-now-link">
            <a href="">register now!</a>
            </Form.Item>
        </div>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} className="login-register">
        <Login />
      </Col>
      </Row>
      </Col>
      <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 5 }}></Col>
    </Row>
  );
};

