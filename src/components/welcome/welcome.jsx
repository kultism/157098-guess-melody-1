import React from 'react';
import PropTypes from 'prop-types';

const Welcome = ({gameTime, errorsCount, onStartButtonClick}) => (
  <section className="welcome">
    <button className="welcome__button" onClick={onStartButtonClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {gameTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {errorsCount} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>
);

Welcome.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func
};

export default Welcome;
