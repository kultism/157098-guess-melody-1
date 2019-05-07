import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      level: -1
    };

    this._incrementLevel = this._incrementLevel.bind(this);
    this._getQuestionScreen = this._getQuestionScreen.bind(this);
  }

  render() {
    const {gameTime, errorsCount, questions} = this.props;
    const {level} = this.state;
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

        {level < 0
          ? <Welcome
            gameTime={gameTime} errorsCount={errorsCount}
            onStartButtonClick={() => this._incrementLevel(questions.length)}/>
          : this._getQuestionScreen(questions, level)}
      </section>
    );
  }

  _incrementLevel(levelBoundary) {
    this.setState(({level}) => {
      const nextLevel = (level + 1 >= levelBoundary) ? -1 : level + 1;

      return {
        level: nextLevel
      };
    });
  }

  _getQuestionScreen(questions, level) {
    const currentQuestion = questions[level];
    const currentLevelType = currentQuestion.type;

    switch (currentLevelType) {
      case `genre`:
        return <GenreQuestionScreen
          question={currentQuestion}
          onAnswer={() => this._incrementLevel(questions.length)}/>;
      case `artist`:
        return <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={() => this._incrementLevel(questions.length)}/>;
    }

    return null;
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  gameTime: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired
};

export default App;
