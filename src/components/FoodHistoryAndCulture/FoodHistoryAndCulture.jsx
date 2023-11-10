import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FoodHistoryAndCulture = () => {
  const articles = [
    {
      title: "The Origins of Sushi",
      content:
        "Sushi has a long history in Japan, dating back to the 8th century. It was originally a way to preserve fish...",
      imageUrl:
        "https://images.unsplash.com/photo-1553174771-28f808b1c819?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2QlMjBoaXN0b3J5fGVufDB8fDB8fHww",
    },
    {
      title: "The Spices of India",
      content:
        "Indian cuisine is known for its rich and diverse use of spices. Each spice has a unique history and cultural significance...",
      imageUrl:
        "https://images.unsplash.com/photo-1609758008426-1635fe5210b2?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZvb2QlMjBoaXN0b3J5fGVufDB8fDB8fHww",
    },
    {
      title: "The History of Chocolate",
      content:
        "Chocolate has been around for thousands of years, but it wasn't until the 19th century that it became popular in Europe...",
      imageUrl:
        "https://images.unsplash.com/photo-1553174798-75cbea6e758e?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGZvb2QlMjBoaXN0b3J5fGVufDB8fDB8fHww",
    },
  ];

  return (
    <section style={{ backgroundColor: "#f5f5f5", padding: "40px 0" }}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
          Food History and Culture
        </h2>
        <Row>
          {articles.map((article, index) => (
            <Col
              key={index}
              lg={4}
              md={6}
              sm={12}
              style={{ marginBottom: "30px" }}
            >
              <Card style={cardStyle}>
                <Card.Img variant="top" src={article.imageUrl} />
                <Card.Body>
                  <Card.Title>{article.title}</Card.Title>
                  <Card.Text>{article.content}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const cardStyle = {
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  transition: "0.3s",
};
export default FoodHistoryAndCulture;
