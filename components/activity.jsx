import React from 'react';
import { Card } from 'react-bootstrap';

const Activity = ({ message }) => {
  return (
    <div className='activity-container'>
      <Card>
        <Card.Body>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Activity;
