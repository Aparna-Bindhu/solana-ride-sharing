import { Button, Col, Row } from "antd";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const HelloWorld= () => {
  return (
    <Row>
        <Col>
            <h1>Hello World</h1>
            <p>Welcome to Hello world!</p>
        </Col>
    </Row>
  );
};
