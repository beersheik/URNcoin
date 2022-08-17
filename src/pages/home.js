import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import feature1 from "../assets/home/features/1.png";
import feature2 from "../assets/home/features/2.png";
import feature3 from "../assets/home/features/3.png";
import feature4 from "../assets/home/features/4.png";
import banner1 from "../assets/home/banner-section1.png";
import Footer from '../components/layouts/Footer';
import Header from '../components/layouts/Header';
import NFTDroptown from '../components/common/NFT-Droptown';


function Home(props) {
  const [loader, setLoader] = useState(false);
  const [selected, setSelected] = useState('');

  useEffect(() => {
    setTimeout(() => {
      document.getElementsByClassName('loader-container')[0].style.visibility = 'hidden';
    }, 500);
  }, []);

  const changeSelection = (data) => {
    setSelected(data.amount);
  }

  var features = [
    {
      icon: feature1,
      title: "20+ Top Crypto Currency Buying, Selling & Holding Using INR",
      description: "UN$ has come out with top 20 Crypto Currencies along with its UN$ BEP20 token to offer best of the best trading experience to its customers. And list of the best Crypto Currencies will be ever growing in the days to come."
    },
    {
      icon: feature2,
      title: "Instant Trade With INR",
      description: "Instant Trade is in place. You can trade with confidence. UN$ Team is continuously striving to be the world’s fastest and most secure crypto trading platform."
    },
    {
      icon: feature3,
      title: "Secured Escrow Service",
      description: "SES is in place to provide extraordinary security against all kinds of threats across. You can play in the interface with super-trust."
    },
    {
      icon: feature4,
      title: "Free Hot Wallet Where You Can Trade With INR",
      description: "Hot wallets are applications connected to the internet and the cryptocurrency infrastructure, which allows you to use them. All hot wallets provided across aren’t safe and secure. But at UN$, we offer FREE HOT WALLET by ensuring you great security for your assets with that extra layer security wall. Manage your assets confidently"
    },
    {
      icon: feature1,
      title: "Worldwide Service",
      description: "UN$ offers its services across the globe by being the best possible crypto exchange with ultimate level security and safety assured to its customers."
    }
  ];

  return (
    <div>
      <div className="loader-container" >
        <div className="loader" ></div>
      </div>
      <div>
        <div className="home-wrapper">
          <Header></Header>
          <div className="home-banner">
            <Container>
              <Row className="mt-5">
                <Col xs="auto" lg={5}>
                  <h1>Begin Your Crypto Journey NOW</h1>
                  <p>India's most trusted crypto exchange with High end Secure Technical Features at UN$</p>
                  <div className="banner-calculator">
                    {/* <div className="row">
                      <div className="col"> */}
                    <div className="banner-calculator-eq mb-3">
                      {/* <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                      </DropdownButton> */}
                      <NFTDroptown placeholder="Select Value" value={selected} change={(data) => changeSelection(data)} />
                      <div className="label-banner"> = </div>
                      <label className="label-banner"> 3200 USDT </label>
                    </div>
                    <div className="banner-calculator-process">
                      <div className="row align-items-center">
                        <div className="col-sm-6 col-lg-12 col-xxl-6">
                          <input className="w-75" type="number" placeholder="Enter Quantity"></input>
                          <span className="label-banner">ETH</span>
                        </div>
                        <div className="mt-sm-0 mt-3 mt-lg-3 mt-xxl-0 col-sm-6 col-lg-12 col-xxl-6">
                          <Button variant="primary" className="me-1">BUY</Button>
                          <Button variant="danger" className="me-1">SELL</Button>
                          <Button variant="warning" className="me-1">TRADE</Button>
                        </div>
                      </div>
                    </div>
                    {/* </div>
                    </div> */}
                  </div>
                </Col>
                <Col xs={12} lg={7} className="d-none d-lg-block home-banner-image">
                  <img src={banner1} alt="error" />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
        <section className="home-banner2 py-3">
          <Container className="py-5">
            <div className="home-banner2-body">
              <Row className="m-auto">
                <Col lg={6} className="align-self-center">
                  <h3 >Trade Easy With INR</h3>
                  <p>
                    Perfect place to buy, sell, and manage your cryptocurrency portfolio.
                    Determine Your Appropriate Asset Allocation, Achieve the Portfolio, Reassess Portfolio Weightings and Rebalance Strategically.                </p>
                </Col>
                <Col lg={6}>
                  <div className="home-banner2-img"></div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>

        <section className="home-banner3 py-3">
          <Container className="py-5">
            <div className="text-center">
              <h2 className="main-title">Features</h2>
            </div>
            {
              features.map((res, index) => {
                return (
                  <div className="home-banner3-feature-card row">
                    <div className="col">
                      <h3>
                        {res.title}
                      </h3>
                      <p>
                        {res.description}
                        {window['feature1']}

                      </p>
                    </div>
                    <div className="col-auto">
                      <img src={res.icon} alt="empty" />
                    </div>
                  </div>
                )
              }
              )
            }
          </Container>
        </section>

        <section className="home-banner4 py-3">
          <Container className="py-5">
            <div className="text-center">
              <h2 className="main-title">Peer-to-Peer Trading Very Easy</h2>
            </div>
            <Row className="m-auto">
              <Col lg={4}>
                <div className="home-banner4-img"></div>
              </Col>
              <Col lg={8} className="align-self-center">
                {
                  [1, 2, 3, 4].map((res, index) => {
                    return (
                      <div className="home-banner4-card row">
                        <div className="col-auto count">
                          {index + 1}.
                        </div>
                        <div className="col">
                          <h4>
                            CREATE AN ACCOUNT
                          </h4>
                          <p>
                            Create an Account with accurate information given to see that you give complete picture to the Exchange. Because, it’ll help the Exchange to deliver impeccable services to you.</p>
                        </div>

                      </div>
                    )
                  }
                  )
                }
              </Col>
            </Row>
          </Container>
        </section>

        <section className="home-banner5 py-3">
          <Container className="py-5">
            <div className="home-banner5-body">
              <Row className="m-auto">
                <Col lg={4}>
                  <div className="home-banner5-img"></div>
                </Col>
                <Col lg={8} className="align-self-center">
                  <h2 className="main-title">Take Control Today</h2>
                  <p>
                    It’s NOW or NEVER.There’s always something called FIRST MOVER ADVANTAGE. This is FMA when it comes to earning very smartly in CRYPTO PLATFORM.
                  </p>

                  <Button className="custom-btn-primary">
                    Start Earning Today
                  </Button>
                </Col>

              </Row>
            </div>
          </Container>
        </section>


        <Footer></Footer>
      </div>
    </div>
  )
}

// export default connect( mapDispatchToProps)(Home);
export default Home;
