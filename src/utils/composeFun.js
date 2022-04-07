export const composeFilterFunctions =
  (state, ...functions) =>
  (notes) =>
    functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, notes);
