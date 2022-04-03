import axios from "axios";

//delete from Archived Notes
export const deleteFromArchivesService = async (id,user) => {
  try {
    const { data } = await axios.delete(`/api/archives/delete/${id}`, {
      headers: {
        authorization: user.tokenVal,
      },
    });
    return data;
  } catch (error) {
    console.error("delete ArchivedNotes error", error);
    return;
  }
};

