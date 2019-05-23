import questions from '../../../mocks/questions';

const initialState = {
  maxErrors: 1,
  gameTime: 5,
  errorsCount: 0,
  level: -1,
  levelBoundary: questions.length,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_LEVEL`:
      return {
        ...state,
        level: action.payload,
      };

    case (`INCREMENT_ERROR`):
      return {
        ...state,
        errorsCount: action.payload,
      };
    case (`RESET`): {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default app;
