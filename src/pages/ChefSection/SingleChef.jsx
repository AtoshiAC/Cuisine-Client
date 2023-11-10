import React from 'react';
import { Container } from 'react-bootstrap';
import Card from "react-bootstrap/Card";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaThumbsUp,
  FaTwitter,
  FaCoffee,
  FaWatchmanMonitoring,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "react-bootstrap/Button";
import './blur.css'

const SingleChef = ({chef}) => {

    const { name, img, experience, total_recipes_cooked, total_likes, bio } =
      chef;

    return (
      <Container>
        <Card
          className="bg-transparent text-black"
          style={{ border: "none", marginTop: "50px" }}
        >
          <LazyLoadImage
            className="rounded-circle w-25"
            style={{ marginLeft: "475px" }}
            effect="blur"
            src={img}
          />
          <Card.Body className="text-center">
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle className="mt-4 mb-4 text-muted text-align-center">
              <span>
                <FaWatchmanMonitoring className="me-2" />
                {experience} years Experience
              </span>
              <span>
                <FaCoffee className="me-2 ms-4" />
                {total_recipes_cooked} Recipe Items
              </span>
              <span>
                <FaThumbsUp className="me-2 ms-4" />
                {total_likes}
              </span>
            </Card.Subtitle>
            <Card.Text className="mb-4">{bio.slice(0, 100)}....</Card.Text>
            <div className="mt-4">
              <FaFacebookF className="me-3" />
              <FaTwitter className="me-3" />
              <FaLinkedinIn />
            </div>
            <Button className="mt-4 mb-2" variant="outline-dark">
              <Link to={`/chef/${chef.id}`} className="text-decoration-none">
                View Recipe
              </Link>
            </Button>
          </Card.Body>
        </Card>
      </Container>
    );
};

export default SingleChef;