import React from "react";
import Render from 'react-test-renderer';
import SpalashScreen from './splashScreen';

jest.mock('react-router-dom')

describe('Snapshoot', () => {
  test('Home Loading', () => {
    const component = Render.create(<SpalashScreen />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
