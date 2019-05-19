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
        <Header errorsCount={this.props.errorsCount}/>

        {this._getScreen()}
      </section>
    );
  }

  _getScreen() {
    const {level, gameTime, maxErrors, errorsCount, questions, onStartButtonClick, onAnswer} = this.props;
    console.log(this.props);
    if (level < 0) {
      return (
        <Welcome
          gameTime={gameTime}
          errorsCount={maxErrors}
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
            onAnswer(level, questions.length, errorsCount, maxErrors, questions[level], answer);
          }
          }/>;
      case `artist`:
        return <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={(answer) => {
            onAnswer(level, questions.length, errorsCount, maxErrors, questions[level], answer);
          }}/>;
      default:
        return null;
    }
  }
}

App.propTypes = {
  questions: PropTypes.array.isRequired,
  level: PropTypes.number.isRequired,
  gameTime: PropTypes.number.isRequired,
  maxErrors: PropTypes.number.isRequired,
  errorsCount: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  level: state.level,
  errorsCount: state.errorsCount,
});

const mapDispatchToProps = (dispatch) => ({
  onStartButtonClick: (level, levelBoundary) => dispatch(ActionCreator.incrementLevel(level, levelBoundary)),
  onAnswer: (level, levelBoundary, errorsCount, maxErrors, question, answer) => {
    dispatch(ActionCreator.incrementError(question, answer));

    if (errorsCount > maxErrors) {
      return dispatch(ActionCreator.resetState());
    }

    return dispatch(ActionCreator.incrementLevel(level, levelBoundary));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
