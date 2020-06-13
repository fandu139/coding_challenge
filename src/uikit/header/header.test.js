import React from "react";
import Render from 'react-test-renderer';
import Header from './header';

describe('Home Pokemon', () => {
  const props = {
    logo : '',
    title: 'Pokemon Home'
  }
  test('Home Header', () => {
    const component = Render.create(<Header {...props} />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
