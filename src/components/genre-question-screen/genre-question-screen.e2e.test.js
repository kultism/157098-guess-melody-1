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
  HTMLMediaElement.prototype.play = jest.fn();
  HTMLMediaElement.prototype.pause = jest.fn();

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

  it(`renders as much AudioPlayers as answers length`, () => {
    const genreQuestionScreen = mount(<GenreQuestionScreen onAnswer={jest.fn()} question={question}/>);
    const audioPlayers = genreQuestionScreen.find(`AudioPlayer`);

    expect(audioPlayers).toHaveLength(question.answers.length);
  });

  it(`sets state's activePlayer property as index of the current AudioPlayer playing`, () => {
    const genreQuestionScreen = mount(<GenreQuestionScreen question={question} onAnswer={jest.fn()}/>);
    const audioPlayers = genreQuestionScreen.find(`AudioPlayer`);

    question.answers.forEach((_, idx) => {
      const playButton = audioPlayers.at(idx).find(`button.track__button`);

      playButton.simulate(`click`);
      expect(genreQuestionScreen.state(`activePlayer`)).toEqual(idx);
    });
  });
});
