import axios from "axios";

//Archived Notes
export const getArchivedNotes = async (user) => {
  try {
    const { data } = await axios.get("api/archives", {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("ArchivedNotes error", error);
    return;
  }
};