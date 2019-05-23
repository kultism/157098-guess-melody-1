import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import App from './components/app';

// const gameSettings = {
//   gameTime: 5,
//   maxErrors: 1
// };

const rootElement = document.querySelector(`.main`);

const init = () => {
  ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, rootElement);
};

init();
