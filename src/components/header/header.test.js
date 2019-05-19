import React from 'react';
import Header from './header';
import renderer from 'react-test-renderer';

describe(`<Header/>`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<Header errorsCount={3}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
