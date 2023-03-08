import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import './Home.css';
import logo from './img/International trade-bro.png';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col md={6} className="my-auto">
          <h1 className="animate__animated animate__slideInFromLeft">Welcome to our service!</h1>
          <p >

We are thrilled to have you here and look forward to providing you with the best possible experience.

Our service is designed to meet all your needs, whether you are looking for entertainment, education, or productivity. Our team of experts is dedicated to providing you with top-quality service, and we are always here to answer any questions you may have.

To get started, please create an account with us. Once you have registered, you will be able to access all of our features and services.

If you have any questions or concerns, please do not hesitate to contact us. Our customer support team is available 24/7 to assist you with anything you need.

Thank you for choosing our service. We hope you enjoy your time with us!</p>
          <Button variant="primary" className="info-btn">Get more info</Button>

        </Col>
        <Col md={6}>
          <img src={logo} alt="placeholder" width="500" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
