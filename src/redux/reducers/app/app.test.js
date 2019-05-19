import reducer from './app';

describe(`app reducer`, () => {
  it(`should set default state`, () => {
    const initialState = {
      level: -1,
      errorsCount: 0
    };

    const state = undefined;

    expect(reducer(state, {})).toEqual(initialState);
  });

  it(`should reset app state correctly`, () => {
    const initialState = {
      level: -1,
      errorsCount: 0
    };

    const action = {
      type: `RESET`,
      payload: {
        level: 141,
        errorsCount: 232,
      }
    };

    expect(reducer(initialState, action)).toEqual(initialState);
  });

  it(`should increment level by a given value`, () => {
    const state = {
      level: 0,
      errorsCount: 0,
    };

    const action = {
      type: `INCREMENT_LEVEL`,
      payload: 1
    };

    const expected = {
      level: 1,
      errorsCount: 0,
    };

    expect(reducer(state, action)).toEqual(expected);
  });

  it(`should increment error by a given value`, () => {
    const state = {
      level: 0,
      errorsCount: 0,
    };

    const action = {
      type: `INCREMENT_ERROR`,
      payload: 1
    };

    const expected = {
      level: 0,
      errorsCount: 1,
    };

    expect(reducer(state, action)).toEqual(expected);
  });
});
