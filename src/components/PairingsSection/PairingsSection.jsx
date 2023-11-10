import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const pairingsData = [
  {
    dish: "Grilled Salmon",
    drink: "Chardonnay",
  },
  {
    dish: "Margherita Pizza",
    drink: "Pinot Noir",
  },
  {
    dish: "Spicy Tacos",
    drink: "Margarita",
  },

  {
    dish: "Pasta",
    drink: "Cabernet",
  },
];

const PairingsSection = () => {
  return (
    <div style={{ marginBottom: "70px" }}>
      <h2
        style={{ textAlign: "center", marginTop: "70px", marginBottom: "20px" }}
      >
        Food and Drink Pairings
      </h2>
      <Row>
        {pairingsData.map((pairing, index) => (
          <Col key={index} sm={6} md={4} lg={3}>
            <Card style={cardStyle}>
              <Card.Body>
                <Card.Title>{pairing.dish}</Card.Title>
                <Card.Text>Complementary Drink: {pairing.drink}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

const cardStyle = {
  margin: "10px",
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
};

export default PairingsSection;
