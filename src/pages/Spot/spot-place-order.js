import React, { useState } from 'react';
import { Button, InputGroup, Form } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function SpotOrders(props) {

    const [key, setKey] = useState('limit');


    return (
        <div className="spot-order-container">
            <div className="spot-box-header-wrapper">
                <div className="title">
                    Place Order
                </div>
                <hr />
            </div>
            <div className="d-flex">
                <Button variant="success" size="lg" className="w-50 me-1">BUY</Button>
                <Button variant="danger" size="lg" className="w-50 me-1">SELL</Button>
            </div>
            <div className="my-3">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3"
                >
                    <Tab eventKey="limit" title="Limit">
                        <h5>DOGE Balance : <span></span></h5>
                        <br />
                        <h5>USDT Balance : <span></span></h5>

                        <InputGroup className="mb-3">
                            <InputGroup.Text>Price</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>USDT</InputGroup.Text>
                        </InputGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Amount</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>DOGE</InputGroup.Text>
                        </InputGroup>

                        <br />
                        <br />
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Amount</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>DOGE</InputGroup.Text>
                        </InputGroup>

                        <Button variant="success" size="lg" className="w-100 me-1">LOGIN</Button>

                    </Tab>
                    <Tab eventKey="market" title="Market">
                    <h5>DOGE Balance : <span></span></h5>
                        <br />
                        <h5>USDT Balance : <span></span></h5>

                        {/* <InputGroup className="mb-3">
                            <InputGroup.Text>Price</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>USDT</InputGroup.Text>
                        </InputGroup> */}
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Amount</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>DOGE</InputGroup.Text>
                        </InputGroup>

                        <br />
                        <br />
                        <br />
                        <InputGroup className="mb-3">
                            <InputGroup.Text>Amount</InputGroup.Text>
                            <Form.Control aria-label="Amount (to the nearest dollar)" />
                            <InputGroup.Text>DOGE</InputGroup.Text>
                        </InputGroup>

                        <Button variant="success" size="lg" className="w-100 me-1">LOGIN</Button>

                    </Tab>

                </Tabs>
            </div>
        </div>
    )
}
export default SpotOrders;