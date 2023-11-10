import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Home.css";
import Slider from "../pages/Slider";
import Section from "../pages/Sections/Section";
import ChefSection from "../pages/ChefSection/ChefSection";
import CulinaryEventsSection from "../components/CulinaryEventsSection/CulinaryEventsSection";
import CommunityCookingChallenges from "../components/CommunityCookingChallenges/CommunityCookingChallenges";
import PairingsSection from "../components/PairingsSection/PairingsSection";
import FoodHistoryAndCulture from "../components/FoodHistoryAndCulture/FoodHistoryAndCulture";
import Poll from "../components/Poll/Poll";
const Home = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = () => {
    // You can implement your subscription logic here
    // For example, you can send the email to a backend service
    // or add it to your mailing list.
    // Don't forget to add error handling and success messages.
    console.log(`Subscribed with email: ${email}`);
  };
  return (
    <Container>
      <>
        <Slider></Slider>
        <ChefSection></ChefSection>
        <Section></Section>
        <CulinaryEventsSection />
        <CommunityCookingChallenges />
        <PairingsSection />
        <FoodHistoryAndCulture />
        <Poll />
      </>
      {/* ... Other sections of your home page ... */}
      <Row style={{ backgroundColor: "RGB(221 226 230)", padding: "50px" }}>
        <Col>
          <h2 style={{ textAlign: "center" }}>Subscribe to Our Newsletter</h2>
          <p style={{ textAlign: "center" }}>
            Stay updated with the latest recipes, cooking tips, and more!
          </p>
          <Form style={{ textAlign: "center" }}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleSubscribe}
              style={{
                backgroundColor: "skyblue",
                borderColor: "skyblue",
                marginTop: "10px",
                marginBottom: "100px",
              }}
            >
              Subscribe
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
