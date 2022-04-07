export const sortbydate = (state, notes) => {
    if (state.sortby === "old") {
      return [...notes].sort(
        (a, b) => Date.parse(a.Note.createdAt) - Date.parse(b.Note.createdAt)
      );
    } else if (state.sortby === "new") {
      return [...notes].sort(
        (a, b) => Date.parse(b.Note.createdAt) - Date.parse(a.Note.createdAt)
      );
    }
    return notes;
  };