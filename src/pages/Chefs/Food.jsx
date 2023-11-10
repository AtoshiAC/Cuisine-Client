import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button, Card, Container } from "react-bootstrap";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  FaHeart
} from "react-icons/fa";
const Food = ({ categoryChef }) => {

    const {name, img, ingredients,total_rating,short_description} = categoryChef;

     const [disabled, setDisabled] = useState(false);
     const handleClick = () => {
       toast.success("Added to Favourites!");
       setDisabled(true);
       // perform other actions if needed
     };

  return (
    <Container>
      <Row xs={1} md={2} lg={3} className="g-4 mt-5">
        {Array.from({ length: 3 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Img variant="top" src={img} />
              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  <span className="me-2">Made With</span>
                  <span className="me-2">|</span>
                  <small>{ingredients}</small>
                </Card.Subtitle>
                <Card.Text className="text-muted">
                  {short_description}
                </Card.Text>
                <div className="text-muted d-flex">
                  <Rating
                    style={{ maxWidth: 120, marginRight: "220px" }}
                    value={total_rating}
                    readOnly
                  />
                  <Button
                    style={{
                      backgroundColor: "rgba(0,0,0,0.4)",
                      border: "none",
                    }}
                    disabled={disabled}
                    onClick={handleClick}
                  >
                    <FaHeart />
                    <ToastContainer />
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Food;