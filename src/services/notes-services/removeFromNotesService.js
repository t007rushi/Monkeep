import axios from "axios";

//REMOVE/DELETE FROM NOTE COllection
export const removeFromNotesService = async (id, user) => {
  try {
    const { data } = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("note fetch error", error);
  }
};