import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaThumbsUp,
  FaTwitter,
  FaCoffee,
  FaWatchmanMonitoring,
  FaHeart,
} from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLoaderData, useParams } from 'react-router-dom';
import Food from './Food';

const ChefDetails = () => {

  const {id} = useParams();
  const categoryChefs = useLoaderData();
//     const [disabled, setDisabled] = useState(false);
// const handleClick = () => {
//     toast.success("Added to Favourites!");
//   setDisabled(true);
//   // perform other actions if needed
// };


    return (
      <Container className="mb-5 pb-5">
        <Card className="bg-transparent text-white" style={{ border: "none" }}>
          <Card.Img src="https://images.unsplash.com/photo-1499125562588-29fb8a56b5d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
          <Card.ImgOverlay
            className="text-center"
            style={{ marginTop: "200px", textShadow: "4px 4px 8px #000000" }}
          >
            <div className="text-center mt-5">
              <h1>OUR PRIDE</h1>
              <h6>Experience & Commitment</h6>
              <small>Complete atmosphere about career recipe passion</small>
            </div>
          </Card.ImgOverlay>
        </Card>

        {/* Chef Details */}
        <Card
          className="bg-transparent text-black"
          style={{ border: "none", marginTop: "50px" }}
        >
          <Card.Img
            className="rounded-circle w-25 mx-auto"
            src="https://gourmand.qodeinteractive.com/wp-content/uploads/2018/01/h1-team-member-1.jpg"
            alt="Card image"
          />
          <Card.Body className="text-center">
            <Card.Title>MASON ROBINSON</Card.Title>
            <Card.Subtitle className="mt-4 mb-4 text-muted text-align-center">
              <span>
                <FaWatchmanMonitoring className="me-2" />
                15 years Experience
              </span>
              <span>
                <FaCoffee className="me-2 ms-4" />
                29 Recipe Items
              </span>
              <span>
                <FaThumbsUp className="me-2 ms-4" />
                533
              </span>
            </Card.Subtitle>
            <Card.Text className="mb-4">
              Lorem ipsum dolor sit amet, consectetur a elit. In ut ullamcorper
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
              leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis
            </Card.Text>
            <div className="mt-4">
              <FaFacebookF className="me-3" />
              <FaTwitter className="me-3" />
              <FaLinkedinIn />
            </div>
          </Card.Body>
        </Card>
        {/* Recipe Parts */}
        {
          categoryChefs.map(categoryChef => <Food
          key={categoryChef._id}
          categoryChef={categoryChef}
          ></Food>)
        }
      </Container>
    );
};

export default ChefDetails;