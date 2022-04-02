import axios from "axios";

//ADD A NOTE
export const addNotesService = async (Note, user) => {
  try {
    const { data } = await axios.post(
      "api/notes",
      { note: { Note } },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Note add error", error);
  }
};
