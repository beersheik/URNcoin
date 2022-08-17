import React, { useEffect, useState } from "react";
import Footer from '../../components/layouts/Footer';
import Header from '../../components/layouts/Header';
import { Button, Col, Container, Row, InputGroup, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import SpotOrders from "./spot-place-order";
import SpotHistory from "./spot-history";
import SpotBook from "./spot-book";
import SpotTrade from "./spot-trade"
import NFTDroptown from '../../components/common/NFT-Droptown';
import SpotChart from './spot-chart';
import { getData } from "./utill";
import { TypeChooser } from "react-stockcharts/lib/helper";

function Spot(props) {
    const [selected, setSelected] = useState('');

    const [data, setData] = useState(getData);


    const changeSelection = (data) => {
        setSelected(data.amount);
    }

    return (
        <div>
            <Header></Header>
            <section className="spot-container py-3">
                <Container fluid>
                    <Row>
                        <Col lg={9}>
                            <div className="spot-header">
                                <div className="spot-header-select">

                                    <NFTDroptown placeholder="Select Value" value={selected} change={(data) => changeSelection(data)} />

                                    <label className="ms-2 label-banner"> 3200 </label>
                                </div>
                                <div className="spot-header-details">
                                    <h6>
                                        <small>24h Change</small><br />
                                        <span className="clr-green">0.00 (1.76%)</span>
                                    </h6>
                                    <h6>
                                        <small>24h High</small><br />
                                        <span>0.00</span>
                                    </h6>
                                    <h6>
                                        <small>24h Low</small><br />
                                        <span>0.00</span>
                                    </h6>
                                    <h6>
                                        <small>24h Vol(DOGE)</small><br />
                                        <span>0.00</span>
                                    </h6>
                                    <h6>
                                        <small>24h Vol(USDT)</small><br />
                                        <span>0.00</span>
                                    </h6>
                                </div>
                            </div>

                            <Row>
                                <Col lg={8}>
                                    <div className="spot-box-container my-2">
                                        <SpotChart data={data} />
                                    </div>
                                </Col>
                                <Col lg={4} className="ps-md-1">
                                    <SpotBook />
                                </Col>
                                <Col lg={8} className="pb-2">
                                    <SpotHistory />
                                </Col>
                                <Col lg={4} className="pb-2 ps-md-1">
                                    <SpotTrade />
                                </Col>
                            </Row>

                        </Col>
                        <Col lg={3} className="ps-md-1 mb-2">
                            <SpotOrders></SpotOrders>
                        </Col>
                    </Row>
                </Container>
            </section>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Spot;