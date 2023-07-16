import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import eLogo from "../assets/ecommerce-logo.png";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { BsCartCheck } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <img src={eLogo} alt="logo" className="logo ms-3" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Form className="d-flex ms-5">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Nav>
            <DropdownButton
              key={"start"}
              title={
                <>
                  <BsCartCheck size="2rem" />
                  <Badge bg="warning" size="1rem">
                    9
                  </Badge>
                </>
              }
              drop={"start"}
              variant="secondary"
            >
              {" "}
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
            </DropdownButton>
            <Link to={"/"}>
              <Button variant="outline-danger" className="ms-5 me-1">
                Sign Out
              </Button>
            </Link>{" "}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
