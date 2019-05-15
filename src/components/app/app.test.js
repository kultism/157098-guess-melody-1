import React from 'react';
import App from './app';
import renderer from 'react-test-renderer';

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `path`,
        genre: `rock`,
      },
    ],
  },
  {
    type: `artist`,
    song: {
      artist: `One`,
      src: ``,
    },
    answers: [
      {
        picture: ``,
        artist: `One`,
      },
    ],
  }
];


describe(`<App/>`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<App gameTime={3} errorsCount={3} questions={questions}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
