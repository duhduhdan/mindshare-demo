import React from 'react';
import Score from './Score';
import renderer from 'react-test-renderer';

test('Score should match snapshot with no score', () => {
  const component = renderer.create(
    <Score />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});

test('Score should match snapshot with a score', () => {
  const component = renderer.create(
    <Score score={{white: 1, black: 2}} />
  );

  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();
});