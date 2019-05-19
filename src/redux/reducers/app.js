const initialState = {
  errorsCount: 3,
  level: -1,
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case `INCREMENT_LEVEL`:
      console.log(`redux works...`);

      return Object.assign({}, state, {
        level: state.level + 1,
      });

    default:
      return state;
  }
};

export default app;
