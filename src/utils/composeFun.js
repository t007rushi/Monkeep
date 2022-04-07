export const composeFilterFunctions =
  (state, ...functions) =>
  (notes) =>
    functions.reduce((acc, curr) => {
      return curr(state, acc);
    }, notes);

//Filter by priority
// export const filterbyPriority = (state, notes) => {
//   if (state.priorities.length !== 0) {
//     return notes.filter((item) =>
//       state.priorities.includes(item.Note.priority)
//     );
//   }
//   return notes;
// };
//Filter by labels
// export const filterbyLabels = (state, notes) => {
//   if (state.tags.length !== 0) {
//     return notes.filter(
//       (item) =>
//         item.Note.labels.filter((tag) => state.tags.includes(tag)).length > 0
//     );
//   }
//   return notes;
// };
//sort by date
// export const sortbydate = (state, notes) => {
//   if (state.sortby === "old") {
//     return [...notes].sort(
//       (a, b) => Date.parse(a.Note.createdAt) - Date.parse(b.Note.createdAt)
//     );
//   } else if (state.sortby === "new") {
//     return [...notes].sort(
//       (a, b) => Date.parse(b.Note.createdAt) - Date.parse(a.Note.createdAt)
//     );
//   }
//   return notes;
// };
