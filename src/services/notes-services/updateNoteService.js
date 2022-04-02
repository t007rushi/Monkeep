import axios from "axios";

//UPDATE A NOTE
export const updateNoteService = async (user, Note, id) => {
  try {
    const { data } = await axios.post(
      `/api/notes/${id}`,
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
