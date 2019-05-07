import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome';

const handleStartButtonClick = () => null;

const App = ({questions, gameTime, errorsCount}) => {
  return (
    <Welcome
      gameTime={gameTime}
      errorsCount={errorsCount}
      onButtonClick={handleStartButtonClick}/>
  );
};

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired
};

export default App;
