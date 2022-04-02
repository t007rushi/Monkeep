import axios from "axios";

//ADD to Archive
export const addToArchiveService = async (Note,_id, user) => {
  try {
    const { data } = await axios.post(
      `/api/notes/archives/${_id}`,
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
