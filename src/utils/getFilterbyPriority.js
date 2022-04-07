export const filterbyPriority = (state, notes) => {
    if (state.priorities.length !== 0) {
      return notes.filter((item) =>
        state.priorities.includes(item.Note.priority)
      );
    }
    return notes;
  };