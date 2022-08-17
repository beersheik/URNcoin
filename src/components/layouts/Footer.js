import React from "react";
import { Button, Col, Container, InputGroup, Row } from 'react-bootstrap';
import footerLogo from "../../assets/footer-logo.png";
import instagram from "../../assets/footer/instagram.png";
import twitter from "../../assets/footer/twitter.png";
import youtube from "../../assets/footer/youtube.png";

// instagram

function Footer() {
  return (
    <div className="footer-wrapper">
      <Container>
        <Row className="align-items-baseline">
          <Col md={3} lg={'auto'}>
            <img className="mb-3" src={footerLogo} alt="logo"></img>
            <br></br>
          </Col>
          <Col md={9} lg={5}>
            <Row>
              <Col>
                <ul>
                  <li className="clr-primary">Platform</li>
                  <li>Exchange</li>
                  <li>P2P</li>
                  <li>Crypto Wallets</li>
                </ul>
              </Col>
              <Col>
                <ul>
                  <li className="clr-primary">Help</li>
                  <li>About Us</li>
                  <li>Refund Policy</li>
                  <li>Privacy Policy</li>
                  <li>FAQ</li>
                  <li>Terms & Conditions</li>
                  <li>Fees</li>
                  <li>Contact Us</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col className="social flex-shrink-0" lg={4}>
            <p>
              Get the latest news and updates
            </p>
            <InputGroup className="btn-grp-footer mb-3">
              <input type="email" placeholder="Email Address" />
              <Button variant="outline-secondary" id="button-addon2">
                SUBMIT
              </Button>
            </InputGroup>
            <div className="social-link">
              <ul>
                <li>
                  <a href="/">
                    <i className="fa fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-facebook-official" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="my-2 p-3 mb-0">
        <hr />
        <div className="d-flex justify-content-center">
          © Copyright 2022 by UNS Exchange. All rights reserved.
        </div>
      </Container>
    </div>
  )
}

export default Footer;
