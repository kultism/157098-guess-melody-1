const initialState = {
  errorsCount: 3,
  level: -1,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_LEVEL`:

      return Object.assign({}, state, {
        level: action.payload,
      });

    default:
      return state;
  }
};

export default app;
