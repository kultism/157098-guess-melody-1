import React from 'react';
import PropTypes from 'prop-types';

const GenreQuestionScreen = ({question, onAnswer}) => {
  const {answers} = question;
  return (
    <section className="game__screen">
      <h2 className="game__title">Выберите {question.genre} треки</h2>
      <form className="game__tracks" onSubmit={onAnswer}>
        {
          answers.map((answer, idx) => (
            <div key={idx} className="track">
              <button className="track__button track__button--play" type="button"/>
              <div className="track__status">
                <audio src={answer.src}/>
              </div>
              <div className="game__answer">
                <input
                  className="game__input visually-hidden"
                  type="checkbox"
                  name="answer"
                  value={`answer-${idx}`}
                  id={`answer-${idx}`}/>
                <label className="game__check" htmlFor={`answer-${idx}`}>Отметить</label>
              </div>
            </div>
          ))
        }
        <button className="game__submit button" type="submit">Ответить</button>
      </form>
    </section>
  );
};

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
