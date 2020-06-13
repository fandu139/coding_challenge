import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SpalahScreen from "./SplashScreen";
import CheckoutStepOne from "./CheckoutScreen/StepOneScreen";
import CheckoutStepTwo from "./CheckoutScreen/StepTwoScreen";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <SpalahScreen />
        </Route>
        <Route exact path="/CheckoutStepOne">
          <CheckoutStepOne />
        </Route>
        <Route path="/CheckoutStepTwo">
          <CheckoutStepTwo />
        </Route>
      </Switch>
    </Router>
  );
}