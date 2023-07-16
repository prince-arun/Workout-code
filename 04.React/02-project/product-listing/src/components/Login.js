import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/Config";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredentials) => {
          const id = userCredentials.user.uid;
          console.log(id);
          alert("You are Logged in successfully");
          navigate("/homePage");
        }
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="login d-flex justify-content-center ">
      <Card className="w-50 border-3 border-light mt-5 shadow-lg bg-body rounded">
        <h1 className="text-center">
          {" "}
          <Badge bg="secondary">Log In</Badge>
        </h1>
        <Card.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="px-5"
              onClick={handleLogin}
            >
              Submit
            </Button>
            <Form.Label className="ms-5">
              Don't Have an Account ?<Link to={"/"}>Register</Link>{" "}
            </Form.Label>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
