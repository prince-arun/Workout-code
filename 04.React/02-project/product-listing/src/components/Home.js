import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import imageOne from "../assets/e-commerce-1.jpg";
import imageTwo from "../assets/e-commerce-2.jpg";
import imageThree from "../assets/e-commerce-3.png";
import imageFour from "../assets/e-commerce-4.jfif";
import eLogo from "../assets/ecommerce-logo.png";
import Card from "react-bootstrap/Card";
import { auth } from "../config/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

const Home = () => {
  // Bootstrap Model function---------------------------------

  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }
  // ---------------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const id = userCredential.user.uid;
          console.log(id);
          alert("user registered Successfully");
          navigate("/logIn");
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  //   ---------------------------------------------------------
  return (
    <div className="home">
      {/* ------------------------Nav Bar------------------------------------- */}
      <Navbar className=" navbar">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar with text</Navbar.Brand> */}
          <img src={eLogo} alt="ecommerce logo" className="logo" />
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            {values.map((v, idx) => (
              <Button
                key={idx}
                className="me-2 mb-2 px-4"
                onClick={() => handleShow(v)}
              >
                Sign Up
                {typeof v === "string" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
            <Modal
              show={show}
              //   fullscreen={fullscreen}
              onHide={() => setShow(false)}
              className="model"
            >
              <Card className="bg-secondary">
                <Modal.Header closeButton>
                  <Modal.Title>Registration</Modal.Title>
                </Modal.Header>
              </Card>
              <Card className="bg-light">
                <Modal.Body className="model">
                  {/* ---------------Registration form------------------ */}

                  <Form>
                    {/* ----------First Name------------- */}
                    <Row className="mb-3">
                      <Form.Group as={Col}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter First Name"
                        />
                      </Form.Group>
                      {/* ----------Last Name------------- */}
                      <Form.Group as={Col}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Last Name"
                        />
                      </Form.Group>
                    </Row>

                    {/* ----------Email---------------------- */}
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </Form.Group>

                      {/* ----------Password----------------------------- */}
                      <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </Form.Group>
                    </Row>

                    {/* -----------Gender-------------------- */}
                    <fieldset>
                      <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                          Gender
                        </Form.Label>
                        <Col sm={10}>
                          <Form.Check
                            type="radio"
                            label="Male"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios1"
                          />
                          <Form.Check
                            type="radio"
                            label="Female"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios2"
                          />
                          <Form.Check
                            type="radio"
                            label="Others"
                            name="formHorizontalRadios"
                            id="formHorizontalRadios3"
                          />
                        </Col>
                      </Form.Group>
                    </fieldset>

                    {/* -------------State------------------- */}
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>Country</Form.Label>
                        <Form.Select defaultValue="Choose...">
                          <option>Choose...</option>
                          <option value="Afghanistan">Afghanistan</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="China">China</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Japan">Japan</option>
                          <option value="Malaysia">Malaysia</option>
                          <option value="Pakistan">Pakistan</option>
                          <option value="Philippines">Philippines</option>
                          <option value="South Korea">South Korea</option>
                        </Form.Select>
                      </Form.Group>

                      {/* --------------Zip code----------------- */}
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                      <Form.Check
                        type="checkbox"
                        label="I Agree The Terms & Conditions"
                      />
                    </Form.Group>

                    <Button
                      variant="primary"
                      type="submit"
                      className="px-5"
                      onClick={handleSave}
                    >
                      Sign Up
                    </Button>

                    <Form.Label className="ms-5">
                      Already Have an Account ?<Link to={"/logIn"}>Log in</Link>{" "}
                    </Form.Label>
                  </Form>

                  {/* ----------------------------------------------------- */}
                </Modal.Body>
              </Card>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ------------------------Carousal----------------------------------- */}
      <Carousel className="position-fixed">
        <Carousel.Item>
          <img className="d-block w-100  " src={imageOne} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageTwo} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageThree} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={imageFour} alt="Fourth slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
