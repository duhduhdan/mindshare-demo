import React from 'react';
import Ball from './Ball';
import renderer from 'react-test-renderer';

test('Ball to match snapshot', () => {
  const func = () => {};
  const component = renderer.create(
    <Ball color="red" />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});