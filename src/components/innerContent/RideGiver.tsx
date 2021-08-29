import { Row, Col, Form, Input, Button, Radio, DatePicker, Modal,InputNumber } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/innerContent.css";
import car from '../../img/carselect.png';
import bike from '../../img/bike.png';

export const RideGiver = () => {

    const [hideSeat, setHideseat] = useState(true);

    function hideSeatAvailable() {
        setHideseat(false);
    }

    function showSeatAvailable() {
        setHideseat(true);
    }
    
    function showSafeDiverModal() {
        Modal.info({
            title: "Let's Beat this together",
            content: (
                <ul>
                    <li>You should follow Lock down norms and Government guidelines diligently and not
                        exposed to any one “who are quarantined or COVID-19 patients”.</li>
                    <li>Confirm that currently you do not have any symptoms of the COVID-19 even mildly.</li>
                    <li>Make sure that you traveled safely anywhere out in the last one month.</li>
                    <li>You should take all necessary safety precautions: Wear a Mask, Sanitize Hands regularly and practice social distancing.</li>
                </ul>
            ),
            okText: "I am a safe Ride Giver",
            onOk() {
                Modal.success({
                    content: (
                        <div>
                            <p>You are  a safe ride giver.</p>
                        </div>
                    ),
                    onOk: () => {
                        handleOk();
                      }
                })
            },
        });
    }

    const handleOk = () => {
        window.location.href = "/rideGiver";
};

    return (
        <>
            <div className="pledge_block">
                <h2>Ride Giver</h2>
                <Form
                    name="normal_login"
                    className="car_details_giver"
                    initialValues={{ remember: true }}
                >
                    <div className="vehicle_selection">
                        <Radio.Group defaultValue={1}>
                            <Row>
                                <Col xs={7} md={7}>
                                    <Radio value={1} className="vehicle_content_block" onClick={showSeatAvailable}>
                                        <div className="respect_content">
                                            <img src={car} width={80} height={70} />
                                        </div>
                                    </Radio>
                                </Col>
                                <Col xs={10} md={10}></Col>
                                <Col xs={7} md={7}>
                                    <Radio value={2} className="vehicle_content_block" id="bike" onClick={hideSeatAvailable}>
                                        <div className="respect_content" id="respect_content">
                                            <img src={bike} width={70} />
                                        </div>
                                    </Radio>
                                </Col>
                            </Row>
                        </Radio.Group>
                    </div>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your Car Name!' }]}
                    >
                        <Input type="text" placeholder="Name"/>
                    </Form.Item>
                    <Form.Item
                        name="registration no"
                        rules={[{ required: true, message: 'Please input your Registration No!' }]}
                    >
                        <Input type="text" placeholder="Registration No" />
                    </Form.Item>
                    <Row>
                        <Col xs={11} md={11}>

                            <Form.Item
                                name="startloc"
                                rules={[{ required: true, message: 'Please input your start location!' }]}
                            >
                                <Input type="text" placeholder="Start Location"/>
                            </Form.Item>
                        </Col>
                        <Col xs={2} md={2}></Col>
                        <Col xs={11} md={11}>

                            <Form.Item
                                name="droploc"
                                rules={[{ required: true, message: 'Please input your Drop location!' }]}
                            >
                                <Input type="text" placeholder="Drop Location" />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={11} md={11}>

                            <Form.Item
                                name="datetime"
                                rules={[{ required: true, message: 'Please input Date and Time!' }]}
                            >
                                <DatePicker showTime />
                            </Form.Item>
                        </Col>
                        <Col xs={2} md={2}></Col>
                        <Col xs={11} md={11}>

                        {hideSeat &&
                                <Form.Item
                                    name="seats"
                                    rules={[{ required: true, message: 'Please input available seats!' }]}
                                >
                                    <InputNumber
                                        style={{
                                            width: 200,
                                        }} type="number" placeholder="Available Seats" min={1} max={3} />
                                </Form.Item>
                            }
                        </Col>
                    </Row>
                </Form>
                <Button type="primary" htmlType="submit" className="login-form-button" block onClick={showSafeDiverModal}>
                    Continue
                </Button>
            </div>

        </>
    );
};

