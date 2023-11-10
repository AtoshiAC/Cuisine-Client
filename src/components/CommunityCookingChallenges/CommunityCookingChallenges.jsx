import React from "react";
import { Button, Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CommunityCookingChallenges = () => {
  const challengeData = [
    {
      theme: "Pasta Night",
      winners: [
        {
          name: "John Doe",
          recipe: "Spaghetti Carbonara",
          image:
            "https://plus.unsplash.com/premium_photo-1661349726691-d5efab008d77?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "Maria Rodriguez",
          recipe: "Linguine with Pesto",
          image:
            "https://plus.unsplash.com/premium_photo-1661632566421-11c4328f03ea?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
        },
      ],
    },

    {
      theme: "Burger Bash",
      winners: [
        {
          name: "Lee",
          recipe: "Bacon Cheeseburger",
          image:
            "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
          name: "David Kim",
          recipe: "Mushroom Swiss Burger",
          image:
            "https://plus.unsplash.com/premium_photo-1664475794584-183f7e66ff4a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlZnxlbnwwfHwwfHx8MA%3D%3D",
        },
      ],
    },

    {
      theme: "Pizza Party",
      winners: [
        {
          name: "Rachel Chen",
          recipe: "Pepperoni Pizza",
          image:
            "https://plus.unsplash.com/premium_photo-1661778032392-28cecebb8059?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
        },
        {
          name: "Jane Smith",
          recipe: "Margherita Pizza",
          image:
            "https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNoZWZ8ZW58MHx8MHx8fDA%3D",
        },
      ],
    },
  ];

  return (
    <section style={sectionStyle}>
      <Container>
        <h2 style={headerStyle}>Community Cooking Challenges</h2>
        <p style={descriptionStyle}>
          Join our monthly cooking challenge and showcase your culinary skills!
          Each month, we announce a new theme, and you can submit your best
          recipe to participate.
        </p>
        <Button variant="primary" style={buttonStyle}>
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="https://www.sdgfund.org/sustainablecooking"
          >
            Participate Now
          </Link>
        </Button>
        {challengeData.map((challenge, index) => (
          <div key={index} style={challengeStyle}>
            <h3>{challenge.theme}</h3>
            <Row>
              {challenge.winners.map((winner, winnerIndex) => (
                <Col key={winnerIndex}>
                  <Card style={cardStyle}>
                    <Card.Img
                      style={cardImgStyle}
                      src={winner.image}
                      alt={winner.name}
                    />
                    <Card.Body>
                      <Card.Title>{winner.name}</Card.Title>
                      <Card.Text>{winner.recipe}</Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        ))}
      </Container>
    </section>
  );
};

const sectionStyle = {
  background: "#f7f7f7",
  padding: "40px 0",
};

const headerStyle = {
  textAlign: "center",
  marginBottom: "20px",
};

const descriptionStyle = {
  textAlign: "center",
};

const buttonStyle = {
  display: "block",
  margin: "20px auto",
};

const challengeStyle = {
  marginTop: "40px",
};

const cardStyle = {
  marginBottom: "20px",
};

const cardImgStyle = {
  height: "300px",
  objectFit: "cover",
};

export default CommunityCookingChallenges;
