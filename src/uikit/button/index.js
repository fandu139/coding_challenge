import React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';
import './index.css';

function ButtonApp({press, titleButton, typeVarian, sizeButton}) {
  return (
    <div className="App">
      <header className="App-button">
        <ButtonToolbar>
          <Button size={sizeButton} variant={typeVarian} onClick={press}>{titleButton}</Button>
        </ButtonToolbar>
      </header>
    </div>
  );
}

ButtonApp.defaultProps = {
  sizeButton: 'sm'
}

export default ButtonApp;
