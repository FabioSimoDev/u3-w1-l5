import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./mockup/assets/logo.png";
import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

const MyNav = function () {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark mynav" data-bs-theme="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt="logo" width={"100px"} height={"55px"}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent"></Navbar.Toggle>
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Link href="#" className="fw-bold" active>
                Home
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                TV Shows
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Movies
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                Recently Added
              </Nav.Link>
              <Nav.Link href="#" className="fw-bold">
                My List
              </Nav.Link>
            </Nav>
            <div className="d-flex align-items-center">
              <Search className="icons" />
              <div id="kids" className="fw-bold">
                KIDS
              </div>
              <Bell className="icons" />
              <PersonCircle className="icons" />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNav;
