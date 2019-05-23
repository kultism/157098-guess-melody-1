import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

const Welcome = ({gameTime, maxErrors, onStartButtonClick}) => (
  <section className="welcome">
    <button className="welcome__button" onClick={onStartButtonClick}>
      <span className="visually-hidden">Начать игру</span>
    </button>
    <h2 className="welcome__rules-title">Правила игры</h2>
    <p className="welcome__text">Правила просты:</p>
    <ul className="welcome__rules-list">
      <li>За {gameTime} минут нужно ответить на все вопросы.</li>
      <li>Можно допустить {maxErrors} ошибки.</li>
    </ul>
    <p className="welcome__text">Удачи!</p>
  </section>
);

const mapStateToProps = (state) => ({
  gameTime: state.gameTime,
  maxErrors: state.maxErrors
});

Welcome.propTypes = {
  gameTime: PropTypes.number.isRequired,
  maxErrors: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Welcome);
