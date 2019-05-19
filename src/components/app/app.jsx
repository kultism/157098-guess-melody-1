import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redux/actions';
import Welcome from '../welcome';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';

class App extends PureComponent {
  render() {
    return (
      <section className="game">
        <header className="game__header">
          <a className="game__back" href="#">
            <span className="visually-hidden">Сыграть ещё раз</span>
            <img className="game__logo" src="img/melody-logo-ginger.png" alt="Угадай мелодию"/>
          </a>

          <svg xmlns="http://www.w3.org/2000/svg" className="timer" viewBox="0 0 780 780">
            <circle
              className="timer__line" cx="390" cy="390" r="370"
              style={{
                filter: `url(#blur)`,
                transform: `rotate(-90deg) scaleY(-1)`,
                transformOrigin: `center`
              }}/>
          </svg>

          <div className="timer__value" xmlns="http://www.w3.org/1999/xhtml">
            <span className="timer__mins">05</span>
            <span className="timer__dots">:</span>
            <span className="timer__secs">00</span>
          </div>

          <div className="game__mistakes">
            <div className="wrong"></div>
            <div className="wrong"></div>
            <div className="wrong"></div>
          </div>
        </header>

        {this._getScreen()}
      </section>
    );
  }

  _getScreen() {
    const {level, gameTime, errorsCount, questions, onStartButtonClick, onAnswer} = this.props;

    if (level < 0) {
      return (
        <Welcome
          gameTime={gameTime} errorsCount={errorsCount}
          onStartButtonClick={() => onStartButtonClick(level, questions.length)}
        />
      );
    }

    const currentQuestion = questions[level];
    const currentLevelType = currentQuestion.type;

    switch (currentLevelType) {
      case `genre`:
        return <GenreQuestionScreen
          question={currentQuestion}
          onAnswer={() => onAnswer(level, questions.length)}/>;
      case `artist`:
        return <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={() => onAnswer(level, questions.length)}/>;
    }

    return null;
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  level: state.level,
  errorsCount: state.errorsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onStartButtonClick: (level, levelBoundary) => dispatch(ActionCreator.incrementLevel(level, levelBoundary)),
  onAnswer: (level, levelBoundary) => {
    dispatch(ActionCreator.incrementLevel(level, levelBoundary));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
