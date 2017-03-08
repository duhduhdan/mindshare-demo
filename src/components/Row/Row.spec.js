import React from 'react';
import RowItem from './RowItem';
import renderer from 'react-test-renderer';

test('RowItem should match snapshot', () => {
  const index = 1;
  const component = renderer.create(
    <RowItem
      index={index + 1}
      key={index}
      active
      color="red"
      onClick={() => console.log('clicked')}
    />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});