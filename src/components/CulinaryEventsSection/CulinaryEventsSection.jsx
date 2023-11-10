import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const eventsData = [
  {
    title: "International Food Festival",
    location: "New York City, USA",
    date: "May 15-17, 2023",
    description:
      "Join us for a global culinary journey with food from over 30 countries. Experience a diverse range of flavors and dishes.",
  },
  {
    title: "Taste of Italy: Wine and Pasta",
    location: "Tuscany, Italy",
    date: "June 5-8, 2023",
    description:
      "Immerse yourself in the heart of Italian cuisine. Enjoy wine tastings, pasta-making classes, and more in the beautiful Tuscan countryside.",
  },
  {
    title: "Spice Fest: A Celebration of Flavor",
    location: "Bangkok, Thailand",
    date: "July 20-23, 2023",
    description:
      "Discover the vibrant and spicy world of Thai cuisine. Taste street food, attend cooking demos, and explore local markets.",
  },
  {
    title: "Pastry Masterclass with Chef Anna Olson",
    location: "Paris, France",
    date: "August 12, 2023",
    description:
      "Learn the art of French pastry with celebrated baker, Anna Olson. Attend a live demo and Q&A, and enjoy a 4-course meal with wine pairings.",
  },
];

const CulinaryEventsSection = () => {
  return (
    <section style={sectionStyle}>
      <Container>
        <h2 style={sectionTitleStyle}>Culinary Events and Festivals</h2>
        <Row>
          {eventsData.map((event, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={eventCardStyle}
            >
              <Card>
                <Card.Body>
                  <Card.Title>{event.title}</Card.Title>
                  <Card.Text>
                    <p>
                      <strong>Date:</strong> {event.date}
                    </p>
                    <p>
                      <strong>Location:</strong> {event.location}
                    </p>
                    <p>{event.description}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

const sectionStyle = {
  backgroundColor: "#f9f9f9",
  padding: "50px 0",
};

const sectionTitleStyle = {
  textAlign: "center",
  fontSize: "28px",
  marginBottom: "30px",
};

const eventCardStyle = {
  marginBottom: "20px",
};

export default CulinaryEventsSection;
