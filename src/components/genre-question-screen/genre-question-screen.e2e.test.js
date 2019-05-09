import Enzyme, {mount} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import GenreQuestionScreen from './genre-question-screen';

Enzyme.configure({adapter: new Adapter()});

const question = {
  type: `genre`,
  genre: `blues`,
  answers: [
    {
      src: ``,
      genre: `blues`,
    },
    {
      src: ``,
      genre: `rock`,
    },
    {
      src: ``,
      genre: `blues`,
    }
  ],
};

describe(`<GenreQuestionScreen/>`, () => {
  it(`prevents form submission on submit`, () => {
    const onAnswer = jest.fn();

    const genreQuestion = mount(<GenreQuestionScreen onAnswer={onAnswer} question={question}/>);
    const preventCheckFn = jest.fn();
    const form = genreQuestion.find(`form`);

    form.simulate(`submit`, {
      preventDefault: preventCheckFn
    });

    expect(onAnswer).toHaveBeenCalledTimes(1);
    expect(preventCheckFn).toHaveBeenCalledTimes(1);
  });
});
