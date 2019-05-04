import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({sessionTime, errorsAllowed, onStartButtonClick}) => (
  <section className="welcome">
    <div className="welcome__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"/></div>
    <button className="welcome__button" onClick={onStartButtonClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {sessionTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorsAllowed} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>
);

Welcome.propTypes = {
  sessionTime: PropTypes.number.isRequired,
  errorsAllowed: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func
};

export default Welcome;
