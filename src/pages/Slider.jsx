import React from "react";
import { Container } from "react-bootstrap";
import "./Slider.css";
const Slider = () => {
  return (
    <Container>
      <div
        id="carouselExampleInterval"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        style={{
          height: "100vh",
          width: "100%",
          borderRadius: "0px",
          border: "none",
        }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active banners" data-bs-interval="5000">
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1534604973900-c43ab4c2e0ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1388&q=80"
              alt="..."
            />
            <div className="overlaying">
              <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
              </p>
              <small>
                "Cooking is like love, it should be entered into with abandon or
                not at all." - Harriet Van Horne
              </small>
            </div>
          </div>
          <div className="carousel-item banners" data-bs-interval="2000">
            <img
              src="https://images.unsplash.com/photo-1558985212-92c2ff0b56e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80a"
              className="d-block w-100"
              alt="..."
            />
            <div className="overlaying">
              <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
              </p>
              <small>
                "Cooking is like love, it should be entered into with abandon or
                not at all." - Harriet Van Horne
              </small>
            </div>
          </div>
          <div className="carousel-item banners">
            <img
              src="https://images.unsplash.com/photo-1502364271109-0a9a75a2a9df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              className="d-block w-100"
              alt="..."
            />
            <div className="overlaying">
              <h1>Experience the Joy of Cooking with Our Expert Chefs</h1>
              <p className="fw-normal">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                pulvinar nibh vel nisi pharetra, a fringilla dui tincidunt.
              </p>
              <small>
                "Cooking is like love, it should be entered into with abandon or
                not at all." - Harriet Van Horne
              </small>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Slider;
