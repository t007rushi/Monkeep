import axios from "axios";

//ADD TO CART
export const addNotesService = async (NoteContent, user) => {
  try {
    const { data } = await axios.post(
      "api/notes",
      { note: { NoteContent } },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Noteerror", error);
  }
};
