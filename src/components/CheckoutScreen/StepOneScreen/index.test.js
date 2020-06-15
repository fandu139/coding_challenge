import React from "react";
import Render from 'react-test-renderer';
import CheckoutStepOne from './index';

describe('Snapshoot', () => {
  test('Home Page', () => {
    const component = Render.create(<CheckoutStepOne />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
