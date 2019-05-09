import Enzyme, {mount, shallow} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import App from './app';

Enzyme.configure({adapter: new Adapter()});

const questions = [
  {
    type: `genre`,
    genre: `rock`,
    answers: [
      {
        src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
        genre: `rock`,
      },
    ]
  },
  {
    type: `artist`,
    song: {
      artist: `Jim Beam`,
      src: `path.mp3`,
    },
    answers: [
      {
        picture: ``,
        artist: `John Snow`,
      },
    ]
  }
];

describe(`<App/>`, () => {
  it(`starts app from welcome screen`, () => {
    const app = mount(<App questions={questions} gameTime={5} errorsCount={3}/>);

    const welcomeContainer = app.find(`section.welcome`);
    expect(welcomeContainer).toHaveLength(1);
  });

  it(`switches from welcome screen to a game screen on play button`, () => {
    const app = mount(<App questions={questions} gameTime={5} errorsCount={3}/>);
    const playButton = app.find(`button.welcome__button`);

    playButton.simulate(`click`);

    const gameScreenContainer = app.find(`section.game__screen`);

    expect(gameScreenContainer).toHaveLength(1);

  });
});
