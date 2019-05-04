import React from 'react';
import Welcome from './welcome';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Welcome sessionTime={0} errorsAllowed={0}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
