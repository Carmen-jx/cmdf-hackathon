import React from 'react';
import { Card, Button, CardImg } from 'react-bootstrap';

const Profile = ({ name, description, imgSrc, onConnect }) => {
  return (
    <div className='card-container'>
      <Card>
        <Card.Body>

          <div className="image-container">
            <CardImg src={imgSrc} className="profile-image" />
          </div>
          <div className="band-of-color"></div>
          <Card.Title style={{ fontWeight: 'bold' }}>{name}</Card.Title>
        
          <Card.Text>{description}</Card.Text>
          <Button onClick={onConnect}>Connect</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Profile;
