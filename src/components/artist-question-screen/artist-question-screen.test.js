import React from 'react';
import ArtistQuestionScreen from './artist-question-screen';
import renderer from 'react-test-renderer';

const question = {
  type: `artist`,
  song: {
    artist: `One`,
    src: `path`,
  },
  answers: [
    {
      picture: `path`,
      artist: `One`,
    },
    {
      picture: `path`,
      artist: `Two`,
    },
    {
      picture: `path`,
      artist: `Three`,
    }
  ],
};

describe(`<ArtistQuestionScreen/>`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<ArtistQuestionScreen onAnswer={jest.fn()} question={question}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
