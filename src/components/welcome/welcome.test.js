import React from 'react';
import Welcome from './welcome';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer
    .create(<Welcome gameTime={5} errorsCount={3} onStartButtonClick={jest.fn()}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
