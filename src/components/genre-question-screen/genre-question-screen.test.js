import React from 'react';
import GenreQuestionScreen from './genre-question-screen';
import renderer from 'react-test-renderer';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: ``,
      genre: `rock`,
    },
    {
      src: ``,
      genre: `blues`,
    },
    {
      src: ``,
      genre: `jazz`,
    }
  ],
};
;

describe(`<GenreQuestionScreen/>`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(<GenreQuestionScreen onAnswer={jest.fn()} question={question}/>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
