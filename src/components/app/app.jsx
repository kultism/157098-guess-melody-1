import React from 'react';
import Welcome from '../welcome';

const handleStartButtonClick = () => null;

const App = () => (
  <Welcome
    sessionTime={7}
    errorsAllowed={4}
    onButtonClick={handleStartButtonClick}/>
);

export default App;
