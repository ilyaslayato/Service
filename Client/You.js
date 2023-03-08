import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './You.css'; 


const MyCard = () => {
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title> First Name :{'Ilyas '}</Card.Title>
          <Card.Title>Last Name :{' Ablad'}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Type: {` Service`}</Card.Subtitle>
          <Button variant="primary">Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MyCard;
