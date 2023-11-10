import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <Container>
      <h2 className="fs-2" style={{ fontSize: "50px" }}>
        Terms & Conditions
      </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
        sapiente facere nihil at optio eveniet inventore nostrum dolor libero
        ipsa, magni blanditiis voluptatem cum facilis deserunt iure officiis hic
        aspernatur!
      </p>
      <p className="text-dtcn">
        Go back to{" "}
        <Link to="/register">
          <button
            style={{ border: "transparent" }}
          >
            Register
          </button>
        </Link>
      </p>
    </Container>
  );
};

export default Terms;
