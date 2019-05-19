const isGenreAnswerCorrect = (question, answer) => {
  const correctAnswersMap = question.answers.map((it) => it.genre === question.genre);
  return correctAnswersMap.every((it, idx) => answer[idx] === it);
};

const isArtistAnswerCorrect = (question, answer) => {
  return question.song.artist === answer;
};

export const ActionCreator = {
  incrementLevel: (level, levelBoundary) => {
    const nextLevel = (level + 1 >= levelBoundary) ? -1 : level + 1;

    return {
      type: `INCREMENT_LEVEL`,
      payload: nextLevel,
    };
  },
  incrementError: (errorsCount, question, answer) => {
    switch (question.type) {
      case `genre`:
        return {
          type: `INCREMENT_ERROR`,
          payload: isGenreAnswerCorrect(question, answer) ? errorsCount : errorsCount + 1,
        };
      case `artist`:
        return {
          type: `INCREMENT_ERROR`,
          payload: isArtistAnswerCorrect(question, answer) ? errorsCount : errorsCount + 1,
        };
      default:
        return null;
    }
  }
};
