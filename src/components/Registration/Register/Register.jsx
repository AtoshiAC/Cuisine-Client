import React, { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Register = () => {

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //validation for the form
  const [validated, setValidated] = useState(false);
  //authenticating the user
  const { createUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);



  const handleRegister = (event) => {
    
    //validation for the form
    const field = event.currentTarget;
    if (field.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    //authenticating the user
    event.preventDefault();
    setSuccess("");
    setError("");
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password, name, photoURL);
    if (!/(?=.*[a-z]).{8,}/.test(password)){
      setError(
        "Must contain at least one number and lowercase letter, and at least 8 or more characters"
      );
      return;
    }
      createUser(email, password)
        .then((userCredential) => {
          const createdUser = userCredential.user;
          console.log(createdUser);
          setError("");
          form.reset();
          setSuccess("Account created successfully!");
        })
        .catch((error) => {
          console.error(error.message);
          setError(error.message);
        });
  };

  // check box for terms and conditions
const [accepted, setAccepted] = useState(false);
const handleAccepted = (event) => {
  setAccepted(event.target.checked);
};

  return (
    <Container className="w-100 mx-auto mt-5 pt-5 mb-5">
      <h3>Please Register</h3>
      <Form noValidate validated={validated} onSubmit={handleRegister}>
        <Col className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label className="fs-5">Name</Form.Label>
            <Form.Control
              required
              name="name"
              type="text"
              placeholder="Enter your full name"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label className="fs-5">Photo URL</Form.Label>
            <Form.Control
              required
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label className="fs-5">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback className="text-muted">
              looks valid!
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicPassword">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback>Strength good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Form.Group className="mb-3">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Terms and Conditions</Link>{" "}
              </>
            }
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <p className="text-danger">{error}</p>
        <p className="text-success">{success}</p>
        <Button className="w-25" type="submit" disabled={!accepted}>
          Register
        </Button>
        <hr className="w-25" />
        <Button
          onClick={signInWithGoogle}
          className="w-25"
          style={{ backgroundColor: "gray", border: "none" }}
          type="submit"
          disabled={!accepted}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          >
            <FaGoogle /> Sign up with Google
          </Link>
        </Button>
        <br />
        <Button
          onClick={signInWithGithub}
          className="w-25 mt-3"
          style={{ backgroundColor: "gray", border: "none" }}
          type="submit"
          disabled={!accepted}
        >
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          >
            <FaGithub /> Sign up with Github
          </Link>
        </Button>
      </Form>
      <small className="d-block mt-3">
        Already have an account? <Link to="/login">Login</Link>
      </small>
    </Container>
  );
};

export default Register;
