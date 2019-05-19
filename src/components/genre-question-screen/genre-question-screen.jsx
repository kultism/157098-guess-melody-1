import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player';

class GenreQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    const {answers} = this.props.question;

    this.state = {
      activePlayer: -1,
      userAnswer: new Array(answers.length).fill(false),
    };

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  render() {
    const {question, onAnswer} = this.props;
    const {userAnswer} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Выберите {question.genre} треки</h2>
        <form className="game__tracks" onSubmit={(evt) => {
          evt.preventDefault();
          onAnswer(userAnswer);
        }}>
          {
            question.answers.map((answer, idx) => (
              <div key={idx} className="track">
                <AudioPlayer
                  src={answer.src}
                  isPlaying={this.state.activePlayer === idx}
                  onPlayButtonClick={() => this._handlePlayButtonClick(idx)}
                />
                <div className="game__answer">
                  <input
                    className="game__input visually-hidden"
                    type="checkbox"
                    name="answer"
                    value={`answer-${idx}`}
                    id={`answer-${idx}`}
                    onChange={() => {
                      const answers = [...userAnswer];
                      answers[idx] = !answers[idx];

                      this.setState({userAnswer: answers});
                    }}/>
                  <label className="game__check" htmlFor={`answer-${idx}`}>Отметить</label>
                </div>
              </div>
            ))
          }
          <button className="game__submit button" type="submit">Ответить</button>
        </form>
      </section>
    );
  }

  _handlePlayButtonClick(idx) {
    this.setState(({activePlayer}) => ({activePlayer: activePlayer === idx ? -1 : idx}));
  }
}

GenreQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    genre: PropTypes.oneOf([`rock`, `jazz`, `blues`]).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

export default GenreQuestionScreen;
