import { useState } from "react";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Offcanvas
} from "react-bootstrap";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import logo from "../../assets/header-logo.png";

function Header(props) {
  const [isShow, setShow] = useState(false);

  const AuthButton = () => {
    // if (!isAuthenticated) {
    return (
      <div className="non-auth-menu">
        <Link to="/login">
          <Button className="custom-btn-primary me-1">Login</Button>
        </Link>
        <Link to="/signup">
          <Button className="custom-btn-primary me-3">
            Sign Up
          </Button>
        </Link>
      </div>
    );
  };

  return (
    <div className="header-wrapper">
      <Navbar className="d-none d-lg-block" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <Image src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link href="/spot">SPOT</Nav.Link>
              <Nav.Link href="/p2p">P2P</Nav.Link>
              <Nav.Link href="/faq">FAQ</Nav.Link>
            </Nav>
            {AuthButton()}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Navbar className="d-block d-lg-none" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Image src={logo} />
          </Navbar.Brand>
          {/* {AuthButton()} */}

          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            onClick={() => setShow(true)}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
            show={isShow}
            onHide={() => setShow(false)}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <div className="mb-2">
                <Link className="mb-4" to="/spot">
                  SPOT
                </Link>
                <br />
              </div>
              <div className="mb-2">
                <Link className="mb-4" to="/p2p">
                  P2P
                </Link>
                <br />
              </div>
              <div className="mb-2">
                <Link className="mb-4" to="/faq">
                  FAQ
                </Link>
                <br />
              </div>
              <div className="mb-2">
                {AuthButton()}
              </div>

              {/* {!isAuthenticated ? (
                                <>
                                    <div className="mb-2">
                                        <Link to="/login">Login</Link>
                                    </div>
                                    <div className="mb-2">
                                        <Link to="/login">
                                            Signup as creator
                                        </Link>
                                    </div>
                                </>
                            ) : (
                                <div className="mb-2">
                                    <Link to="#">Logout</Link>
                                </div>
                            )} */}
              {/* <div
                                className="mb-2 "
                                onClick={() => toggleSearch()}
                            >
                                <Link to="#">Search</Link>
                            </div> */}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* {isSearch && (
                <InputGroup className="search-input-group mb-3">
                    <FormControl
                        placeholder="Search Here..."
                        className="search-input customInputField"
                    />
                    <InputGroup.Text className="primary-btn search-input-btn">
                        Search
                    </InputGroup.Text>
                </InputGroup>
            )} */}


      {/* <Modal size="lg"
        show={props.showAppoint} onHide={handleCloseAppointment}>
        <Modal.Header closeButton>
          <Modal.Title>Fix Appointment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FixAppointment />
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    // showAppoint: state.common.showAppoint
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // showAppointment: (obj) => dispatch(actions.showAppointment()),
    // hideAppointment: (obj) => dispatch(actions.hideAppointment())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Header);
