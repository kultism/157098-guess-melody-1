import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/app';
import questions from './mocks/questions';

const gameSettings = {
  gameTime: 5,
  maxErrors: 1
};

const rootElement = document.querySelector(`.main`);

const init = () => {
  const {gameTime, maxErrors} = gameSettings;
  ReactDOM.render(<Provider store={store}>
    <App
      questions={questions}
      gameTime={gameTime}
      maxErrors={maxErrors}/>
  </Provider>, rootElement);
};

init();
