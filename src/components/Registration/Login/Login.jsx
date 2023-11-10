import React, { useContext, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Login = () => {

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const emailRef = useRef();


    //validation for the form
  const [validated, setValidated] = useState(false);
    //authenticating the user
  const { signIn, signInWithGoogle, signInWithGithub, resetPassword } =
    useContext(AuthContext);


  const handleLogin = (event) => {
    
    //validation for the form
    const field = event.currentTarget;
    if (field.checkValidity() === false) {
        event.stopPropagation();
    }
    setValidated(true);
    //authenticating the user
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    setError("");
    setSuccess("");
    if (!/(?=.*[a-z]).{8,}/.test(password)) {
      setError(
        "Must contain at least one number and lowercase letter, and at least 8 or more characters"
      );
      return;
    }
    signIn(email, password)
    .then((userCredential) => {
        const loggedInUser = userCredential.user;
        console.log(loggedInUser);
        setError("");
        setSuccess("Logged in successfully!");
        form.reset();
    })
    .catch((error) => {
        console.log(error);
        setError(error.message);
    });
    };

    const handleResetPassword = (event) => {
        const email = emailRef.current.value;
        console.log(email);
        if(!email){
            setError("Please enter your email address to reset your password");
        }
        resetPassword(email)
        .then(() => {
            setError("");
            setSuccess("Please check your email for further instructions");
        })
        .catch((error) => {
            console.log(error);
            setError(error.message);
        });
    };

  return (
    <Container className="w-100 mx-auto mt-5 pt-5 mb-5">
      <h3>Please Login</h3>
      <Form noValidate validated={validated} onSubmit={handleLogin}>
        <Col className="mb-3">
          <Form.Group as={Col} md="4" controlId="formBasicEmail">
            <Form.Label className="fs-5">Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter email"
              required
            />
            <Form.Control.Feedback>looks valid!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="formBasicPassword">
            <Form.Label className="fs-5">Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <Form.Control.Feedback>strength good!</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <p><small>Forgot Password? Please <button onClick={handleResetPassword} className="btn btn-link">Reset Password</button></small></p>
        <Button className="w-25" type="submit">
          Login
        </Button>
        <br />
        <small className="text-danger">{error}</small>
        <small className="text-success">{success}</small>
        <hr />
        <Button
          onClick={signInWithGoogle}
          className="w-25"
          style={{ backgroundColor: "gray", border: "none" }}
          type="submit"
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
        >
          <Link
            to="/"
            style={{ textDecoration: "none", fontSize: "20px", color: "white" }}
          >
            <FaGithub /> Sign up with Github
          </Link>
        </Button>
        <small className="d-block mt-3">
          Don't have an account? <Link to="/register">Register</Link>
        </small>
      </Form>
    </Container>
  );
};

export default Login;
