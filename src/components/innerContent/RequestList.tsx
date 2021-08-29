import { Row, Col, Form, Input, Button, Radio, DatePicker, Modal, InputNumber,Tooltip } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";
import "../css/innerContent.css";

export const RequestList = () => {
    const history = useHistory();
    const [rideGiversList, setRideGiversList] = useState([
        { id:1, RideGiver: "Akhil", Vehicle: "Polo", AvailableSeats: "2", Amount: 10000000, Gender: "Male", rideGiverAccept:true, Account:'CGa3fsRCdsBiAJV7kxbYuARrT1G19QRFWYTo1rj3zAuS' },
        { id:2, RideGiver: "Anoop", Vehicle: "Alto", AvailableSeats: "3", Amount: 10000000, Gender: "Male", rideGiverAccept:false, Account:'CGa3fsRCdsBiAJV7kxbYuARrT1G19QRFWYTo1rj3zAuS' },
        { id:3, RideGiver: "Abhijith", Vehicle: "Inova", AvailableSeats: "2", Amount: 10000000, Gender: "Male", rideGiverAccept:true, Account:'CGa3fsRCdsBiAJV7kxbYuARrT1G19QRFWYTo1rj3zAuS' },
        { id:4, RideGiver: "Geethu", Vehicle: "Polo", AvailableSeats: "1", Amount: 20000000, Gender: "Female", rideGiverAccept:false, Account:'CGa3fsRCdsBiAJV7kxbYuARrT1G19QRFWYTo1rj3zAuS' }])

    function requestForRideGiver(id:Number, Amount:Number, Account:String) {
        Modal.info({
            title: "Let's Pay Your Ride.",
            content: (
                <div>
                    <Input type="text" placeholder="Please enter the code"/>
                </div>
            ),
            okText: "Payment",
            onOk: () => {
                handleOk(id,Amount,Account);
              }
        });
    }

    const handleOk = (id:Number, Amount:Number, Account:String) => {
        history.push({
            pathname: '/payment',
            state: {id:id, Amount:Amount, Account:Account}
        });
};

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
                                        <td><Button type="primary" disabled>Requested</Button></td>
                                        <td><Tooltip placement="top" title="Untill the ride giver accept your request the payment button get disabled."><Button type="primary" onClick={() => requestForRideGiver(rideGiver.id,rideGiver.Amount,rideGiver.Account)} disabled={rideGiver.rideGiverAccept}>Payment</Button></Tooltip></td>
                                    </tr>
                                ))}

                        </table>
                    </div>
                </Col>
            </Row>
        </>
    );
};

