import { Row, Col, Form, Input, Button, Radio, DatePicker, Modal, InputNumber } from 'antd';
import { CheckOutlined, DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/innerContent.css";

export const AcceptList = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [rideGiversList, setRideGiversList] = useState([
        { id: 1, RideGiver: "Akhil", AvailableSeats: "2", Amount: 10000000, Gender: "Male" },
        { id: 2, RideGiver: "Anoop", AvailableSeats: "3", Amount: 10000000, Gender: "Male" },
        { id: 3, RideGiver: "Abhijith", AvailableSeats: "2", Amount: 10000000, Gender: "Male" },
        { id: 4, RideGiver: "Geethu", AvailableSeats: "1", Amount: 10000000, Gender: "Female" },
        { id: 5, RideGiver: "Rani", AvailableSeats: "2", Amount: 10000000, Gender: "Female" },
        { id: 6, RideGiver: "Raj", AvailableSeats: "3", Amount: 10000000, Gender: "Male" }])

    function requestForRideGiver(id: Number) {
        Modal.info({
            content: (
                <div>
                   OTP will Send to your phone.
                   <Input type="text" placeholder="please enter your phone number"
                    inputMode="numeric"
                    autoComplete="one-time-code"
                    pattern="\d{6}"
                    required
                   onChange={e => setPhoneNumber(e.target.value)}/>
                </div>
            ),
            onOk: () => {
                
            }
        });
    }

    return (
        <>
            <Row>
                <Col xs={24} md={24}>
                    <div className="rideGiverList"><br/>
                        <h2>Requests from ride taker - Accept/Decline</h2>
                        <table>
                            <tr>
                                <th>SL.NO</th>
                                <th>RIDE GIVER</th>
                                <th>GENDER</th>
                                <th>NO: OF SEATS</th>
                                <th>AMOUNT</th>
                            </tr>
                            {
                                rideGiversList.map((rideGiver, index) => (

                                    <tr className="giverrequest">
                                        <td key={rideGiver.id}>{index + 1}</td>
                                        <td>{rideGiver.RideGiver}</td>
                                        <td>{rideGiver.Gender}</td>
                                        <td>{rideGiver.AvailableSeats}</td>
                                        <td>{rideGiver.Amount}</td>
                                        <td><Button type="primary" onClick={() => requestForRideGiver(rideGiver.id)}><CheckOutlined /></Button></td>
                                        <td><Button danger type="text" onClick={() => requestForRideGiver(rideGiver.id)}><DeleteOutlined style={{ fontSize: '20px' }} /></Button></td>
                                    </tr>
                                ))}

                        </table>
                    </div>
                </Col>
            </Row>
        </>
    );
};

