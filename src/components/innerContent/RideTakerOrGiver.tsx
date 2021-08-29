import { Row, Col, Form, Input, Button, Radio } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, InstagramOutlined, GoogleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/innerContent.css";
import shakehand from '../../img/shakehand.png';
import leafhand from '../../img/leafhand.png';
import goodness from '../../img/goodness.png';
import ridetaker from '../../img/ridetaker.svg';
import { RideGiver } from './RideGiver';
import { RideTaker } from './RideTaker';

export const RideTakerOrGiver = () => {

  const [rideGiverOrTakerBlock, setRideGiverOrTakerBlock] = useState(false);
  const [rideTakerBlock, setRideTakerBlock] = useState(false);
  const [rideGiverBlock, setRideGiverBlock] = useState(false);
  const [iAgreeDisable, setIAgreeDisable] = useState(false);

  function showRideGiverOrTakerBlock() {
    setRideGiverOrTakerBlock(true);
    setRideTakerBlock(false);
    setRideGiverBlock(false);
    setIAgreeDisable(true);
  }

  function setRideTaker() {
    setRideGiverOrTakerBlock(false);
    setRideTakerBlock(true);
    setRideGiverBlock(false);
  }

  function setRideGiver() {
    setRideGiverOrTakerBlock(false);
    setRideTakerBlock(false);
    setRideGiverBlock(true);
  }

  return (
    <>
      <Row className="ridetakergiverbg">
        <Row>
          <Col xs={24} md={24}>
            <ul className="unorderedliststyle">
              <li><a href="/requestlist">Ride Giver Accept List</a></li>
              <li><a href="/acceptlist" >Ride Taker Request List</a></li>
              <li><a href="/acceptlist" >Transactions</a></li>
            </ul>
          </Col>
        </Row>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          <div className="pledge_block">
            <h2>QUICK RIDER'S PLEDGE</h2>
            <div className="pledge_content_block">
              <div className="respect_content">
                <img src={shakehand} width={70} />
              </div>
              <div className="respect_content" id="respect_content">
                <h3>Respect Each Other</h3>
                <p>Respect for each other time, space and money.</p>
              </div>
            </div>

            <div className="pledge_content_block">
              <div className="respect_content">
                <img src={leafhand} width={70} />
              </div>
              <div className="respect_content" id="respect_content">
                <h3>Be Environment Friendly</h3>
                <p>Ride sharing regularly can be environment friendly.</p>
              </div>
            </div>

            <div className="pledge_content_block">
              <div className="respect_content">
                <img src={goodness} width={70} />
              </div>
              <div className="respect_content" id="respect_content">
                <h3>Spread Goodness</h3>
                <p>Grow the community and spread goodness.</p>
              </div>
            </div>
            <Button type="primary" htmlType="submit" className="login-form-button" disabled={iAgreeDisable} block onClick={showRideGiverOrTakerBlock}>
              I Agree
            </Button>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }}>
          {(() => {
            if (rideGiverOrTakerBlock && !rideTakerBlock && !rideGiverBlock) {
              return (
                <div className="ridetakergiver">
                  <h2>SELECT YOUR RIDE PREFERENCE</h2>
                  <p className="stylecenter">You can change it anytime.</p>
                  <div className="pledge_content_block">
                    <div className="ride_content">
                      <p>Looking for ride.</p>
                    </div>
                    <div className="ride_content">
                      <img src={ridetaker} width={120} />
                    </div>
                    <Button type="primary" value="a" className="ride" block onClick={setRideTaker}>
                      Ride Taker
                    </Button>
                  </div>
                  <div className="pledge_content_block">
                    <div className="ride_content">
                      <p>Share seats.</p>
                    </div>
                    <div className="ride_content">
                      <img src={ridetaker} width={120} />
                    </div>
                    <Button type="primary" value="a" className="ride" block onClick={setRideGiver}>
                      Ride Giver
                    </Button>
                  </div>
                </div>
              )
            } else if (!rideGiverOrTakerBlock && rideTakerBlock && !rideGiverBlock) {
              return (
                <RideTaker />
              )
            }
            else if (!rideGiverOrTakerBlock && !rideTakerBlock && rideGiverBlock) {
              return (

                <RideGiver />
              )
            }
          })()}
        </Col>
      </Row>

    </>
  );
};

