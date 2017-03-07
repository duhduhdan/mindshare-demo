import React from 'react';
import activeColor from '../../redux/reducer';
import { Provider } from 'react-redux';
import ControlPanel from './ControlPanel';
import { createStore, applyMiddleware } from 'redux';
import renderer from 'react-test-renderer';
import createLogger from 'redux-logger';

test('ControlPanel to match snapshot', () => {
  const logger = createLogger();

  const component = renderer.create(
    <Provider store={createStore(activeColor, applyMiddleware(logger))}>
      <ControlPanel />
    </Provider>
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});