import axios from "axios";

axios.defaults.baseURL = "http://localhost:5001";

// Fetch all notes
export const fetchNotes = async () => {
  try {
    const response = await axios.get("/api/notes");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Create a new note
export const createNote = async (noteData) => {
  try {
    const response = await axios.post("/api/notes", noteData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Edit an existing note
export const editNote = async (noteId, updatedNoteData) => {
  try {
    const response = await axios.put(`/api/notes/${noteId}`, updatedNoteData);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Delete a note
export const deleteNote = async (noteId) => {
  try {
    const response = await axios.delete(`/api/notes/${noteId}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
