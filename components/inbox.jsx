import React from 'react';
import { Card } from 'react-bootstrap';

const Inbox = ({ message }) => {
  return (
    <div className='inbox-container'>
      <Card>
        <Card.Body>
          <Card.Text>{message}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inbox;
