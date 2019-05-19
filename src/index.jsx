import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/app';
import questions from './mocks/questions';

const gameSettings = {
  gameTime: 5,
  errorsCount: 3
};

const rootElement = document.querySelector(`.main`);

const init = () => {
  const {gameTime, errorsCount} = gameSettings;
  ReactDOM.render(<Provider store={store}>
    <App
      questions={questions}
      gameTime={gameTime}
      errorsCount={errorsCount}/>
  </Provider>, rootElement);
};

init();
