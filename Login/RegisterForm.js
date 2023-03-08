import 'bootstrap/dist/css/bootstrap.css';

// import backgroundVideo from "../Client/img/LOWPOLY_COLOR_PARTY_TERRAIN_LOOP_4K.mp4";
import React from "react";
import { Form, Button } from "react-bootstrap";
import "./RegistrationForm.css";

const RegisterForm = () => {
  return (
   
      
    
    <Form className="registration-form">
      {/* <video autoPlay muted loop>
        <source src={backgroundVideo} type="video/mp4" />
      </video> */}
      <h2 className="text-center mb-4">Register Client</h2>
      <Form.Group className="mb-3" controlId="firstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter first name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="lastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Enter last name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="confirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="country">
        <Form.Label>Country</Form.Label>
        <Form.Select defaultValue="Select country">
          <option>Select country</option>
          <option>United States</option>
          <option>Maroc</option>
        </Form.Select>
        <Form.Select defaultValue="Select country">
          <option>Interests ?</option>
          <option>Drive Business Services</option>
          <option>Invaluable Advocacy</option>
          <option>Peach Business Solutions</option>
          <option>Revolutionary Service</option>
          <option>Business Buds</option>
          <option>Bridge Trust Services</option>
          <option>Other</option>
          
          
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="termsOfService">
        <Form.Check type="checkbox" label="I agree to the terms of service" />
      </Form.Group>
      <Button variant="primary" type="submit" block>
        Create Account
      </Button>
    </Form>
 

  );
};

export default RegisterForm;
