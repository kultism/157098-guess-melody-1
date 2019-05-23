import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from '../../redux/actions';
import Welcome from '../welcome';
import ArtistQuestionScreen from '../artist-question-screen';
import GenreQuestionScreen from '../genre-question-screen';
import Header from '../header';

import questions from '../../mocks/questions';

class App extends PureComponent {
  render() {
    return (
      <section className="game">
        <Header />

        {this._getScreen()}
      </section>
    );
  }

  _getScreen() {
    const {level, onStartButtonClick, onAnswer} = this.props;
    if (level < 0) {
      return (
        <Welcome
          onStartButtonClick={() => onStartButtonClick()}
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
            onAnswer(questions[level], answer);
          }
          }/>;
      case `artist`:
        return <ArtistQuestionScreen
          question={currentQuestion}
          onAnswer={(answer) => {
            onAnswer(questions[level], answer);
          }}/>;
      default:
        return null;
    }
  }
}

App.propTypes = {
  levelBoundary: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  onStartButtonClick: PropTypes.func.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  level: state.level,
});

const mapDispatchToProps = (dispatch) => ({
  onStartButtonClick: () => {
    dispatch(ActionCreator.incrementLevel());
  },
  onAnswer: (question, answer) => {
    dispatch(ActionCreator.checkAnswer(question, answer));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
