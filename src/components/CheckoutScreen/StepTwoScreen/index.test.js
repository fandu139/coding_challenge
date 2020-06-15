import React from "react";
import Render from 'react-test-renderer';
import CheckoutStepTwo from './index';

describe('Snapshoot', () => {
  test('CheckoutStepTwo', () => {
    const component = Render.create(<CheckoutStepTwo />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
