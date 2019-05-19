import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redux/actions';
import Welcome from '../welcome';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';
import Header from '../header';

class App extends PureComponent {
  render() {
    return (
      <section className="game">
        <Header/>

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
          onAnswer={(answer) => {
            console.log(answer);
            onAnswer(level, questions.length);
          }
          }/>;
      case `artist`:
        return <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={(answer) => {
            console.log(answer);
            onAnswer(level, questions.length);
          }}/>;
      default:
        return null;
    }
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

const mapStateToProps = (state) => ({
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
