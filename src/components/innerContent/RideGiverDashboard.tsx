import { Row, Col, Form, Input, Button, Radio, DatePicker, Modal, InputNumber } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/innerContent.css";

export const RideGiverDashboard = () => {

    const [rideGiversList, setRideGiversList] = useState([
        { id:1, RideGiver: "Akhil", Vehicle: "Polo", AvailableSeats: "2", Amount: 10000000, StartDes: "Kollam" , DropDes: "Trivandrum" },
        { id:2, RideGiver: "Anoop", Vehicle: "Alto", AvailableSeats: "3", Amount: 10000000, StartDes: "Trivandrum" , DropDes: "Kollam" },
        { id:3, RideGiver: "Abhijith", Vehicle: "Inova", AvailableSeats: "2", Amount: 10000000, StartDes: "Kollam", DropDes: "Trivandrum"  },
        { id:4, RideGiver: "Geethu", Vehicle: "Polo", AvailableSeats: "1", Amount: 10000000, StartDes: "Trivandrum", DropDes: "Kollam"  },
        { id:5, RideGiver: "Rani", Vehicle: "Alto", AvailableSeats: "2", Amount: 10000000, StartDes: "Kollam" , DropDes: "Trivandrum" }])

    function requestForRideGiver(id:Number) {
        alert(`hello, ${id}`);
    }

    return (
        <>
            <Row>
                <Col xs={24} md={24}>
                    <div className="rideGiverList"><br/>
                        <h2>Ride list provided by you.</h2>
                        <table>
                            <tr>
                                <th>SL.NO</th>
                                <th>RIDE GIVER</th>
                                <th>VEHICLE NAME</th>
                                <th>AVAILABLE SEATS</th>
                                <th>From</th>
                                <th>To</th>
                                <th>AMOUNT</th>
                            </tr>
                            {
                                rideGiversList.map((rideGiver, index) => (

                                    <tr className="giverrequest">
                                        <td key={rideGiver.id}>{index + 1}</td>
                                        <td>{rideGiver.RideGiver}</td>
                                        <td>{rideGiver.Vehicle}</td>
                                        <td>{rideGiver.AvailableSeats}</td>
                                        <td>{rideGiver.StartDes}</td>
                                        <td>{rideGiver.DropDes}</td>
                                        <td>{rideGiver.Amount}</td>
                                    </tr>
                                ))}

                        </table>
                    </div>
                </Col>
            </Row>
        </>
    );
};

