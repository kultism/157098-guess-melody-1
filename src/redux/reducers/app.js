const initialState = {
  errorsCount: 0,
  level: 1,
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

    default:
      return state;
  }
};

export default app;
