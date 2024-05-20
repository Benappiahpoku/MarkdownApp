// EditNotePage.js
import React, { useState, useEffect } from "react";
import "./EditNotePage.css"; // import the CSS file

const EditNotePage = ({ match }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    // TODO: Load the note data and set the title and content
  }, [match.params.id]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Save the changes to the note
  };

  return (
    <div className="edit-note-page">
      <h1>Edit Note</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Content:
          <textarea value={content} onChange={handleContentChange} />
        </label>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditNotePage;
