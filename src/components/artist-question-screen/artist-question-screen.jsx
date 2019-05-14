import React from 'react';
import PropTypes from 'prop-types';

const ArtistQuestionScreen = ({question, onAnswer}) => {
  const {answers} = question;

  return (
    <section className="game__screen">
      <h2 className="game__title">Кто исполняет эту песню?</h2>
      <div className="game__track">
        <button className="track__button track__button--play" type="button"/>
        <div className="track__status">
          <audio src={question.song.src}/>
        </div>
      </div>

      <form className="game__artist" onChange={onAnswer}>
        {
          answers.map((answer, idx) => (
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
};

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
