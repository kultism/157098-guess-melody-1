import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import questions from './mocks/questions';
import gameSettings from './mocks/game-settings';

const init = () => {
  const {gameTime, errorsCount} = gameSettings;
  ReactDOM.render(<App
    questions={questions}
    gameTime={gameTime}
    errorsCount={errorsCount}/>, document.querySelector(`.main`));
};

init();
