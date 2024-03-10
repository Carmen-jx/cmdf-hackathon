import React from 'react';
import { Card } from 'react-bootstrap';

const Event = ({ title, description, date, location, onRegister }) => {
  return (
    <div className='event-container'>
      <Card>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Description: {description}</Card.Text>
          <Card.Text>Date: {date}</Card.Text>
          <Card.Text>Location: {location}</Card.Text>
          <button onClick={onRegister}>Register</button>
        </Card.Body>
      </Card>
    </div>
  );
};


export default Event;
