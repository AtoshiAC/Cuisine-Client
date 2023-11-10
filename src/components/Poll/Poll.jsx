import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Poll = () => {
  const [italianVotes, setItalianVotes] = useState(0);
  const [japaneseVotes, setJapaneseVotes] = useState(0);

  const handleVote = (option) => {
    if (option === "Italian") {
      setItalianVotes(italianVotes + 1);
    } else if (option === "Japanese") {
      setJapaneseVotes(japaneseVotes + 1);
    }
  };

  return (
    <Container
      style={{ marginTop: "70px", marginBottom: "50px", textAlign: "center" }}
    >
      <h2>Food Preference Poll</h2>
      <Row>
        <Col>
          <h3>Italian</h3>
          <Button variant="primary" onClick={() => handleVote("Italian")}>
            Vote for Italian
          </Button>
        </Col>
        <Col>
          <h3>Japanese</h3>
          <Button variant="primary" onClick={() => handleVote("Japanese")}>
            Vote for Japanese
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <h4>Results:</h4>
          <p>Italian: {italianVotes} votes</p>
          <p>Japanese: {japaneseVotes} votes</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Poll;
