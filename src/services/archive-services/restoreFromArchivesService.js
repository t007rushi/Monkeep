import axios from "axios";

//RESTORE A NOTE
export const restoreFromArchivesService = async (Note, id, user) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${id}`,
      { note: { Note } },
      {
        headers: {
          authorization: user.tokenVal,
        },
      }
    );
    return data;
  } catch (error) {
    console.error("Note restore error", error);
  }
};
