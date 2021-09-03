import {Form, Input, Button, Row, Col } from 'antd';
import React, { useState ,useEffect} from "react";
import { disposeEmitNodes } from "typescript";
import { sendMoney } from "../../helpers/Wallet";import {
  getTransactions,
  TransactionWithSignature,
} from "../../helpers/Transaction";
import { Connection } from "@solana/web3.js";
import { initWallet, WalletAdapter } from "../../helpers/Wallet";
import "../css/payment.css"
import { useHistory} from "react-router-dom";
import { TransactionsView } from './Transaction';

export const Sender =(props:any) => {
  
  const [afterSend,setAfterSend] = useState(false);

  const [transactions, setTransactions] =
  useState<Array<TransactionWithSignature>>();
const conn = React.useRef<Connection>();
const wall = React.useRef<WalletAdapter>();

useEffect(() => {
  initWallet().then(([connection, wallet]: [Connection, WalletAdapter]) => {
    conn.current = connection;
    wall.current = wallet;
    if (wallet.publicKey) {
      getTransactions(connection, wallet.publicKey).then((trans) => {
        setTransactions(trans);
      });
    }
  });
}, []);



const didSendMoney = () => {
  console.log("wall.current!.publicKey!",wall.current!.publicKey);
  getTransactions(conn.current!, wall.current!.publicKey!).then((trans) => {
    setTransactions(trans);
  });
};

  const [amount, setAmount] = useState(0);
  const [address, setAddress] = useState("");

  const onChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value ? Number(e.target.value) : 0);
  };

  const onChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value ? e.target.value.toString() : "");
  };

  const onClickSendMoney = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    console.log('address:',props.location.state.Account);
    await sendMoney(props.location.state.Account, props.location.state.Amount);
    didSendMoney();
    setAfterSend(true);
  };

  // fucntion showTheTrasactionDetails(){
  //   Modal.info({
  //     title: "Let's Pay Your Ride.",
  //     content: (
  //         <div>
  //             <Input type="text" placeholder="Please enter the code"/>
  //         </div>
  //     ),
  //     okText: "Payment",
  //     onOk: () => {
  //         handleOk(id,Amount,Account);
  //       }
  // });
  // }

  return (
    <Row>
      <Col xs="24" md={6}></Col>
      <Col xs="24" md={12}>
        {!afterSend ?
        <>
        <h2 id="verifyamounth2">Verify the Amount and complete your payment</h2>
      <Form
          name="normal_login"
          className="payment-form"
          initialValues={{ remember: true }}
          >
          <Form.Item
            name="username"
          >
            <Input placeholder="Amount(Lamport)" defaultValue={props.location.state.Amount} className="inputstyle" disabled/>
          </Form.Item>
          <Form.Item
            name="account"
          >
            <Input
              type="text"
              placeholder="Address"
              defaultValue={props.location.state.Account}
              className="inputstyle"
              disabled
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="send-buttons" onClick={onClickSendMoney} block>
              Send
            </Button>
          </Form.Item>
        </Form>
        </> :
        <TransactionsView transactions = {transactions} />
        }

      </Col>
      <Col xs="24" md={6}></Col>
    </Row>
    
  );
};

