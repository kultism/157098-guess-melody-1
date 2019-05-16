import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from '../audio-player';

class ArtistQuestionScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this._handlePlayButtonClick = this._handlePlayButtonClick.bind(this);
  }

  render() {
    const {question, onAnswer} = this.props;
    const {isPlaying} = this.state;

    return (
      <section className="game__screen">
        <h2 className="game__title">Кто исполняет эту песню?</h2>
        <AudioPlayer
          src={question.song.src}
          isPlaying={isPlaying}
          onPlayButtonClick={this._handlePlayButtonClick}
        />

        <form className="game__artist" onChange={onAnswer}>
          {
            question.answers.map((answer, idx) => (
              <div key={idx} className="artist">
                <input
                  className="artist__input visually-hidden"
                  type="radio"
                  name="answer"
                  value={`artist-${idx}`}
                  id={`answer-${idx}`}/>
                <label className="artist__name" htmlFor={`answer-${idx}`}>
                  <img className="artist__picture" src={answer.path} alt={answer.artist}/>
                  {answer.artist}
                </label>
              </div>
            ))
          }
        </form>
      </section>
    );
  }

  _handlePlayButtonClick() {
    this.setState(({isPlaying}) => ({isPlaying: !isPlaying}));
  }
}

ArtistQuestionScreen.propTypes = {
  onAnswer: PropTypes.func.isRequired,
  question: PropTypes.shape({
    type: PropTypes.oneOf([`genre`, `artist`]).isRequired,
    song: PropTypes.shape({
      artist: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired
    }).isRequired,
    answers: PropTypes.arrayOf(PropTypes.shape({
      artist: PropTypes.string.isRequired,
      picture: PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

export default ArtistQuestionScreen;
