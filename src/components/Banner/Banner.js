import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-6 col-md-8 col-sm-12 banner-container">
          <h1>APRENDE ALGO NUEVO HOY</h1>
          <p>
          La comunidad de aprendizaje en línea donde desarrollas tus habilidades y potencias tu crecimiento profesional.
          </p>

          <InputGroup className="mb-3">
            <Form.Control
              className="form"
              placeholder="¿Que te gustaría aprender?"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <Button variant="outline-secondary" id="button-addon2">
              <p>🔎</p>
            </Button>
          </InputGroup>

          <Button variant="light">Light</Button>{' '}
        </div>

        <div className="col-lg-6 col-md-4 col-sm-12 banner-image-container">
          <img src="./Arash.png" alt="Image Description" />
          
        </div>
        
      </div>
    </div>
  );
};

export default Banner;