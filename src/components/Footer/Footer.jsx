import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const Footer = () => {
    return (
      <Navbar
        className="mt-5"
        expand="lg"
        variant="light"
        bg="light"
        style={{position:"fixed", bottom: "0", width: "100%" }}
      >
        <Container>
          <h6>Copyrights © 2023 Cuisine Chronicles.</h6>
          <small>
            {" "}
            All Rights Reserved. Created by Atoshi Chowdhury. Privacy Policy |
            Terms of Use | Contact Us
          </small>
        </Container>
      </Navbar>
    );
};

export default Footer;