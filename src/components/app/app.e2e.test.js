import Enzyme, {mount} from 'enzyme';
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
    const welcomeComponent = app.find(`Welcome`);

    expect(welcomeComponent).toHaveLength(1);
  });

  it(`switches from welcome screen to a game screen on play button`, () => {
    const app = mount(<App questions={questions} gameTime={5} errorsCount={3}/>);
    const playButton = app.find(`button.welcome__button`);

    playButton.simulate(`click`);
    app.update();

    const gameScreenContainer = app.find(`section.game__screen`);

    expect(app.state(`level`)).toEqual(0);
    expect(gameScreenContainer).toHaveLength(1);
  });

  it(`switches to welcome screen from last level`, () => {
    const WELCOME_SCREEN_LEVEL = -1;
    const app = mount(<App questions={questions} gameTime={5} errorsCount={3}/>);
    const lastLevelIdx = questions.length - 1;

    app.setState({level: lastLevelIdx});
    app.update();

    const form = app.find(`form`);
    const getFormAction = (question) => question.type === `artist` ? `change` : `submit`;

    form.simulate(`${getFormAction(questions[lastLevelIdx])}`, {
      preventDefault() {
      }
    });

    const welcomeComponent = app.find(`Welcome`);

    expect(app.state(`level`)).toEqual(WELCOME_SCREEN_LEVEL);
    expect(welcomeComponent).toHaveLength(1);
  });
});
