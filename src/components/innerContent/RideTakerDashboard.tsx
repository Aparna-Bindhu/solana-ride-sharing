import { Row, Col, Form, Input, Button, Radio, DatePicker, Modal, InputNumber } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/innerContent.css";

export const RideTakerDashboard = () => {

    const [rideGiversList, setRideGiversList] = useState([
        { id:1, RideGiver: "Akhil", Vehicle: "Polo", AvailableSeats: "2", Amount: 10000000, Gender: "Male" },
        { id:2, RideGiver: "Anoop", Vehicle: "Alto", AvailableSeats: "3", Amount: 10000000, Gender: "Male" },
        { id:3, RideGiver: "Abhijith", Vehicle: "Inova", AvailableSeats: "2", Amount: 10000000, Gender: "Male" },
        { id:4, RideGiver: "Geethu", Vehicle: "Polo", AvailableSeats: "1", Amount: 10000000, Gender: "Female" },
        { id:5, RideGiver: "Rani", Vehicle: "Alto", AvailableSeats: "2", Amount: 10000000, Gender: "Female" },
        { id:6, RideGiver: "Raj", Vehicle: "Toyato", AvailableSeats: "3", Amount: 10000000, Gender: "Male" },
        { id:7, RideGiver: "Athul", Vehicle: "Toyato", AvailableSeats: "2", Amount: 10000000, Gender: "Male" },
        { id:8, RideGiver: "Nithun", Vehicle: "Zen", AvailableSeats: "1", Amount: 10000000, Gender: "Male" },
        { id:9, RideGiver: "Lekshmi", Vehicle: "Polo", AvailableSeats: "2", Amount: 10000000, Gender: "Female" }])

    function requestForRideGiver(id:Number) {
        alert(`hello, ${id}`);
    }

    return (
        <>
            <Row>
                <Col xs={24} md={24}>
                    <div className="rideGiverList">
                        <table>
                            <tr>
                                <th>SL.NO</th>
                                <th>RIDE GIVER</th>
                                <th>GENDER</th>
                                <th>VEHICLE NAME</th>
                                <th>NO: OF SEAT WANTED</th>
                                <th>AMOUNT</th>
                            </tr>
                            {
                                rideGiversList.map((rideGiver, index) => (

                                    <tr className="giverrequest">
                                        <td key={rideGiver.id}>{index + 1}</td>
                                        <td>{rideGiver.RideGiver}</td>
                                        <td>{rideGiver.Gender}</td>
                                        <td>{rideGiver.Vehicle}</td>
                                        <td>{rideGiver.AvailableSeats}</td>
                                        <td>{rideGiver.Amount}</td>
                                        <td><Button type="primary" onClick={() => requestForRideGiver(rideGiver.id)}>Request</Button></td>
                                    </tr>
                                ))}

                        </table>
                    </div>
                </Col>
            </Row>
        </>
    );
};

