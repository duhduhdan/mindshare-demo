import React from 'react';
import Row from './RowItem';
import renderer from 'react-test-renderer';

test('Row should match snapshot', () => {
  const index = 1;
  const component = renderer.create(
    <Row
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
