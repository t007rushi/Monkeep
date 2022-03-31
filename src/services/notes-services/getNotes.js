import axios from "axios";

export const getNotes = async (user) => {
  try {
    const { data } = await axios.get("api/notes", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("Notes error", error);
    return;
  }
};
