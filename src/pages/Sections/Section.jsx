import React from 'react';
import { Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Marquee from "react-fast-marquee";

const Section = () => {
    return (
      <>
        <Container>
          <div className="text-center mt-2 mb-4">
            <h1>WHO WE ARE</h1>
            <h6>Everything You Want to Know</h6>
          </div>
          <CardGroup>
            <Card>
              <Card.Img
                variant="top"
                src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/about-img-2.jpg"
              />
              <Card.Body>
                <Card.Title>FRESH TASTE</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci. Cum sociis natoque
                  penatibus et magnis dis montes.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-3">
              <Card.Img
                variant="top"
                src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/about-img-3.jpg"
              />
              <Card.Body>
                <Card.Title>MADE WITH LOVE</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci. Cum sociis natoque
                  penatibus et magnis dis montes.{" "}
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="ms-3">
              <Card.Img
                variant="top"
                src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/about-img-2.jpg"
              />
              <Card.Body>
                <Card.Title>TASTE THE DIFFERENCE</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut
                  ullamcorper leo, eget euismod orci. Cum sociis natoque
                  penatibus et magnis dis montes.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <div className="text-center mt-5 mb-5">
            <h1>OUR STORY</h1>
            <h6>We Aim to Inspire</h6>
          </div>
        </Container>
          <Marquee className='mb-5 pb-5'>
            <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/client-5.png" />
            <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/client-1.png" />
            <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/client-2.png" />
            <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/client-3.png" />
            <img src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/02/client-4.png" />
          </Marquee>
      </>
    );
};

export default Section;