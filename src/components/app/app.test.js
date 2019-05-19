import React from 'react';
import {App} from './app';
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
      .create(<App
        questions={questions}
        level={-1}
        gameTime={3}
        maxErrors={3}
        errorsCount={1}
        onStartButtonClick={jest.fn()}
        onAnswer={jest.fn()}
      />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
