import store from '../store';

const ERROR_LEVEL_SCALE = 1;

const isGenreAnswerCorrect = (question, answer) => {
  const correctAnswersMap = question.answers.map((it) => it.genre === question.genre);
  return correctAnswersMap.every((it, idx) => answer[idx] === it);
};

const isArtistAnswerCorrect = (question, answer) => question.song.artist === answer;

export const ActionCreator = {
  incrementLevel: () => {
    const {level, levelBoundary} = store.getState();
    const nextLevel = (level + 1 >= levelBoundary) ? -1 : level + 1;

    return {
      type: `INCREMENT_LEVEL`,
      payload: nextLevel,
    };
  },

  incrementError: () => {
    const {errorsCount, maxErrors} = store.getState();

    if (errorsCount >= maxErrors) {
      return ActionCreator.resetState();
    }

    return {
      type: `INCREMENT_ERROR`,
      payload: ERROR_LEVEL_SCALE,
    };
  },
  checkAnswer: (question, answer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case `genre`:
        isAnswerCorrect = isGenreAnswerCorrect(question, answer);
        break;
      case `artist`:
        isAnswerCorrect = isArtistAnswerCorrect(question, answer);
        break;
    }

    return isAnswerCorrect ? ActionCreator.incrementLevel() : ActionCreator.incrementError();
  },

  resetState: () => {
    return {
      type: `RESET`,
    };
  }
};
