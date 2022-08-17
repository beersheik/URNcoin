import React, { useState } from "react";
import { Button, Col, Container, Dropdown, DropdownButton, InputGroup, Row } from 'react-bootstrap';
import transfer from "../assets/p2p/transfer.png";
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

function P2P(props) {

    var peerTypes = [
        'BTC',
        'BNB',
        'USDT',
        'ETH',
        'SHIP',
        'ADA',
        'UNS',
        'TRX'
    ];

    const [selectedPeer, selectPeerType] = useState(peerTypes[0]);

    return (
        <div>
            <Header></Header>
            <section className="p2p-container">
                <section className="mt-3">
                    <Container>

                        <h3 className="pt-3 mb-3">
                            <b>Peer-to-peer</b>
                        </h3>
                        <div className="p2p-card p-4">
                            <Row>
                                <Col lg={6}>
                                    <div className="row">
                                        <div className="col mb-4">
                                            <h4 className="clr-primary">
                                                <b>Estimated P2P Balance</b>
                                            </h4>
                                            <hr />
                                            <h5>
                                                Total USDT Balance
                                            </h5>
                                            <h3 className="clr-primary">
                                                0.00000000
                                            </h3>
                                        </div>
                                        <div className="col-auto d-none d-md-block">
                                            <img src={transfer} alt="" />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={6}>
                                    <div className="text-align-center">
                                        <h4 className="clr-primary">
                                            UNS Exchange P2P BUY/SELL YOUR CRYPTO LOCALLY
                                        </h4>
                                        <p>
                                            Peer-to-peer exchange (or P2P exchange) is a marketplace where people can trade crypto directly with each other on their own terms, in virtually any country.
                                        </p>
                                        <Button className="custom-btn-primary">
                                            Post new Order
                                        </Button> <br />
                                        <Button className="custom-btn-primary">
                                            My Orders
                                        </Button>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </section>

                <section className="mt-3">
                    <Container>
                        <div className="p2p-card">
                            <div className="border-bottom">
                                <div className="px-3 d-flex overflow-x-auto">
                                    {peerTypes.map((peer, index) => {
                                        return (
                                            <div className={`peer ${selectedPeer === peer ? 'active' : ''}`} onClick={() => selectPeerType(peer)}>{peer}</div>
                                        )
                                    })}
                                </div>
                            </div>

                            <div className="py-2 px-2 px-lg-5">
                                <div className="row search-peer-record">
                                    <div className="col-12 col-lg-auto">
                                        <InputGroup className="p2p-input-group1 mb-3 mb-lg-1">
                                            <InputGroup.Text>Enter Amount</InputGroup.Text>
                                            {/* <FormControl aria-label="Text input with dropdown button" /> */}
                                            <input type="number" />

                                            <DropdownButton
                                                variant="outline-secondary"
                                                // title="Dropdown"
                                                id="input-group-dropdown-2"
                                                align="end"
                                            >
                                                <Dropdown.Item href="#">Action</Dropdown.Item>
                                                <Dropdown.Item href="#">Another action</Dropdown.Item>
                                                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                                                <Dropdown.Item href="#">Separated link</Dropdown.Item>
                                            </DropdownButton>
                                        </InputGroup>
                                    </div>
                                    <div className="col-12 col-lg">
                                        <InputGroup className="p2p-input-group2 justify-content-start justify-content-lg-around">
                                            <InputGroup.Text>Payments</InputGroup.Text>
                                            {/* <input type="text" /> */}
                                            <DropdownButton
                                                variant="outline-secondary"
                                                // title="Dropdown"
                                                id="input-group-dropdown-2"
                                                align="end"
                                            >
                                                <Dropdown.Item href="#">All</Dropdown.Item>
                                                <Dropdown.Item href="#">Bank</Dropdown.Item>
                                                <Dropdown.Item href="#">UPI</Dropdown.Item>
                                                <Dropdown.Item href="#">Gpay</Dropdown.Item>
                                            </DropdownButton>
                                            <Button className="custom-btn-primary mt-0">
                                                Search
                                            </Button>
                                        </InputGroup>

                                    </div>
                                    <div className="col-auto">
                                        <a className="clr-primary" href="/">
                                            REFRESH
                                        </a>
                                    </div>
                                </div>

                                <div className="my-3 row justify-content-between text-align-center">
                                    <div className="col-12 col-lg">
                                        <div className="mb-3 mb-lg-0 border-right">
                                            <label className="mb-3 clr-primary"><b>Buy</b></label><br />
                                            <div>
                                                Oops No Result Found
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg">
                                        <label className="mb-3 clr-danger"><b>Sell</b></label>

                                        <div>
                                            Oops No Result Found
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default P2P;
