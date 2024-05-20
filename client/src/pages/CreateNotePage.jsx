import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createNote } from "../api/note";
import "./CreateNotePage.css";

const CreateNotePage = () => {
  const [title, setTitle] = useState("");
  const [markdown, setMarkdown] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleMarkdownChange = (event) => {
    setMarkdown(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const noteData = { title, content: markdown };
      await createNote(noteData);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-note-page">
      <h1>Create Note</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Markdown:
          <textarea value={markdown} onChange={handleMarkdownChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateNotePage;
