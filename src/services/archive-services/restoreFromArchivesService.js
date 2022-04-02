import axios from "axios";

//RESTORE A NOTE
export const restoreFromArchivesService = async (id, user) => {
  try {
    const { data } = await axios.post(
      `/api/archives/restore/${id}`,
      { note: {  } },
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
