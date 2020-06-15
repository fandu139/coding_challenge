import React, { useEffect } from "react";
import './splashScreen.css';
import { useHistory } from "react-router-dom";

function SplashScreen() {

  const history = useHistory()

  useEffect(() => {
    setTimeout(function () {
      history.push('/CheckoutStepOne')
    }, 10000)
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://media1.giphy.com/media/11ASZtb7vdJagM/giphy.gif"} width={"70%"} />
      </header>
    </div>
  );
}

export default SplashScreen;
