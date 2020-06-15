import React from "react";
import Render from 'react-test-renderer';
import SpalashScreen from './index';

describe('Snapshoot', () => {
  test('SplashScreen Loading', () => {
    const component = Render.create(<SpalashScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
