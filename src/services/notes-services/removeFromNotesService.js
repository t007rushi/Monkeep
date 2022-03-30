import axios from "axios";

//REMOVE/DELETE FROM Cart
export const removeFromNotesService = async (id, user) => {
  try {
    const { data } = await axios.delete(`/api/notes/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("cart error", error);
  }
};