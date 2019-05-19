export const ActionCreator = {
  incrementLevel: (level, levelBoundary) => {
    const nextLevel = (level + 1 >= levelBoundary) ? -1 : level + 1;

    return {
      type: `INCREMENT_LEVEL`,
      payload: nextLevel,
    };
  }
};
