const isGenreAnswerCorrect = (question, answer) => {
  const correctAnswersMap = question.answers.map((it) => it.genre === question.genre);
  return correctAnswersMap.every((it, idx) => answer[idx] === it);
};

const isArtistAnswerCorrect = (question, answer) => question.song.artist === answer;

export const ActionCreator = {
  incrementLevel: (level, levelBoundary) => {
    const nextLevel = (level + 1 >= levelBoundary) ? -1 : level + 1;

    return {
      type: `INCREMENT_LEVEL`,
      payload: nextLevel,
    };
  },

  incrementError: (question, answer) => {
    let isAnswerCorrect = false;

    switch (question.type) {
      case `genre`:
        isAnswerCorrect = isGenreAnswerCorrect(question, answer);
        break;
      case `artist`:
        isAnswerCorrect = isArtistAnswerCorrect(question, answer);
        break;
    }

    return {
      type: `INCREMENT_ERROR`,
      payload: isAnswerCorrect ? 0 : 1,
    };
  },

  resetState: () => {
    return {
      type: `RESET`,
    };
  }
};
