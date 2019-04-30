import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './components/welcome';

const App = () => <Welcome/>;

const init = () => {
  ReactDOM.render(<App/>, document.querySelector(`.main`));
};

init();
