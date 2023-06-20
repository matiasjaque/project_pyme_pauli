import React from "react";
import "../styles/Dashboard.css";
import Carousel from "react-bootstrap/Carousel";

import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';

const Dashboard = () => {
  return (
    <div id="dashboard">
      <Carousel id="contenedorCarousel">
        <Carousel.Item className="contenedorSecundarioCarousel">
          <img
            className="d-block w-100"
            src={logo2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="contenedorSecundarioCarousel">
          <img
            className="d-block w-100"
            src={logo3}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="contenedorSecundarioCarousel">
          <img
            className="d-block w-100"
            src={logo4}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Dashboard;
