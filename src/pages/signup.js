import axios from "axios";
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
// import Web3 from "web3";
// import logo from "../assets/header-logo.png";
// import { BASE_URL } from './config';
// import { browserHistory } from "react-router";
import { Card, Col, Container, Row, Button, Dropdown, DropdownButton, FormControl } from 'react-bootstrap';
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';

function Signup(props) {
    // let history = useHistory();

    return (
        <div className="">
            <Header></Header>
            <section className="login-container mb-3">
                {/* <Container>
                    Signup
                </Container> */}
                <Container>
                    <Row>
                        <Col lg={6} className="my-4 m-auto">
                            <Card className="login-card p-5">
                                <h2 className="clr-primary text-align-center"><b> Sign Up</b></h2>

                                <div class="form-group mb-3">
                                    <label for="exampleInputEmail1">Email address</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                    {/* <small id="emailHelp" class ="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                </div>
                                <div class="form-group mb-3">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </div>

                                <div class="form-group mb-3">
                                    <label for="exampleInputPassword2">Confirm Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" />
                                </div>
                                <div class="form-check mb-3">
                                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                    <label class="form-check-label" for="exampleCheck1">I accept and agree to the <span className="clr-primary">Terms & Conditions</span></label>
                                </div>

                                <Button className="custom-btn-primary btn-lg btn-block mb-3">
                                    Submit
                                </Button>
                                {/* <a className="text-align-center clr-primary mb-3" href="/">Forgot password?</a> */}
                                <div className="text-align-center">Already have an account? <span className="clr-primary">Log In</span></div>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default Signup;