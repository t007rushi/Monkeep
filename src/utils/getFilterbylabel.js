export const filterbyLabels = (state, notes) => {
    if (state.tags.length !== 0) {
      return notes.filter(
        (item) =>
          item.Note.labels.filter((tag) => state.tags.includes(tag)).length > 0
      );
    }
    return notes;
  };